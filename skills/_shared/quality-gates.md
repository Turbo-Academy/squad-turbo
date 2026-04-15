# Quality Gates — Checklist de Entrega EMB

Toda skill do EMB valida estes gates antes de entregar o output ao usuário.
Se qualquer gate falhar, corrigir ANTES de mostrar o resultado.

---

## Gate Universal (toda skill)

| # | Critério | Verificar |
|---|----------|-----------|
| QG-1 | **Briefing presente** | A skill recebeu contexto suficiente do expert? Se não, perguntar antes de executar. |
| QG-2 | **Voz do expert** | O output soa como O EXPERT ou como IA genérica? |
| QG-3 | **Anti-IA** | Alguma expressão proibida (ver `anti-ia-blacklist.md`) aparece no output? |
| QG-4 | **Dados reais** | O output inventa métricas, depoimentos ou resultados? Se sim, marcar com `[DADO NECESSÁRIO]`. |
| QG-5 | **Peça completa** | O output está pronto para uso ou é rascunho com lacunas? |

---

## Gate por Tipo de Entrega

### Copy (páginas, emails, ads, scripts)
| # | Critério |
|---|----------|
| QG-C1 | Hook para no scroll nos primeiros 3 segundos? |
| QG-C2 | Dor principal do avatar está presente? |
| QG-C3 | Mecanismo único está nomeado e explicado? |
| QG-C4 | CTA está claro e urgente? |
| QG-C5 | Leitura em voz alta soa natural (não artigo de blog)? |

### Criativos (anúncios, reels, stories)
| # | Critério |
|---|----------|
| QG-R1 | Hook está centrado no ESPECTADOR (não no expert)? |
| QG-R2 | Aterrissagem segura quem o hook parou? |
| QG-R3 | Linguagem é falada, não escrita? |
| QG-R4 | CTA é específico (palavra-gatilho ou ação clara)? |

### Estratégia (funis, ofertas, posicionamento)
| # | Critério |
|---|----------|
| QG-E1 | Funil escolhido é o certo para o ticket e audiência do expert? |
| QG-E2 | Oferta passa no teste Hormozi ("seria burrice recusar")? |
| QG-E3 | Mecanismo único é diferente do que já existe no mercado? |
| QG-E4 | Próximos passos concretos estão listados? |

---

## Escala de Score

```
Gates aprovados / Gates aplicáveis × 100 = Score
≥ 80% → Entregar
60–79% → Entregar com flag dos itens a corrigir
< 60%  → Refazer antes de entregar
```

## Como Aplicar

1. Rodar o checklist ao final de cada output (internamente — não exibir ao usuário a menos que solicitado)
2. Se QG-3 falhar → reescrever o trecho antes de entregar
3. Se QG-4 falhar → substituir por `[DADO NECESSÁRIO: descrever o que falta]`
4. Se QG-1 falhar → fazer as perguntas necessárias ANTES de produzir qualquer coisa