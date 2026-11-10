(function(){
  // Cidade(s) de prova — Porto Velho/RO
  var CIDADES = [['PORTO VELHO/RO', 'PORTO VELHO/RO']];
  var C = {
    portovelho_concurso: {
      titulo: 'Concurso Público do Município de Porto Velho - RO', sigla: 'PMPV', orgao: 'Prefeitura Municipal de Porto Velho',
      edital_opt: 'Concurso Público do Município de Porto Velho - RO',
      edital_curto: 'Edital de Abertura',
      orgao_edital: 'Prefeitura Municipal de Porto Velho - RO',
      logo: '/assets/home/img1.webp',
      cargos: [
        {v: '101', n: 'Médio/Técnico', t: 'Agente Administrativo', p: '0.00'},
        {v: '102', n: 'Médio/Técnico', t: 'Fiscal', p: '0.00'},
        {v: '103', n: 'Médio/Técnico', t: 'Fiscal de Obras e Posturas', p: '0.00'},
        {v: '201', n: 'Superior', t: 'Analista Administrativo', p: '0.00'},
        {v: '202', n: 'Superior', t: 'Analista de Finanças', p: '0.00'},
        {v: '203', n: 'Superior', t: 'Assistente Social', p: '0.00'},
        {v: '204', n: 'Superior', t: 'Auditor Fiscal de Tributos Municipais', p: '0.00'},
        {v: '205', n: 'Superior', t: 'Contador', p: '0.00'},
        {v: '206', n: 'Superior', t: 'Engenheiro Civil', p: '0.00'},
        {v: '301', n: 'Carreira Jurídica', t: 'Procurador do Município', p: '0.00'}
      ],
      pagina: '/termos-concurso.html'
    },
    portovelho_seletivo: {
      titulo: 'Processo Seletivo Simplificado (PSS) de Porto Velho', sigla: 'PSS', orgao: 'Prefeitura Municipal de Porto Velho',
      edital_opt: 'Processo Seletivo Simplificado (PSS) do Município de Porto Velho - RO',
      edital_curto: 'PSS - Contratações temporárias',
      orgao_edital: 'Prefeitura Municipal de Porto Velho - RO',
      logo: '/assets/home/img1.webp',
      cargos: [
        {v: '501', n: 'Médio', t: 'Agente Administrativo', p: '0.00'},
        {v: '502', n: 'Superior', t: 'Contador', p: '0.00'},
        {v: '503', n: 'Superior', t: 'Engenheiro Civil', p: '0.00'}
      ],
      pagina: '/termos-seletivo.html'
    }
  };
  // Aliases aceitos na URL (?c=...)
  var ALIAS = {concurso: 'portovelho_concurso', seletivo: 'portovelho_seletivo', pss: 'portovelho_seletivo', portovelho: 'portovelho_concurso', curitiba: 'portovelho_concurso', curitiba_concurso: 'portovelho_concurso', curitiba_seletivo: 'portovelho_seletivo'};
  function norm(k){ k = (ALIAS[k] || k); return C[k] ? k : ''; }
  var key = 'portovelho_concurso';
  try {
    var q = norm(new URLSearchParams(location.search).get('c') || '');
    if (q) { key = q; localStorage.setItem('concurso_sel', q); }
    else { var s = norm(localStorage.getItem('concurso_sel') || ''); if (s) { key = s; localStorage.setItem('concurso_sel', s); } }
  } catch (e) {}
  var cur = C[key];
  window.SEAD_CONCURSO = {key: key, cfg: cur};

  function optHtml(list){
    return '<option value="">Selecione</option>' + list.map(function(c){
      return '<option value="' + c.v + '" data-price="' + c.p + '" data-nivel="' + (c.n || '') + '">' +
             c.v + '  -  ' + c.t + '  -  R$ ' + c.p.replace('.', ',') + '</option>';
    }).join('');
  }

  function fill(){
    document.querySelectorAll('[data-c]').forEach(function(el){
      var k = el.getAttribute('data-c');
      if (cur[k] != null && el.textContent !== cur[k]) el.textContent = cur[k];
    });
    document.querySelectorAll('[data-c-src]').forEach(function(el){
      var k = el.getAttribute('data-c-src');
      if (cur[k] != null && el.getAttribute('src') !== cur[k]) el.setAttribute('src', cur[k]);
    });
    var vaga = document.getElementById('VAGA');
    if (vaga && !vaga.dataset.cfg) {
      vaga.dataset.cfg = key;
      vaga.innerHTML = optHtml(cur.cargos);

      // Campo "Nível de escolaridade" que filtra as vagas por nível
      var niveis = cur.cargos.map(function(c){ return c.n; }).filter(function(v, i, a){ return v && a.indexOf(v) === i; });
      if (niveis.length > 1 && !document.getElementById('NIVEL')) {
        var host = vaga.closest('.campo, .form-group, .form-row, p') || vaga.parentNode;
        var wrap = document.createElement('div');
        wrap.className = 'campo-nivel';
        wrap.style.margin = '0 0 12px';
        wrap.innerHTML = '<label for="NIVEL" style="display:block;font-weight:600;margin-bottom:4px">Nível de escolaridade</label>' +
          '<select id="NIVEL" style="width:100%"><option value="">Todos os níveis</option>' +
          niveis.map(function(n){ return '<option value="' + n + '">' + n + '</option>'; }).join('') + '</select>';
        host.parentNode.insertBefore(wrap, host);
        document.getElementById('NIVEL').addEventListener('change', function(){
          var nv = this.value;
          var list = nv ? cur.cargos.filter(function(c){ return c.n === nv; }) : cur.cargos;
          vaga.innerHTML = optHtml(list);
          vaga.dispatchEvent(new Event('change', {bubbles: true}));
        });
      }
    }
    var mp = document.getElementById('MUNICIPIO_PROVA');
    if (mp && !mp.dataset.cfg) {
      mp.dataset.cfg = key;
      var prev = mp.value;
      mp.innerHTML = '<option value="">Selecione</option>' + CIDADES.map(function(c){ return '<option value="' + c[0] + '" data-uf="RO">' + c[1] + '</option>'; }).join('');
      if (CIDADES.some(function(c){ return c[0] === prev; })) mp.value = prev;
    }
    var uf = document.getElementById('UF_PROVA'); if (uf) uf.value = 'RO';
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fill); else fill();
  // Formulário multi-etapas: o campo #VAGA pode ser injetado só ao avançar de etapa.
  // Observa até o VAGA aparecer e então desconecta (evita loop com outras mutações).
  try {
    var mo = new MutationObserver(function(){
      var v = document.getElementById('VAGA');
      if (v) { fill(); if (v.dataset.cfg) mo.disconnect(); }
    });
    mo.observe(document.documentElement, {childList: true, subtree: true});
  } catch (e) {}
  window.addEventListener('load', function(){
    var v = document.getElementById('VAGA'); if (!v) return;
    var sv = ''; try { sv = (JSON.parse(localStorage.getItem('inscricao_dados') || '{}').VAGA) || ''; } catch (e) {}
    v.value = sv; v.dispatchEvent(new Event('change', {bubbles: true}));
    if (v.selectedIndex < 0) v.selectedIndex = 0;
  });
})();
