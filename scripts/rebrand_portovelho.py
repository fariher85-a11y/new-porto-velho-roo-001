#!/usr/bin/env python3
"""
Rebrand das 6 páginas do fluxo de inscrição:
Curitiba/FAFIPA/AOCP (legado) -> Porto Velho - RO / IBGP - Instituto Brasileiro de Gestão e Pesquisa
"""
import os

PUB = "/app/frontend/public"
FILES = [
    "termos-concurso.html",
    "inscricao.html",
    "dados-inscricao.html",
    "pagamento-pix.html",
    "confirmacao.html",
    "inscricao-realizada.html",
]

# Ordem importa: substrings mais específicas primeiro.
REPLACEMENTS = [
    # Email legado
    ("candidato@fundacaofafipa.org.br", "contato@ibgp.org.br"),
    # Variações de Fundação FAFIPA (texto visível)
    ("Fundação FAFIPA", "IBGP - Instituto Brasileiro de Gestão e Pesquisa"),
    ("fundação fafipa", "IBGP - Instituto Brasileiro de Gestão e Pesquisa"),
    ("FUNDAÇÃO FAFIPA", "IBGP - INSTITUTO BRASILEIRO DE GESTÃO E PESQUISA"),
    # FAFIPA isolado -> IBGP
    ("FAFIPA", "IBGP"),
    ("fafipa", "ibgp"),
    # Instituto AOCP combos no meta keywords
    ("Instituto aocp,AOCP,aocp, instituto aocp, instituto, maringa",
     "IBGP, Instituto Brasileiro de Gestão e Pesquisa, concurso, Porto Velho, Rondônia"),
    # "Sites AOCP" (topbar)
    ("Sites AOCP", "Sites IBGP"),
    # "AOCP" (uppercase token em breadcrumbs/badges)
    (">AOCP<", ">IBGP<"),
    # Município/Prefeitura Curitiba
    ("Prefeitura Municipal de Curitiba - PR", "Prefeitura Municipal de Porto Velho - RO"),
    ("Prefeitura Municipal de Curitiba", "Prefeitura Municipal de Porto Velho"),
    ("Prefeitura de Curitiba", "Prefeitura de Porto Velho"),
    ("Município de Curitiba - PR", "Município de Porto Velho - RO"),
    ("Município de Curitiba", "Município de Porto Velho"),
    # Concurso Público/Concurso Curitiba variações
    ("Concurso Público de Curitiba 2026", "Concurso Público de Porto Velho - RO"),
    ("Concurso Público de Curitiba", "Concurso Público de Porto Velho - RO"),
    ("Concurso Curitiba 2026", "Concurso Porto Velho - RO"),
    ("Concurso Curitiba", "Concurso Porto Velho - RO"),
    # Formas isoladas de Curitiba
    ("Curitiba - PR", "Porto Velho - RO"),
    ("CURITIBA", "PORTO VELHO"),
    ("Curitiba", "Porto Velho"),
    ("curitiba", "porto-velho"),
    # Caso inserido por typo (AOcp)
    ("AOcp", "IBGP"),
]

def apply(path):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    original = content
    total = 0
    for old, new in REPLACEMENTS:
        if old in content:
            n = content.count(old)
            content = content.replace(old, new)
            total += n
    if content != original:
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
    return total

def main():
    grand = 0
    for name in FILES:
        p = os.path.join(PUB, name)
        n = apply(p)
        print(f"{name}: {n} substituições")
        grand += n
    print(f"TOTAL: {grand}")

if __name__ == "__main__":
    main()
