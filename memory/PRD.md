# PRD — Concurso Prefeitura Curitiba (clone do repositório)

## Origem
- Repositório: https://github.com/argfaisall-ux/projetctor-concurso-prefeitur-curitiba-004
- Clonado em /app em 09/Nov/2026 preservando `.git`, `.emergent`, `backend/.env`, `frontend/.env`.
- Instrução do usuário: rodar como está, sem alterar arquitetura, textos, layout ou lógica.

## Stack
- Backend: FastAPI em `/app/backend` (`server.py`, `admin_routes.py`, `pix_generator.py`, `email_service.py`)
- Frontend: React + CRACO em `/app/frontend` (build via `yarn build`), páginas públicas em `frontend/public/` (inicio.html, donaspainel/, etc.)
- Banco: MongoDB (`MONGO_URL` do `backend/.env`)

## Variáveis de ambiente (backend/.env)
- `MONGO_URL`, `DB_NAME`, `CORS_ORIGINS` — preservados do ambiente.
- `JWT_SECRET` — gerado aleatório forte (token_urlsafe 64).
- `ADMIN_USERNAME=donas`, `ADMIN_PASSWORD=Seinao10@@` (seed_admin ao startup).
- `RESEND_API_KEY`, `RESEND_FROM`, `APP_PUBLIC_URL` — vazios no preview (e-mail desativado).

## Status atual
- Backend: rodando (supervisor) — `GET /api/` responde 200.
- Frontend: buildado e rodando — home `/inicio.html` e painel `/donaspainel/` acessíveis.
- Login admin `POST /api/admin/auth/login` retorna JWT corretamente.

## Observações
- Se no futuro ocorrer 401 no login mesmo com seed, apagar documento `donas` da collection `admins` e reiniciar o backend.
