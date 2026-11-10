# PRD — Concurso Público Município de Porto Velho - RO (IBGP)

## Origem
- Base clonada de repo `projetctor-concurso-prefeitur-curitiba-004` em 09/Nov/2026.
- Rebrand para Porto Velho/IBGP em andamento desde 10/Nov/2026.

## Stack
- Backend: FastAPI (`/app/backend`) — `server.py`, `admin_routes.py`, `pix_generator.py`, `email_service.py`.
- Frontend: páginas estáticas em `/app/frontend/public/` + bundle React do painel admin em `/app/frontend/public/donaspainel/`.
- Banco: MongoDB (`MONGO_URL`).

## Credenciais
Ver `/app/memory/test_credentials.md`.

## Identidade atual
- Nome do concurso: **Concurso Público do Município de Porto Velho - RO**
- Organizadora/Banca: **IBGP**
- Cor primária: Vermelho IBGP `#a9302a`

## Alterações recentes
### 10/Nov/2026 — Rebrand do painel admin (Curitiba → Porto Velho)
- `donaspainel/index.html`: título `Painel — Concurso Porto Velho`; cache-buster do bundle atualizado para `?v=portovelho1`.
- `donaspainel/admin-extras.js`: comentário atualizado.
- `donaspainel/documentos.html` e `donaspainel-documentos.html`: títulos atualizados.
- `donaspainel/static/js/main.fda9cfa6.js` (bundle React minificado): 6 ocorrências de `Concurso Curitiba` → `Concurso Porto Velho` (sidebar brand, label do admin, `document.title`, cabeçalho do Dashboard e cabeçalho do relatório TXT).
- `backend/admin_routes.py`:
  - `_from_name_inscricao`: `Processo Seletivo Curitiba` → `Processo Seletivo Porto Velho`; `Concurso Curitiba` → `Concurso Porto Velho`.
  - Seed default do PIX: `pix_nome` `IBGP CONCURSOS`, `pix_cidade` `Porto Velho`.
  - Fallbacks PIX (QR, code.txt, gerador): `IBGP CONCURSOS` / `PORTO VELHO`.
  - `_build_telegram_message`: siglas trocadas para `CONCURSO PORTO VELHO` e `TESTE SELETIVO PORTO VELHO`.
  - `try_send_email` do cadastro: `from_name='Concurso Porto Velho'`.
- `backend/email_service.py`:
  - `EMAIL_FROM_NAME` default `Concurso Porto Velho`.
  - Constantes `CONCURSO_NOME`, `ORGAO` (`Prefeitura Municipal de Porto Velho - RO`), `ORGANIZADORA` (`IBGP`), `EDITAL` (`Concurso Público — Município de Porto Velho - RO`).
  - `concurso_de()` retorna textos de Porto Velho.
  - Alt/footer dos e-mails: `Concurso Porto Velho`.
  - Observação: o arquivo físico do logo continua `concurso-curitiba-logo.png` (filename apenas; texto visível 100% atualizado).
- Validação: screenshots do login, dashboard e configurações do painel + teste unitário da função `_build_telegram_message` confirmando nova sigla.

### 10/Nov/2026 — Cor primária Vermelho IBGP #a9302a
Todas as páginas do fluxo (termos-concurso, inscricao, dados-inscricao, pagamento-pix, confirmacao, inscricao-realizada) migradas do verde legado para o vermelho IBGP.

### 10/Nov/2026 — Home, editais, headers, brasão
Ver histórico anterior (home Porto Velho, editais 24/25, header IBGP, brasão Porto Velho, modal comunicado, prazo 23h59).

## Backlog
- **P0 — Taxas de inscrição reais por cargo em `/app/frontend/public/seduc/concurso.js`** (aguardando tabela do usuário).
- P1 — Verificar se há banner/logo IBGP para substituir o arquivo físico `concurso-curitiba-logo.png` nos e-mails.
- P2 — Revisão final de textos residuais em páginas raramente visitadas (minhas-inscricoes, termos-seletivo).
