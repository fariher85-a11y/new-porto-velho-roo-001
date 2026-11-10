#!/usr/bin/env python3
"""Build the Porto Velho home + two edital pages (Saúde 25/2026 and Educação 24/2026)
from raw IBGP SingleFile HTMLs saved in /tmp.

Removes external navigation, keeps only Porto Velho content and injects the
project access tracking script. Also wires card clicks on the home to navigate
with a 1-second loading overlay to the matching edital page, and wires the
"Realizar inscrição" button on each edital page to /termos-concurso.html.
"""
from bs4 import BeautifulSoup
import re
import os

SRC_HOME   = "/tmp/new_inicio.html"
SRC_SAUDE  = "/tmp/edital24.html"     # content says 25/2026 Saúde (file names swapped)
SRC_EDUC   = "/tmp/edital25.html"     # content says 24/2026 Educação

DST_HOME   = "/app/frontend/public/inicio.html"
DST_SAUDE  = "/app/frontend/public/edital-25.html"
DST_EDUC   = "/app/frontend/public/edital-24.html"

HOME_TITLE = "Concurso Público do Município de Porto Velho - RO"
TERMOS_URL = "/termos-concurso.html"

TRACKING_SCRIPT = (
    "<script>(function(){try{var v=localStorage.getItem('visitor_id');"
    "if(!v){v='v_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,10);"
    "localStorage.setItem('visitor_id',v);}"
    "fetch('/api/track/access',{method:'POST',headers:{'Content-Type':'application/json'},"
    "body:JSON.stringify({page:location.pathname,user_agent:navigator.userAgent,"
    "extra:{visitor_id:v}})}).catch(function(){});}catch(e){}})();</script>"
)

# Loading overlay (shared markup + CSS + navigation handler).
LOAD_OVERLAY = """
<style>
#loadOv{position:fixed;inset:0;background:rgba(255,255,255,.85);z-index:9999;display:none;align-items:center;justify-content:center}
#loadOv.on{display:flex}
#loadOv .sp{width:56px;height:56px;border:6px solid #e5e5e5;border-top-color:#bd362f;border-radius:50%;animation:spin .8s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
</style>
<div id="loadOv"><div class="sp"></div></div>
"""

# Script that intercepts any element with data-nav and navigates after 1s with overlay
NAV_SCRIPT = """
<script>
document.addEventListener('click', function(e){
  var el = e.target.closest && e.target.closest('[data-nav]');
  if(!el) return;
  e.preventDefault();
  var url = el.getAttribute('data-nav');
  var ov = document.getElementById('loadOv');
  if(ov) ov.classList.add('on');
  setTimeout(function(){ window.location.href = url; }, 1000);
});
</script>
"""

BACK_BUTTON_HTML = """
<a href="/inicio.html" id="btnVoltar" data-nav="/inicio.html"
   style="position:fixed;top:14px;left:14px;z-index:10000;background:#bd362f;color:#fff;
          padding:10px 18px;border-radius:6px;font-weight:600;text-decoration:none;
          box-shadow:0 2px 6px rgba(0,0,0,.25);font-family:Arial,sans-serif">
  &larr; Voltar
</a>
"""

# Vanilla accordion behavior to replace Bootstrap's JS (removed with scripts).
ACCORDION_CSS_JS = """
<style>
#conteudo .accordion-body.collapse{display:none;height:auto!important}
#conteudo .accordion-body.collapse.open{display:block}
#conteudo .accordion-toggle{cursor:pointer}
/* Hide per-cargo +/- icons since detail data isn't included in the saved page */
#cargos .icon-plus,#cargos .icon-minus{display:none!important}
</style>
<script>
document.addEventListener('click', function(e){
  var t = e.target.closest && e.target.closest('.accordion-toggle');
  if(!t) return;
  e.preventDefault();
  var href = t.getAttribute('href') || '';
  if(href.charAt(0) !== '#') return;
  var body = document.querySelector(href);
  if(!body) return;
  // close siblings (parent accordion behavior)
  var parent = t.getAttribute('data-parent');
  if(parent){
    var scope = document.querySelector(parent);
    if(scope){
      scope.querySelectorAll('.accordion-body.collapse.open').forEach(function(x){
        if(x !== body) x.classList.remove('open');
      });
      scope.querySelectorAll('.accordion-toggle').forEach(function(x){
        if(x !== t) x.classList.add('collapsed');
      });
    }
  }
  body.classList.toggle('open');
  body.style.height = '';
  t.classList.toggle('collapsed', !body.classList.contains('open'));
});
</script>
"""


def neutralize_links(soup):
    """Replace any absolute external href with '#' and strip target=_blank."""
    for a in soup.find_all("a"):
        href = a.get("href", "")
        if href and (href.startswith("http://") or href.startswith("https://")
                     or href.startswith("//") or href.startswith("mailto:")):
            a["href"] = "#"
        if a.has_attr("target"):
            del a["target"]


def strip_scripts(soup):
    for s in soup.find_all("script"):
        s.decompose()


def append_raw(soup, raw_html):
    frag = BeautifulSoup(raw_html, "html.parser")
    soup.body.append(frag)


# -------- HOME --------
with open(SRC_HOME, "r", encoding="utf-8") as f:
    soup = BeautifulSoup(f.read(), "lxml")

t = soup.find("title")
if t: t.string = HOME_TITLE

# Remove carousel
c = soup.find(id="myCarousel")
if c: c.decompose()

# H1
for h in soup.find_all("h1"):
    if h.get_text(strip=True).lower().startswith("inscri"):
        h.string = HOME_TITLE
        break

# Make the "Inscrições abertas" block visible (padding, no negative margin)
block_parent = None
for h1 in soup.find_all("h1"):
    if h1.get_text(strip=True) == HOME_TITLE:
        block_parent = h1.parent
        break
if block_parent is not None:
    block_parent["style"] = "padding:28px 8px;text-align:center;background-color:#eee;margin-top:60px;margin-bottom:10px"

# Keep only Porto Velho cards and wire them up
div_abertos = soup.find(id="divAbertos")
keepers = []
if div_abertos:
    for span in div_abertos.find_all("div", class_="span4"):
        text = span.get_text(" ", strip=True).upper()
        if "PORTO VELHO" in text:
            keepers.append(span.extract())
    for child in list(div_abertos.children):
        try: child.extract()
        except Exception: pass

    for span in keepers:
        full = span.get_text(" ", strip=True).upper()
        if "SAÚDE" in full or "SAUDE" in full:
            dest = "/edital-25.html"
        else:
            dest = "/edital-24.html"
        span["data-nav"] = dest
        span["style"] = (span.get("style", "") + ";cursor:pointer").strip(";")
        # update SAIBA MAIS button too (already neutralized later but keep it meaningful)
        btn = span.find("a", string=lambda s: s and "SAIBA MAIS" in s.upper())
        if btn:
            btn["href"] = dest
            btn["data-nav"] = dest
    row = soup.new_tag("div")
    row["class"] = "row-fluid mkt"
    for sp in keepers:
        row.append(sp)
    div_abertos.append(row)

neutralize_links(soup)
# Re-assert destinations after neutralization (external replacement wiped them)
if div_abertos:
    for span in div_abertos.find_all("div", class_="span4"):
        dest = span.get("data-nav")
        if dest:
            btn = span.find("a", class_="btn-danger") or span.find("a")
            if btn:
                btn["href"] = dest

strip_scripts(soup)
append_raw(soup, LOAD_OVERLAY)
append_raw(soup, NAV_SCRIPT)
append_raw(soup, TRACKING_SCRIPT)

with open(DST_HOME, "w", encoding="utf-8") as f:
    f.write(str(soup).replace("11/11/26 17:00", "11/11/26 23:59"))
print(f"[home] wrote {DST_HOME} cards={len(keepers)}")


# Modal "Comunicado aos Candidatos"
def modal_html(concurso_desc, edital_label, deadline_date, deadline_time):
    return f"""
<style>
#comunicadoBackdrop{{position:fixed;inset:0;background:rgba(15,22,37,.62);z-index:10050;display:none;align-items:flex-start;justify-content:center;padding:70px 16px;overflow-y:auto}}
#comunicadoBackdrop.on{{display:flex}}
#comunicadoModal{{background:#fff;border-radius:16px;max-width:620px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,.35);padding:34px 38px 28px;position:relative;font-family:Arial,Helvetica,sans-serif;color:#222;line-height:1.5}}
#comunicadoModal h3{{margin:0 0 18px;font-size:22px;letter-spacing:.3px;color:#111}}
#comunicadoModal p{{margin:0 0 14px;font-size:15px}}
#comunicadoModal strong{{color:#111}}
#comunicadoClose{{position:absolute;top:14px;right:14px;width:34px;height:34px;border-radius:50%;background:#e9eef7;color:#334;border:none;font-size:18px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 1px 2px rgba(0,0,0,.08)}}
#comunicadoClose:hover{{background:#dde5f2}}
#comunicadoOk{{display:inline-block;margin-top:10px;background:#1a66ff;color:#fff;padding:12px 28px;border:none;border-radius:999px;font-size:15px;font-weight:600;cursor:pointer;float:right;box-shadow:0 4px 12px rgba(26,102,255,.35)}}
#comunicadoOk:hover{{background:#0e52db}}
#comunicadoModal .end{{clear:both}}
</style>
<div id="comunicadoBackdrop" role="dialog" aria-modal="true" aria-labelledby="comunicadoTitle">
  <div id="comunicadoModal">
    <button id="comunicadoClose" aria-label="Fechar">&times;</button>
    <h3 id="comunicadoTitle">COMUNICADO AOS CANDIDATOS</h3>
    <p>Informamos que as inscrições para o <strong>{concurso_desc}</strong> &ndash; <strong>Edital Nº {edital_label}</strong> encerram-se no dia <strong>{deadline_date}</strong>, às <strong>{deadline_time}</strong>, horário oficial de Brasília.</p>
    <p>Recomendamos que a inscrição e o respectivo pagamento sejam realizados com antecedência, para evitar imprevistos de última hora.</p>
    <button id="comunicadoOk">OK, entendi</button>
    <div class="end"></div>
  </div>
</div>
<script>
(function(){{
  var bd = document.getElementById('comunicadoBackdrop');
  if(!bd) return;
  function close(){{ bd.classList.remove('on'); }}
  document.getElementById('comunicadoClose').addEventListener('click', close);
  document.getElementById('comunicadoOk').addEventListener('click', close);
  bd.addEventListener('click', function(e){{ if(e.target === bd) close(); }});
  document.addEventListener('keydown', function(e){{ if(e.key === 'Escape') close(); }});
  // Open automatically on page load
  bd.classList.add('on');
}})();
</script>
"""


# -------- EDITAL PAGES --------
def build_edital(src, dst, page_title, modal_concurso, modal_edital):
    with open(src, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f.read(), "lxml")

    t = soup.find("title")
    if t: t.string = page_title

    # Remove the "Outros certames" block
    outros = soup.find(id="outros")
    if outros: outros.decompose()
    # also remove any leftover divOutros/thumbOutros
    for _id in ("divOutros", "thumbOutros", "outroEmpresa"):
        el = soup.find(id=_id)
        if el: el.decompose()

    # Point "Realizar inscrição" button to termos
    btn_insc = soup.find(id="btnRealizarInscricao")
    if btn_insc:
        btn_insc["href"] = TERMOS_URL
        btn_insc["data-nav"] = TERMOS_URL
        if btn_insc.has_attr("target"):
            del btn_insc["target"]

    # Move the "Realizar inscrição" button to appear right above the "Cargo"
    # accordion (centered). We lift it out of its current parent <div
    # style="text-align:center"> (removing that wrapper) and re-insert a fresh
    # centered wrapper immediately before the #accordion2 container.
    accordion = soup.find(id="accordion2")
    if btn_insc and accordion:
        old_wrapper = btn_insc.parent
        btn_insc.extract()
        # If the old wrapper was the centering div and is now empty, drop it.
        if old_wrapper and old_wrapper.name == "div" and not old_wrapper.get_text(strip=True) \
                and not old_wrapper.find(True):
            old_wrapper.decompose()
        new_wrapper = soup.new_tag(
            "div",
            attrs={"style": "text-align:center;margin:20px 0 15px"},
        )
        new_wrapper.append(btn_insc)
        accordion.insert_before(new_wrapper)

    neutralize_links(soup)
    # Re-apply inscrição destination after neutralization
    if btn_insc:
        btn_insc["href"] = TERMOS_URL

    strip_scripts(soup)

    # Inject back button + loading overlay + nav + accordion + modal + tracking
    append_raw(soup, BACK_BUTTON_HTML)
    append_raw(soup, LOAD_OVERLAY)
    append_raw(soup, NAV_SCRIPT)
    append_raw(soup, ACCORDION_CSS_JS)
    append_raw(soup, modal_html(modal_concurso, modal_edital,
                                "11/11/2026", "23h59min"))
    append_raw(soup, TRACKING_SCRIPT)

    with open(dst, "w", encoding="utf-8") as f:
        f.write(str(soup).replace("11/11/26 17:00", "11/11/26 23:59"))
    print(f"[edital] wrote {dst}")


build_edital(SRC_SAUDE, DST_SAUDE,
             "Edital 25/2026 - Saúde - Porto Velho/RO",
             "Concurso Público da Saúde do Município de Porto Velho/RO",
             "25/2026")
build_edital(SRC_EDUC, DST_EDUC,
             "Edital 24/2026 - Educação - Porto Velho/RO",
             "Concurso Público da Educação do Município de Porto Velho/RO",
             "24/2026")
