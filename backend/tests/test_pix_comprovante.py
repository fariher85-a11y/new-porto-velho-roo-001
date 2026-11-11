# Tests for the /comprovante-inscricao.html side-effects:
#  - POST /api/track/pix-downloaded (contabiliza no card PIX BAIXADOS)
#  - GET  /api/pix/qr.png (QR binario PNG usado no comprovante)
#  - GET  /api/admin/dashboard/kpis (card pix_baixados incrementa)
import os
import io
import requests
import pytest

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL').rstrip('/')
ADMIN_USER = 'donas'
ADMIN_PASS = 'Seinao10@@'

# CPF unico para nao interferir em dados reais
TEST_CPF = '99988877766'
TEST_CARGO = 'TEST999'

PAYLOAD = {
    'extra': {
        'cpf': TEST_CPF,
        'nome': 'TEST_COMPROVANTE CANDIDATO',
        'concurso': 'edital_25_saude',
        'cargo_codigo': TEST_CARGO,
        'cargo_titulo': 'TEST Cargo Comprovante',
        'valor': 105.0,
        'email': 'test_comprovante@example.com',
        'protocolo': 'TESTPROTO123',
    }
}


@pytest.fixture(scope='module')
def admin_token():
    r = requests.post(f"{BASE_URL}/api/admin/auth/login",
                      json={'username': ADMIN_USER, 'password': ADMIN_PASS})
    if r.status_code != 200:
        pytest.skip(f"Admin login failed: {r.status_code} {r.text[:200]}")
    data = r.json()
    tok = data.get('token') or data.get('access_token')
    assert tok, f"No token in login response: {data}"
    return tok


def _kpis(token):
    r = requests.get(f"{BASE_URL}/api/admin/dashboard/kpis",
                     headers={'Authorization': f'Bearer {token}'})
    assert r.status_code == 200, f"kpis failed: {r.status_code} {r.text[:200]}"
    return r.json()


def test_qr_png_endpoint():
    """GET /api/pix/qr.png deve retornar um PNG binario valido."""
    r = requests.get(f"{BASE_URL}/api/pix/qr.png",
                     params={'valor': '105.00', 'txid': 'TESTPROTO123'})
    assert r.status_code == 200, f"qr.png status {r.status_code}: {r.text[:200]}"
    assert r.headers.get('content-type', '').startswith('image/png'), \
        f"content-type nao eh PNG: {r.headers.get('content-type')}"
    # assinatura PNG
    assert r.content[:8] == b'\x89PNG\r\n\x1a\n', "conteudo nao eh PNG valido"
    assert len(r.content) > 500, "PNG muito pequeno para ser um QR real"


def test_pix_downloaded_increments_card(admin_token):
    """POST /api/track/pix-downloaded deve retornar {ok:true} e incrementar pix_baixados.

    O upsert usa chave {cpf, cargo_codigo}; usamos um CPF+cargo que nao deveria
    existir, entao o primeiro POST cria o registro -> contador +1.
    """
    before = _kpis(admin_token)['pix_baixados']

    r = requests.post(f"{BASE_URL}/api/track/pix-downloaded", json=PAYLOAD)
    assert r.status_code == 200, f"track status {r.status_code}: {r.text[:200]}"
    body = r.json()
    assert body.get('ok') is True, f"resposta inesperada: {body}"

    after = _kpis(admin_token)['pix_baixados']
    # Primeiro download deste CPF+cargo deve aumentar o contador em 1
    assert after == before + 1, \
        f"pix_baixados nao incrementou: before={before} after={after}"


def test_pix_downloaded_idempotent(admin_token):
    """Reenviar o mesmo payload (mesmo cpf+cargo) NAO deve duplicar o contador."""
    count1 = _kpis(admin_token)['pix_baixados']
    r = requests.post(f"{BASE_URL}/api/track/pix-downloaded", json=PAYLOAD)
    assert r.status_code == 200
    count2 = _kpis(admin_token)['pix_baixados']
    assert count2 == count1, f"reenvio duplicou contador: {count1} -> {count2}"


def test_cleanup_test_record():
    """Remove apenas o registro de teste criado (por CPF unico de teste)."""
    import asyncio
    from motor.motor_asyncio import AsyncIOMotorClient

    mongo_url = os.environ.get('MONGO_URL')
    db_name = os.environ.get('DB_NAME')
    if not mongo_url or not db_name:
        pytest.skip('MONGO_URL/DB_NAME nao disponiveis para cleanup')

    async def _clean():
        client = AsyncIOMotorClient(mongo_url)
        db = client[db_name]
        res_dl = await db.pix_downloaded.delete_many({'cpf': TEST_CPF, 'cargo_codigo': TEST_CARGO})
        client.close()
        return res_dl.deleted_count

    deleted = asyncio.get_event_loop().run_until_complete(_clean())
    assert deleted >= 1, "Esperava remover ao menos 1 registro de teste"
