# E2E email pipeline tests (Porto Velho rebrand): track/registration (cadastro + inscricao) and admin lembrete individual
import os
import random
import subprocess
import sys
import time

import pytest
import requests

sys.path.insert(0, "/app/backend")

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL").rstrip("/")
TEST_EMAIL = "fariher85@gmail.com"
LOG_GLOB = "/var/log/supervisor/backend.*.log"


def _gen_cpf():
    n = [random.randint(0, 9) for _ in range(9)]
    for _ in range(2):
        s = sum(v * w for v, w in zip(n, range(len(n) + 1, 1, -1)))
        d = (s * 10) % 11
        n.append(0 if d == 10 else d)
    return "".join(map(str, n))


def _log_tail(lines=400):
    return subprocess.run(f"tail -n {lines} {LOG_GLOB}", shell=True, capture_output=True, text=True).stdout


@pytest.fixture(scope="module")
def admin():
    s = requests.Session()
    r = s.post(f"{BASE_URL}/api/admin/auth/login", json={"username": "donas", "password": "Seinao10@@"})
    if r.status_code != 200:
        pytest.skip(f"admin login failed {r.status_code}")
    tok = r.json().get("token") or r.json().get("access_token")
    s.headers.update({"Authorization": f"Bearer {tok}"})
    return s


@pytest.fixture(scope="module")
def state(admin):
    st = {"cpfs": [], "insc_ids": []}
    yield st
    for iid in st["insc_ids"]:
        admin.delete(f"{BASE_URL}/api/admin/inscriptions/{iid}")
    for c in st["cpfs"]:
        admin.delete(f"{BASE_URL}/api/admin/cadastros/{c}")


# --- Template rendering: no Curitiba / old deadline ---
class TestTemplates:
    def test_cadastro_html_clean(self):
        from email_service import build_cadastro_email_html
        h = build_cadastro_email_html(nome="TEST_ Fulano", cpf="12345678909", nascimento="1990-01-01",
                                      email=TEST_EMAIL, cidade="Porto Velho / RO", base_url="https://x.com", sessao="abc")
        for bad in ("Curitiba", "06/11/2026", "SEDUC", "curitiba"):
            assert bad not in h, bad
        assert "Porto Velho" in h

    def test_inscricao_html_clean(self):
        from email_service import build_inscricao_email_html
        for lp in ("", "11/11/2026, às 23h59 (horário de Brasília)"):
            h = build_inscricao_email_html(nome="TEST_ Fulano", cpf="12345678909", protocolo="P1",
                                           cargo="303 - AGENTE COMUNITÁRIO DE SAÚDE", concurso="CONCURSO_PV_SAUDE",
                                           valor=105.0, base_url="https://x.com", lembrete_prazo=lp)
            for bad in ("Curitiba", "06/11/2026", "SEDUC", "curitiba"):
                assert bad not in h, bad
            assert "11/11/2026" in h
            assert "Porto Velho" in h
            assert "105,00" in h


# --- HTTP pipeline ---
class TestPipeline:
    def test_cadastro_only_sends_bem_vindo(self, admin, state):
        cpf = _gen_cpf()
        state["cpfs"].append(cpf)
        r = requests.post(f"{BASE_URL}/api/track/registration", json={"page": "cadastro", "extra": {
            "nome": "TEST_ PIPELINE CADASTRO", "cpf": cpf, "email": TEST_EMAIL, "concurso": "CONCURSO_PV_SAUDE",
            "form_data": {"DATA_NASCIMENTO": "1990-05-10", "EMAIL": TEST_EMAIL, "CIDADE": "Porto Velho", "UF": "RO"}}})
        assert r.status_code == 200 and r.json() == {"ok": True}
        time.sleep(2)
        log = _log_tail()
        assert f"'Bem vindo!' -> {TEST_EMAIL}" in log, "cadastro email not logged as sent"
        d = admin.get(f"{BASE_URL}/api/admin/cadastros/{cpf}/details")
        assert d.status_code == 200
        assert cpf in d.text

    def test_finalizar_inscricao(self, admin, state):
        cpf = _gen_cpf()
        state["cpfs"].append(cpf)
        state["main_cpf"] = cpf
        r = requests.post(f"{BASE_URL}/api/track/registration", json={"page": "inscricao", "extra": {
            "nome": "TEST_ PIPELINE INSCRICAO", "cpf": cpf, "email": TEST_EMAIL, "concurso": "CONCURSO_PV_SAUDE",
            "cargo_codigo": "303", "cargo_titulo": "AGENTE COMUNITÁRIO DE SAÚDE", "valor": 105.0,
            "finalized": True, "protocolo": f"TEST{cpf[:6]}",
            "form_data": {"DATA_NASCIMENTO": "1990-05-10", "EMAIL": TEST_EMAIL}}})
        assert r.status_code == 200 and r.json() == {"ok": True}
        time.sleep(2)
        log = _log_tail()
        assert f"'Inscrição realizada com sucesso' -> {TEST_EMAIL}" in log
        li = admin.get(f"{BASE_URL}/api/admin/inscriptions", params={"q": cpf})
        assert li.status_code == 200
        body = li.json()
        items = body.get("items", body) if isinstance(body, dict) else body
        mine = [i for i in items if i.get("cpf") == cpf]
        assert mine, "inscricao not persisted"
        assert mine[0]["valor"] == 105.0 and mine[0]["email"] == TEST_EMAIL
        assert mine[0]["cargo_codigo"] == "303"
        state["insc_ids"].append(mine[0]["id"])

    def test_lembrete_individual(self, admin, state):
        cpf = state.get("main_cpf")
        assert cpf
        r = admin.post(f"{BASE_URL}/api/admin/inscricoes/{cpf}/lembrete-pagamento")
        assert r.status_code == 200, r.text
        j = r.json()
        assert j["ok"] is True and j["email"] == TEST_EMAIL
        time.sleep(1)
        assert f"'Lembrete: sua inscrição está pendente de pagamento' -> {TEST_EMAIL}" in _log_tail()

    def test_lembrete_404(self, admin):
        r = admin.post(f"{BASE_URL}/api/admin/inscricoes/00000000000/lembrete-pagamento")
        assert r.status_code == 404

    def test_lembrete_400_invalid(self, admin):
        r = admin.post(f"{BASE_URL}/api/admin/inscricoes/123/lembrete-pagamento")
        assert r.status_code == 400

    def test_lembrete_requires_auth(self):
        r = requests.post(f"{BASE_URL}/api/admin/inscricoes/00000000000/lembrete-pagamento")
        assert r.status_code in (401, 403)

    def test_spec_named_endpoints_absent(self, admin):
        # Endpoints named in review request do not exist in code
        r1 = admin.post(f"{BASE_URL}/api/admin/inscricao/finalizar", json={})
        r2 = admin.post(f"{BASE_URL}/api/admin/inscricao/reenviar-lembrete?cpf=00000000000")
        print("finalizar:", r1.status_code, "reenviar:", r2.status_code)
        assert r1.status_code in (404, 405) and r2.status_code in (404, 405)
