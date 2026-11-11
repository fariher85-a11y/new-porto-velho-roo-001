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
### 11/Nov/2026 — Templates de e-mail Resend atualizados (Curitiba → Porto Velho)
- Brasão físico: `/app/frontend/public/idcap/img/concurso-porto-velho-logo.png` criado a partir de `/assets/home/img1.webp` (que já era PNG do brasão oficial de Porto Velho).
- `email_service.py`: `_shell()` e `build_cadastro_email_html()` passaram a referenciar `concurso-porto-velho-logo.png`.
- `PRAZO` corrigido de `06/11/2026` para `11/11/2026, às 23h59 (horário de Brasília)` — alinhado ao período em concurso.js.
- Hardcoded `06/11/2026` dentro de `build_inscricao_email_html` e no reenvio admin (`admin_routes.py` linha 2128) também atualizados para `11/11/2026`.
- Validado por renderização HTML dos 3 templates (cadastro, inscrição e reenvio/lembrete): zero "Curitiba", brasão correto de Porto Velho, data correta, textos "Concurso Porto Velho" / "Prefeitura Municipal de Porto Velho - RO" em header e footer.

### 10/Nov/2026 — Destinação de Vagas (dados-inscricao + confirmacao)
- Substituído o checkbox único "É optante pela reserva de vagas" por fieldset **Destinação de Vagas** com 6 checkboxes independentes:
  `VAGA_PCD`, `VAGA_NEGROS`, `VAGA_QUILOMBOLA`, `VAGA_INDIGENA`, `VAGA_TRANS`, `FUNCAO_JURADO` (jurado para desempate — Art. 440 CPP).
- Todos com `data-testid` (`chk-vaga-pcd`, `chk-vaga-negros`, `chk-vaga-quilombola`, `chk-vaga-indigena`, `chk-vaga-trans`, `chk-jurado`).
- **Atendimento Especial**: ao marcar "Sim" expande grid com 28 opções (Apoio para perna, Tempo adicional, LIBRAS, Prova Braile etc.), cada uma como checkbox `AE_*` com data-testid. Desmarcando "Sim", o grid some e todas as opções são limpas.
- `confirmacao.html` passou a exibir uma linha SIM/NÃO para cada um dos 6 flags de destinação + atendimento especial. Quando atendimento = Sim, uma linha extra "Recursos solicitados" lista as acomodações escolhidas.
- Persistência via FormData + loop de checkbox do form (`inscricao_dados` no localStorage) continua automático.

### 10/Nov/2026 — Campo "Certame" em dados-inscricao.html + detalhes da vaga
- `seduc/concurso.js` reescrito: dois editais estruturados (`edital_24_educacao` com 37 cargos e `edital_25_saude` com 329 cargos extraídos de `edital-24.html` / `edital-25.html`).
- Campo auto-injetado "Nível de escolaridade" trocado por seletor **CERTAME** (label `Certame`, `data-testid="select-certame"`).
- Dropdown de Cargo mostra apenas `código - título` (sem valor).
- Bloco **VAGA_DETALHES** renderizado abaixo do Cargo ao selecionar uma vaga, com: Cargo, Período de Inscrição, Data da Prova, Valor da Inscrição.
- Valores Edital 25/2026 (Saúde) aplicados por padrão (AUXILIAR/MOTORISTA R$ 90, AGENTE/ASSISTENTE ADMINISTRATIVO/CUIDADOR/TÉCNICO R$ 105, nível superior saúde R$ 140).
- Valores Edital 24/2026 (Educação) aplicados (AGENTE DE SECRETARIA ESCOLAR R$ 90, demais cargos R$ 130).
- Período fixo: `13/10/26 10:00 - 11/11/26 23:59`; Data da prova: `13/12/2026 14:45:00`.
- Cache-buster `concurso.js?v=9` em todas as páginas que carregam o script.

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
