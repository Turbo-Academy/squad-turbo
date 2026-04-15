# EMB Funnel Workflows — 20 Funis Completos
# Adaptados para o Squad EMB (3 agentes + skills)
# Referência: @estrategista-emb usa para executar qualquer tipo de funil

---

## Legenda de Execução

```
@E   = @estrategista-emb    (diagnóstico, arquitetura, revisão)
@C   = @copywriter-emb      (toda copy, roteia para skills)
@DC  = @diretor-criativo-emb (visual, HTML, brandbook)
DONO = Expert/usuário executa manualmente (plataforma, gravação, call, tráfego)
[F]  = Agente futuro (ver ROADMAP-EMB.md)
```

### Mapeamento MSE → EMB

| Agente MSE | Quem faz no EMB | Como |
|------------|-----------------|------|
| @estrategista | @E | Direto |
| @copywriter | @C | Via skills especializadas |
| @diretor-criativo | @DC | Via `/designer-senior` |
| @web-designer | @DC | Absorvido pelo diretor criativo |
| @pesquisador | @E → `/pesquisa-voc` | Skill substitui agente |
| @gestor-trafego | @C (copy dos ads) + DONO (executa no gerenciador) | [F] @gestor-trafego-emb |
| @automacao | DONO (configura n8n/Make/ManyChat) | [F] @automacao-emb |
| @closer | @C (script da call) + DONO (executa a call) | [F] @closer-emb |
| @sdr | @C (cadência escrita) + DONO (qualifica) | [F] @closer-emb |
| @analista-dados | DONO (verifica métricas) | [F] @analista-emb |
| @editor-video | DONO (edita vídeo externamente) | [F] @editor-emb |
| @social-media | @C → `/criador-reels`, `/stories-expert` | [F] @social-emb |
| @customer-success | DONO (pós-venda manual) | [F] @cs-emb |
| @gestor-projetos | @E (absorve gestão) | [F] @gestor-emb |
| @desenvolvedor | @DC (HTML) + DONO (tracking/pixel) | [F] @dev-emb |
| @gestor-produto | DONO (configura área de membros) | [F] @produto-emb |

---

## CAPTAÇÃO E ENTRADA

---

### 1. Isca Gratuita (Lead Magnet)

```
Ticket: Gratuito | Timeline: Contínuo (setup 1 semana) | Framework: Brunson Value Ladder
```

**FASE 1 — Setup (1 semana)**

| # | Tarefa | Executor | Skill | Output |
|---|--------|----------|-------|--------|
| 1 | Briefing do expert | @E | `/briefing-expert` | briefing.md |
| 2 | Pesquisa de avatar (se necessário) | @E | `/pesquisa-voc` | voc.md |
| 3 | Definir isca (formato + tema) | @E | — | Decisão no diagnóstico |
| 4 | Copy da página de captura | @C | `/criador-paginas-low-ticket` | copy-captura.md |
| 5 | Copy de boas-vindas (email/WhatsApp) | @C | `/copywriter-senior` | emails-boas-vindas.md |
| 6 | Criativos de ads para a isca | @C | `/criador-criativos` | criativos.md |
| 7 | Página HTML de captura | @DC | `/designer-senior` + `/page-optimizer` | captura.html |
| 8 | Configurar entrega + sequência | DONO | n8n/Make/ManyChat | [F] @automacao-emb |

**FASE 2 — Tráfego contínuo**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Subir campanhas no gerenciador | DONO | [F] @gestor-trafego-emb |
| 2 | Novas variações de hook/criativo | @C | `/criador-criativos` |
| 3 | Monitorar CPL e otimizar | DONO | [F] @analista-emb |

---

### 2. Quiz Funnel

```
Ticket: Qualquer | Timeline: Contínuo (setup 1-2 semanas) | Framework: Segmentação
```

**FASE 1 — Setup (1-2 semanas)**

| # | Tarefa | Executor | Skill | Output |
|---|--------|----------|-------|--------|
| 1 | Briefing + definir segmentos | @E | `/briefing-expert` | briefing.md + segmentos |
| 2 | Copy das perguntas + resultados personalizados | @C | `/copywriter-senior` | quiz-copy.md |
| 3 | Copy da página de captura do quiz | @C | `/criador-paginas-low-ticket` | captura-quiz.md |
| 4 | Criativos de ads | @C | `/criador-criativos` | criativos.md |
| 5 | Página HTML do quiz + resultados | @DC | `/designer-senior` | quiz.html |
| 6 | Lógica de segmentação + sequências | DONO | Typeform/Quiz tool + email | [F] @automacao-emb |

**FASE 2 — Tráfego contínuo**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Campanhas para quiz (alto engajamento) | DONO | [F] @gestor-trafego-emb |
| 2 | Iterar copy dos resultados conforme dados | @C | `/copywriter-senior` |

---

### 3. Low Ticket / Tripwire (SLO)

```
Ticket: R$27-197 | Timeline: Contínuo (setup 1-2 semanas) | Framework: Brunson Value Ladder
```

**FASE 0 — Arquitetura do produto (Maxxima)**

| # | Tarefa | Executor | Skill | Output |
|---|--------|----------|-------|--------|
| 0 | Viabilidade + tangibilização + naming + preço no-brain + plano tráfego 3 fases | @E | `/low-ticket-raiz` | arquitetura-low-ticket.md |

**FASE 1 — Setup (1-2 semanas)**

| # | Tarefa | Executor | Skill | Output |
|---|--------|----------|-------|--------|
| 1 | Briefing + estruturar oferta (Hormozi, com base na arquitetura Maxxima) | @E | `/briefing-expert` | briefing.md + oferta.md |
| 2 | Copy da página de vendas | @C | `/criador-paginas-low-ticket` | pagina-vendas.md |
| 3 | Copy de order bump + upsell | @C | `/copywriter-senior` | upsell-copy.md |
| 4 | Copy de emails (welcome + upsell sequence) | @C | `/copywriter-senior` | email-sequence.md |
| 5 | Criativos de ads | @C | `/criador-criativos` | criativos.md |
| 6 | Página HTML de vendas + checkout + upsell + obrigado | @DC | `/designer-senior` + `/page-optimizer` | paginas.html |
| 7 | Configurar checkout + automações | DONO | Plataforma + n8n/Make | [F] @automacao-emb |

**FASE 2 — Tráfego contínuo**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Campanhas perpétuas (escala progressiva) | DONO | [F] @gestor-trafego-emb |
| 2 | Otimização semanal (CPL, CPA, ROAS) | DONO | [F] @analista-emb |
| 3 | Novas variações de hook/criativo a cada 2 semanas | @C | `/criador-criativos` |

---

## LANÇAMENTO

---

### 4. PLF Pago (Lançamento Clássico)

```
Ticket: R$500-5K | Timeline: 4-8 semanas | Framework: Walker PLF
```

**FASE 1 — Preparação (2 semanas)**

| # | Tarefa | Executor | Skill | Output |
|---|--------|----------|-------|--------|
| 1 | Onboarding + briefing completo | @E | `/briefing-expert` | briefing.md |
| 2 | Pesquisa de avatar | @E | `/pesquisa-voc` | voc.md |
| 3 | Definir funil + oferta (Hormozi) | @E | — | diagnostico.md + oferta.md |
| 4 | Definir posicionamento (se novo) | @E | `/mentor-doug` | posicionamento.md |

**FASE 2 — Captação / Pré-Pré-Launch (2 semanas)**

| # | Tarefa | Executor | Skill | Output |
|---|--------|----------|-------|--------|
| 1 | Copy da página de captura | @C | `/criador-paginas-low-ticket` | captura-copy.md |
| 2 | Copy de emails de boas-vindas | @C | `/copywriter-senior` | emails-welcome.md |
| 3 | Criativos de captação | @C | `/criador-criativos` | criativos-captacao.md |
| 4 | Página HTML de captura | @DC | `/designer-senior` | captura.html |
| 5 | Campanhas de captação | DONO | [F] @gestor-trafego-emb |
| 6 | Sequência de boas-vindas | DONO | [F] @automacao-emb |

**FASE 3 — Pré-Launch / CPLs (3 semanas)**

| # | Tarefa | Executor | Skill | Output |
|---|--------|----------|-------|--------|
| 1 | Script CPL 1 (Oportunidade) | @C | `/copywriter-senior` | cpl1-script.md |
| 2 | Script CPL 2 (Transformação) | @C | `/copywriter-senior` | cpl2-script.md |
| 3 | Script CPL 3 (Experiência) | @C | `/copywriter-senior` | cpl3-script.md |
| 4 | Emails de antecipação entre CPLs | @C | `/copywriter-senior` | emails-antecipacao.md |
| 5 | Slides dos CPLs | @DC | `/designer-senior` | slides/ |
| 6 | Criativos de retargeting | @C | `/criador-criativos` | criativos-retarget.md |
| 7 | Gravação dos CPLs | DONO | — | Vídeos |

**FASE 4 — Abertura de Carrinho (7 dias)**

| # | Tarefa | Executor | Skill | Output |
|---|--------|----------|-------|--------|
| 1 | Copy da página de vendas | @C | `/criador-paginas-low-ticket` | pagina-vendas.md |
| 2 | Emails de abertura + urgência + último dia | @C | `/copywriter-senior` | emails-carrinho.md |
| 3 | Mensagens WhatsApp (se aplicável) | @C | `/mensageria-lancamento` | whatsapp.md |
| 4 | Página HTML de vendas + checkout | @DC | `/designer-senior` + `/page-optimizer` | vendas.html |
| 5 | Sequência de carrinho automatizada | DONO | [F] @automacao-emb |

**FASE 5 — Pós-Lançamento (1 semana)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Relatório de resultados | DONO | [F] @analista-emb |
| 2 | Emails pós-compra + onboarding | @C | `/copywriter-senior` |
| 3 | Revisão geral | @E | — |

---

### 5. PLF Gratuito (Orgânico)

```
Ticket: R$500-5K | Timeline: 2-3 semanas | Framework: Walker PLF
```

**FASE 1 — Preparação (1 semana)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Briefing completo | @E | `/briefing-expert` |
| 2 | Oferta + posicionamento | @E | — |

**FASE 2 — Captação orgânica (1 semana)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Copy de captura + posts orgânicos | @C | `/criador-reels`, `/stories-expert` |
| 2 | Página de captura simples | @DC | `/designer-senior` |
| 3 | Automações de boas-vindas | DONO | [F] @automacao-emb |

**FASE 3 — Evento: CPLs ou Lives (1 semana)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Scripts das lives/CPLs | @C | `/copywriter-senior` |
| 2 | Emails de antecipação | @C | `/copywriter-senior` |
| 3 | Slides e materiais visuais | @DC | `/designer-senior` |

**FASE 4 — Abertura de carrinho (5-7 dias)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Página de vendas | @C → @DC | `/criador-paginas-low-ticket` → `/designer-senior` |
| 2 | Sequência de urgência | @C | `/copywriter-senior` |
| 3 | Mensagens WhatsApp | @C | `/mensageria-lancamento` |

---

### 6. Seed Launch (Validação)

```
Ticket: R$200-2K | Timeline: 3-7 semanas | Framework: Walker PLF (MVP)
```

**FASE 1 — Validação (1-2 semanas)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Briefing + diagnóstico PMN | @E | `/briefing-expert` |
| 2 | Oferta mínima viável (MVP) | @E | — |
| 3 | Copy simples de captura + emails | @C | `/copywriter-senior` |

**FASE 2 — Pré-venda para lista quente (1-2 semanas)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Sequência de emails para lista existente | @C | `/copywriter-senior` |
| 2 | Página de vendas simples | @C → @DC | `/criador-paginas-low-ticket` → `/designer-senior` |

**FASE 3 — Entrega + iteração (2-4 semanas)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Coleta de feedback + depoimentos | DONO | — |
| 2 | Ajustes na oferta com base no feedback | @E | — |
| 3 | Copy atualizada com prova social real | @C | skill adequada |

---

### 7. Lançamento Meteórico (WhatsApp-first)

```
Ticket: R$200-2K | Timeline: 3-7 dias | Framework: Velocidade + Urgência
```

**FASE 1 — Preparação (D-2) (1-2 dias)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Oferta rápida com urgência real | @E | — |
| 2 | Copy WhatsApp + página + emails | @C | `/mensageria-lancamento` + `/criador-paginas-low-ticket` |
| 3 | Página de vendas + checkout | @DC | `/designer-senior` |

**FASE 2 — Captação WhatsApp (D-1) (1 dia)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Criativos para ads → grupo WhatsApp | @C | `/criador-criativos` |
| 2 | Subir campanha | DONO | [F] @gestor-trafego-emb |
| 3 | Criar grupo + mensagens automáticas | DONO | [F] @automacao-emb |

**FASE 3 — Evento + Vendas (D-Day) (1-3 dias)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Sequência: conteúdo → oferta → urgência | @C | `/mensageria-lancamento` |
| 2 | Follow-up individual (DMs) | DONO | — |

---

## EVENTOS E EXPERIÊNCIAS

---

### 8. Webinar (Perfect Webinar)

```
Ticket: R$500-5K | Timeline: 1-2 semanas | Framework: Brunson Perfect Webinar
```

**FASE 1 — Preparação (3-5 dias)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Briefing + oferta | @E | `/briefing-expert` |
| 2 | Script do webinar (90 min) | @C | `/copywriter-senior` |
| 3 | Copy página de registro + emails | @C | `/criador-paginas-low-ticket` + `/copywriter-senior` |
| 4 | Slides do webinar | @DC | `/designer-senior` |
| 5 | Criativos de ads | @C | `/criador-criativos` |
| 6 | Página HTML de registro + obrigado | @DC | `/designer-senior` |

**FASE 2 — Captação (5-7 dias)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Campanhas de registro | DONO | [F] @gestor-trafego-emb |
| 2 | Lembretes (24h, 1h, ao vivo) + replay | DONO | [F] @automacao-emb |

**FASE 3 — Webinar ao vivo (1 dia)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Expert apresenta com script + slides | DONO | — |
| 2 | Página de vendas pós-webinar | @C → @DC | `/criador-paginas-low-ticket` → `/designer-senior` |

**FASE 4 — Follow-up (5-7 dias)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Emails de replay + urgência + carrinho fechando | @C | `/copywriter-senior` |
| 2 | Sequência de carrinho automatizada | DONO | [F] @automacao-emb |

---

### 9. Workshop Online

```
Ticket: R$97-997 | Timeline: 1-2 semanas | Framework: Entrega + Pitch
```

**FASE 1 — Setup (1 semana)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Briefing + oferta do workshop + upsell | @E | `/briefing-expert` |
| 2 | Copy página vendas workshop + emails | @C | `/criador-paginas-low-ticket` + `/copywriter-senior` |
| 3 | Conteúdo do workshop | @C | `/copywriter-senior` |
| 4 | Página HTML vendas + checkout | @DC | `/designer-senior` |

**FASE 2 — Captação (5-7 dias)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Campanhas | DONO | [F] @gestor-trafego-emb |
| 2 | Lembretes + materiais pré-workshop | DONO | [F] @automacao-emb |
| 3 | Criativos de ads | @C | `/criador-criativos` |

**FASE 3 — Workshop (1-3 dias)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Expert entrega o workshop | DONO | — |
| 2 | Script de transição para oferta principal | @C | `/copywriter-senior` |

---

### 10. Desafio (Challenge Funnel)

```
Ticket: R$500-5K | Timeline: 2-3 semanas | Framework: Pedro Adao Challenge
```

**FASE 1 — Preparação (1 semana)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Briefing + oferta + estrutura dos dias | @E | `/briefing-expert` |
| 2 | Conteúdo de todos os dias do desafio | @C | `/copywriter-senior` |
| 3 | Copy de captura para o desafio | @C | `/criador-paginas-low-ticket` |

**FASE 2 — Captação (5-7 dias)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Página de inscrição | @DC | `/designer-senior` |
| 2 | Criativos de ads | @C | `/criador-criativos` |
| 3 | Campanhas de inscrição | DONO | [F] @gestor-trafego-emb |
| 4 | Grupo WhatsApp/Telegram + lembretes | DONO | [F] @automacao-emb |

**FASE 3 — Desafio ao vivo (5-7 dias)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Conteúdo diário + engajamento | DONO | — |
| 2 | Mensagens de grupo diárias | @C | `/mensageria-lancamento` |
| 3 | Transição progressiva para oferta | @C | `/copywriter-senior` |

**FASE 4 — Oferta + Carrinho (5-7 dias)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Página de vendas + checkout | @C → @DC | `/criador-paginas-low-ticket` → `/designer-senior` |
| 2 | Sequência de urgência | @C | `/copywriter-senior` + `/mensageria-lancamento` |

---

### 11. Lançamento Pago Semanal (5+1)

```
Ticket: R$97-497 | Timeline: Semanal (recorrente) | Framework: Evento pago + pitch
```

**FASE 1 — Estruturação (1 vez)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Briefing + estrutura do evento 5+1 | @E | `/briefing-expert` + `/lancamento-pago-semanal` |
| 2 | Oferta de ingresso + oferta principal | @E | — |

**FASE 2 — Produção semanal (recorrente)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Copy da página de ingresso | @C | `/criador-paginas-low-ticket` |
| 2 | Mensageria completa do evento | @C | `/mensageria-lancamento` |
| 3 | Criativos de ads | @C | `/criador-criativos` |
| 4 | Página HTML de ingresso | @DC | `/designer-senior` |
| 5 | Campanhas semanais | DONO | [F] @gestor-trafego-emb |
| 6 | Automações do evento | DONO | [F] @automacao-emb |

**FASE 3 — Otimização contínua**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Iterar hooks e criativos semanalmente | @C | `/criador-criativos` |
| 2 | Ajustar mensageria conforme conversão D1 | @C | `/mensageria-lancamento` |
| 3 | Relatório semanal (D1, show-up, conversão) | DONO | [F] @analista-emb |

---

### 12. Imersão Paga

```
Ticket: R$297-10K | Timeline: 2-5 dias (setup 2-3 semanas) | Framework: Experiência + Upsell
```

**FASE 1 — Setup (2-3 semanas)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Briefing + oferta imersão + upsell high ticket | @E | `/briefing-expert` |
| 2 | Copy página vendas + emails + conteúdo | @C | `/criador-paginas-low-ticket` + `/copywriter-senior` |
| 3 | Página HTML de vendas | @DC | `/designer-senior` |

**FASE 2 — Captação (2-4 semanas)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Criativos de ads | @C | `/criador-criativos` |
| 2 | Campanhas | DONO | [F] @gestor-trafego-emb |
| 3 | Automações | DONO | [F] @automacao-emb |

**FASE 3 — Imersão (2-5 dias)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Expert entrega a imersão | DONO | — |
| 2 | Pitch de upsell para mentoria/programa avançado | @C | `/copywriter-senior` |

---

### 13. Evento Presencial

```
Ticket: R$1K-50K+ | Timeline: 6-8 semanas | Framework: Evento + Oferta de Palco
```

**FASE 1 — Planejamento (2-3 semanas)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Briefing + oferta do evento + ofertas de palco | @E | `/briefing-expert` |
| 2 | Copy página vendas + emails + materiais | @C | `/criador-paginas-low-ticket` + `/copywriter-senior` |
| 3 | Criativos de ads | @C | `/criador-criativos` |
| 4 | Página HTML de vendas | @DC | `/designer-senior` |

**FASE 2 — Captação e Vendas (3-4 semanas)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Campanhas de venda de ingressos | DONO | [F] @gestor-trafego-emb |
| 2 | Sequência de emails + lembretes + logística | DONO | [F] @automacao-emb |
| 3 | Materiais impressos (se aplicável) | @DC | `/designer-senior` |

**FASE 3 — Evento (1-3 dias)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Scripts de palco + oferta presencial | @C | `/copywriter-senior` |
| 2 | Expert executa o evento | DONO | — |

**FASE 4 — Pós-Evento (1-2 semanas)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Follow-up de vendas | DONO | [F] @closer-emb |
| 2 | Relatório do evento | DONO | [F] @analista-emb |

---

## AUTOMATIZADO E PERPÉTUO

---

### 14. Perpétuo / Evergreen

```
Ticket: R$200-2K | Timeline: Contínuo (setup 2-3 semanas) | Framework: Deadline Funnel
```

**FASE 1 — Setup (2-3 semanas)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Briefing + oferta | @E | `/briefing-expert` |
| 2 | Script de VSL/webinar gravado | @C | `/copywriter-senior` |
| 3 | Copy página vendas + email sequence completa | @C | `/criador-paginas-low-ticket` + `/copywriter-senior` |
| 4 | Páginas HTML (captura + VSL + vendas + checkout) | @DC | `/designer-senior` |
| 5 | Sequência evergreen (deadline funnel) | DONO | [F] @automacao-emb |

**FASE 2 — Otimização contínua**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Tráfego perpétuo com otimização semanal | DONO | [F] @gestor-trafego-emb |
| 2 | Dashboard semanal (CPL, CPA, ROAS, LTV) | DONO | [F] @analista-emb |
| 3 | Novas variações de criativos | @C | `/criador-criativos` |

---

### 15. Venda Interna (Upsell/Cross-sell)

```
Ticket: Qualquer | Timeline: Contínuo | Framework: Base existente
```

**FASE 1 — Setup (3-5 dias)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Definir oferta de upsell/cross-sell | @E | — |
| 2 | Copy (emails + WhatsApp + página interna) | @C | `/copywriter-senior` |
| 3 | Página de vendas interna | @DC | `/designer-senior` |
| 4 | Sequência de upsell automática | DONO | [F] @automacao-emb |

**FASE 2 — Execução contínua**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Monitorar taxa de upsell, LTV, receita incremental | DONO | [F] @analista-emb |

---

### 16. Campanha Rápida (Flash Sale)

```
Ticket: R$200-2K | Timeline: 1-3 dias | Framework: Urgência real
```

**FASE 1 — Preparação (D-1) (1 dia)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Definir promoção + razão real para urgência | @E | — |
| 2 | Copy da promoção (emails + WhatsApp + ads + página) | @C | `/copywriter-senior` + `/mensageria-lancamento` + `/criador-criativos` |
| 3 | Página de vendas rápida | @DC | `/designer-senior` |
| 4 | Disparos programados | DONO | [F] @automacao-emb |

**FASE 2 — Execução (D-Day) (1-3 dias)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Campanhas de retargeting + lista quente | DONO | [F] @gestor-trafego-emb |
| 2 | Mensagens de urgência (último dia, últimas horas) | @C | `/copywriter-senior` |

**FASE 3 — Fechamento (1 dia)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Relatório rápido de resultados | DONO | [F] @analista-emb |

---

## HIGH TICKET E PREMIUM

---

### 17. Aplicação + Call

```
Ticket: R$3K-100K+ | Timeline: 1-2 semanas | Framework: Hormozi Offer
```

**FASE 1 — Setup (1 semana)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Briefing + oferta high ticket (Hormozi) | @E | `/briefing-expert` |
| 2 | Copy da página de aplicação + emails | @C | `/criador-paginas-low-ticket` + `/copywriter-senior` |
| 3 | Script da call de vendas | @C | `/copywriter-senior` |
| 4 | Página HTML de aplicação + obrigado + agendamento | @DC | `/designer-senior` |
| 5 | Notificação + agendamento automático | DONO | [F] @automacao-emb |

**FASE 2 — Operação contínua**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Tráfego para aplicação | DONO | [F] @gestor-trafego-emb |
| 2 | Qualificação BANT | DONO | [F] @closer-emb |
| 3 | Calls de vendas | DONO | — |

---

### 18. Sessão Estratégica

```
Ticket: R$2K-30K+ | Timeline: 1-2 semanas | Framework: Diagnóstico → Proposta
```

**FASE 1 — Setup (1 semana)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Briefing + estrutura da sessão | @E | `/briefing-expert` |
| 2 | Copy da página de agendamento + emails | @C | `/criador-paginas-low-ticket` + `/copywriter-senior` |
| 3 | Script da sessão estratégica | @C | `/copywriter-senior` |
| 4 | Página HTML de agendamento + obrigado | @DC | `/designer-senior` |
| 5 | Lembretes + formulário pré-sessão | DONO | [F] @automacao-emb |

**FASE 2 — Operação contínua**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Tráfego para agendamento | DONO | [F] @gestor-trafego-emb |
| 2 | Execução das sessões | DONO | — |

---

### 19. Sala Secreta (VIP)

```
Ticket: R$2K-50K+ | Timeline: 1-2 semanas | Framework: Exclusividade + Aplicação
```

**FASE 1 — Setup (1 semana)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Oferta VIP exclusiva | @E | `/briefing-expert` |
| 2 | Copy da página de aplicação VIP + emails exclusivos | @C | `/criador-paginas-low-ticket` + `/copywriter-senior` |
| 3 | Página HTML de aplicação VIP | @DC | `/designer-senior` |

**FASE 2 — Seleção (5-7 dias)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Retargeting para audiência quente/compradores | DONO | [F] @gestor-trafego-emb |
| 2 | Mensagens de convite exclusivo | @C | `/copywriter-senior` |

**FASE 3 — Evento VIP (1 dia)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Oferta premium de palco | @C | `/copywriter-senior` |
| 2 | Expert executa | DONO | — |

---

### 20. High Ticket Genérico

```
Ticket: R$3K-50K+ | Timeline: 1-2 semanas | Framework: Hormozi Offer
```

**FASE 1 — Setup (1 semana)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Briefing + oferta high ticket (Hormozi) | @E | `/briefing-expert` |
| 2 | Pesquisa de avatar aprofundada | @E | `/pesquisa-voc` |
| 3 | Copy da página de aplicação + emails + script de vendas | @C | `/criador-paginas-low-ticket` + `/copywriter-senior` |
| 4 | Página HTML de aplicação + obrigado + agendamento | @DC | `/designer-senior` |

**FASE 2 — Captação contínua**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Campanhas para página de aplicação | DONO | [F] @gestor-trafego-emb |
| 2 | Notificação + agendamento automático | DONO | [F] @automacao-emb |

**FASE 3 — Processo de vendas**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Qualificação BANT | DONO | [F] @closer-emb |
| 2 | Calls de vendas | DONO | — |

---

## SERVIÇOS

---

### Funil de Serviços (Freelancer/Agência)

```
Ticket: R$500-20K+ | Timeline: 1-3 semanas | Framework: Portfólio + Sessão
```

**FASE 1 — Setup (1-2 semanas)**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Briefing + pacotes de serviço | @E | `/briefing-expert` |
| 2 | Copy da página de serviços + cases + formulário | @C | `/criador-paginas-low-ticket` + `/copywriter-senior` |
| 3 | Página HTML de serviços + portfólio | @DC | `/designer-senior` |

**FASE 2 — Captação contínua**

| # | Tarefa | Executor | Skill |
|---|--------|----------|-------|
| 1 | Google Ads (intenção) + LinkedIn (B2B) | DONO | [F] @gestor-trafego-emb |
| 2 | Notificação de lead + follow-up automático | DONO | [F] @automacao-emb |
| 3 | Novas variações de criativos | @C | `/criador-criativos` |

---

## Resumo de Cobertura EMB

| Capacidade | Coberta | Por quem |
|------------|---------|----------|
| Briefing + diagnóstico | SIM | @E |
| Pesquisa de avatar | SIM | @E → `/pesquisa-voc` |
| Posicionamento | SIM | @E → `/mentor-doug` |
| Copy de qualquer formato | SIM | @C (roteia para skill) |
| Landing pages HTML | SIM | @DC → `/designer-senior` |
| Brandbook | SIM | @DC → `/designer-senior` |
| Tráfego pago | PARCIAL | @C faz a copy, DONO executa |
| Automações | NÃO | DONO manual |
| Analytics | NÃO | DONO manual |
| Vendas/calls | PARCIAL | @C faz o script, DONO executa |
| Pós-venda | NÃO | DONO manual |
| Vídeo/edição | NÃO | DONO externo |
| Gestão de projetos | PARCIAL | @E absorve |