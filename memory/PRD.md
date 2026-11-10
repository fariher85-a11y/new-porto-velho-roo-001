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

## Alterações (10/Nov/2026) — Nova home Porto Velho
- `/app/frontend/public/inicio.html` substituída pela versão derivada do upload "IBGP CONCURSOS".
- Título da página e H1 trocados para **"Concurso Público do Município de Porto Velho - RO"**.
- Carrossel/banner removido (incluindo o item de Residência/Especialização externo).
- Mantidos apenas os 2 cards de Porto Velho: **Edital 25/2026 (Saúde)** e **Edital 24/2026 (Educação)**; demais cards (BOCAINA, LAMBARI, SÃO JOÃO DEL-REI, CONTAGEM, BALDIM, PIRAPORA, LEOPOLDINA, CONFINS, LIMA DUARTE, ONÇA DE PITANGUI, UNIPAC, etc.) excluídos.
- Todos os `<a>` com `http(s)://`, `//` ou `mailto:` neutralizados para `href="#"` e `target="_blank"` removido.
- Scripts originais da página removidos; apenas o script de rastreamento `fetch('/api/track/access', …)` foi injetado antes de `</body>`.
- Backups antigos (`inicio.html.bak*`) removidos a pedido do usuário.
- Ajuste visual: título ganhou `margin-top: 60px` + padding para descolar do cabeçalho.

## Alterações (10/Nov/2026) — Páginas de edital + overlay de carregamento
- Criadas `/app/frontend/public/edital-25.html` (Saúde) e `/app/frontend/public/edital-24.html` (Educação) a partir dos uploads IBGP.
- Em cada edital: título ajustado, seção `#outros` (Outros Certames) removida, botão **← Voltar** fixo no canto superior esquerdo apontando para `/inicio.html`.
- Botão **Realizar inscrição** (`#btnRealizarInscricao`) nas duas páginas redirecionado para `/termos-concurso.html`.
- Links externos neutralizados (`href="#"`, sem `target=_blank`); scripts originais removidos; rastreamento `/api/track/access` injetado antes de `</body>`.
- Cards da home agora são 100% clicáveis via `data-nav`; clicar em qualquer área mostra overlay de carregamento (spinner vermelho) por 1 segundo antes da navegação para a página de edital correspondente.
- Acordeões CARGO / EDITAL / COMUNICADOS / RESULTADOS reativados via JS vanilla (substituindo o Bootstrap 2 removido): ao clicar expande o conteúdo e fecha os irmãos. Ícones "+" dentro da tabela de cargos ocultos (`#cargos .icon-plus/.icon-minus { display:none }`) porque o detalhe por cargo não vem no HTML salvo.
- Script gerador da home + editais versionado em `/app/scripts/build_porto_velho.py`.

## Alterações (10/Nov/2026) — Deadline 23h59, modal de comunicado e botão de inscrição reposicionado
- Horário de encerramento do período de inscrições trocado de **17:00** para **23:59** em `inicio.html`, `edital-24.html` e `edital-25.html`.
- Modal "COMUNICADO AOS CANDIDATOS" com abertura automática ao carregar as páginas de edital, informando prazo final (11/11/2026 às 23h59) e com botões "× / OK, entendi".
- Botão **Realizar inscrição** (`#btnRealizarInscricao`) reposicionado nos dois editais: agora aparece centralizado logo **acima** da sanfona **CARGO** (antes ficava depois dos acordeões). Implementado em `build_porto_velho.py` extraindo o botão e inserindo um wrapper `<div style="text-align:center;margin:20px 0 15px">` antes de `#accordion2`.

## Observações
- Se no futuro ocorrer 401 no login mesmo com seed, apagar documento `donas` da collection `admins` e reiniciar o backend.
