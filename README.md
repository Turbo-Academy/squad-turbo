# Squad Turbo v2.1 — Turbo Academy

> Squad de marketing digital com **10 agentes + 20 skills** que carrega a **metodologia da Turbo Academy** (Lançamento Pago Semanal + Método 5+1 + Funil 8) e roda no projeto do cliente.
> Self-contained — não depende de nenhuma outra instalação.

**Para quem é:** alunos da Turbo Academy aplicando a metodologia nos projetos dos clientes (ou no próprio produto, se for o expert).

**Guia visual completo:** abra `squad-turbo-guia.html` no navegador.

---

## 1. Instalação

Requer [Claude Code](https://docs.claude.com/claude-code) instalado.

```bash
# Clonar (ou descompactar o ZIP) dentro de ~/.claude/squads/
mkdir -p ~/.claude/squads
cd ~/.claude/squads
git clone https://github.com/Turbo-Academy/squad-turbo.git
# ou: unzip squad-turbo.zip -d ~/.claude/squads/
```

Resultado esperado: `~/.claude/squads/squad-turbo/` com as pastas `agents/`, `skills/`, `core/`, `.claude/`.

**Teste rápido:**
```bash
ls ~/.claude/squads/squad-turbo/agents
# deve listar 10 agentes .md (estrategista-turbo, pesquisador-turbo, ...)
```

---

## 2. Primeiro projeto (5 minutos)

```bash
# 1. Criar a pasta do seu projeto em qualquer lugar
mkdir -p ~/Projetos/meu-lancamento && cd ~/Projetos/meu-lancamento

# 2. Abrir o Claude Code
claude
```

Dentro do Claude, cole:

> Ativar squad turbo. Quero preparar o lançamento de [NOME DO SEU PRODUTO / DO SEU CLIENTE]. Ainda não tenho fundação pronta.

O `@estrategista-turbo` vai:
1. Detectar que não existe `00-fundacao/`
2. Rotear para `@pesquisador-turbo`
3. Pedir o material bruto do projeto (aulas, VSLs, páginas atuais, posts, VoC, etc.)
4. Consolidar em 6 dossiês (`00-fundacao/briefing.md`, `avatar.md`, `oferta.md`, `voz.md`, `referencias-expert.md`, `inventario.md`)
5. Fazer a fundação
6. Liberar copy, visual, tráfego, automação, pós-venda

> ⚠️ **Regra de ouro:** sem `00-fundacao/` nenhuma peça final sai. Tem um motivo — sem fundação, o squad produz copy genérica com cara de IA. Não pule esse passo.

---

## 3. O que é fixo vs. o que você preenche

| Fixo no squad (método do Leo) | Você preenche no SEU projeto |
|-------------------------------|-------------------------------|
| Método 5+1, Lançamento Pago Semanal, Funil 8 | Produto, promessa, preço, mecanismo | Seu avatar real (dores, linguagem, VoC) |
| Protocolo Anti-IA, regras de qualidade | Tom de voz do SEU expert |
| Templates de briefing, páginas, slides | Conteúdo, depoimentos reais, métricas reais |

O squad é a **ferramenta**. A fundação é **sua matéria-prima**.

---

## 4. Arquitetura dos 10 Agentes

```
@estrategista-turbo ─── orquestrador (ponto de entrada)
  ├── @pesquisador-turbo ──── 00-fundacao/ (SEU expert)
  ├── @pesquisador-mercado-turbo ─ 02-mercado/ (concorrência)
  ├── @copywriter-turbo ───── toda copy
  ├── @diretor-criativo-turbo ─ direção visual
  │     └── @designer-turbo ── executa (criativos, slides, brand)
  ├── @social-turbo ──────── reels, stories, orgânico
  ├── @trafego-turbo ───────── Meta Ads, Google Ads
  ├── @automacao-turbo ────── mensageria, n8n, ManyChat
  └── @cs-turbo ──────────── pós-venda, onboarding
```

---

## 5. Comandos úteis dentro do Claude Code

```
/page-optimizer         # roda Core Web Vitals numa página pronta
```

E invocação direta de agentes:
```
@estrategista-turbo preciso diagnosticar meu funil atual
@copywriter-turbo escreve a página de ingresso do meu evento 5+1
@diretor-criativo-turbo preciso de brandbook pro meu produto
```

---

## 6. Atualização

```bash
cd ~/.claude/squads/squad-turbo
git pull
```

---

## 7. Regras Inegociáveis (lê antes de reclamar)

1. **Fundação antes de execução** — sem `00-fundacao/` LOCKED, nada sai
2. **Zero invenção** — nunca fabricar depoimentos, métricas ou resultados
3. **Tom do expert** — copy no tom do seu expert (de `00-fundacao/voz.md`), nunca genérico
4. **Anti-IA visual** — zero elemento com cara de IA em qualquer peça visual
5. **Português sempre**

---

## 8. Estrutura do squad

```
squad-turbo/
├── README.md                  ← você está aqui
├── squad.yaml                 ← manifest (10 agentes, 20 skills)
├── config.yaml                ← configuração e keywords
├── .claude/CLAUDE.md          ← instruções carregadas pelo Claude Code
├── agents/                    ← 10 agentes .md
├── skills/                    ← 20 skills (marketing, visual, squad-specific)
│   └── _shared/               ← frameworks e refs compartilhadas
└── core/
    ├── constitution.md        ← 7 artigos inegociáveis
    ├── templates/             ← briefings, avatar, oferta, funil
    ├── checklists/            ← qualidade, aprovação, lançamento
    └── frameworks/           
```

---

## 9. Suporte

- Dúvidas sobre o método → Turbo Academy (suporte oficial)
- Dúvidas sobre o squad/Claude Code → fórum / comunidade da Turbo

---

*Squad Turbo v2.1 — Turbo Academy. Metodologia: Turbo Academy (Leo Tabari).*
