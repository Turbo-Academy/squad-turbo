# lovable-style-emb

Stack opinado + scaffolding + recipes. O equivalente Lovable dentro do Claude Code.

## Setup de projeto novo

```bash
# 1. Criar pasta + copiar template
mkdir meu-app && cd meu-app
cp -r ~/.claude/emb/skills/lovable-style-emb/template/. .

# 2. Copiar tokens EMB para dentro do projeto
mkdir tokens
cp -r ~/.claude/emb/skills/design-tokens-emb/* tokens/

# 3. Instalar deps + rodar
npm install
npm run dev
```

Abrir `http://localhost:5173` — você verá Hero + Features + CTA + Footer com paleta `neon-dark`.

## Trocar paleta

Edite `src/index.css`, troque o import:
```css
@import '../tokens/paletas/neutro-pro.css';     /* SaaS clean */
@import '../tokens/paletas/editorial-warm.css'; /* paper warm */
@import '../tokens/paletas/neon-dark.css';      /* neon dark (default) */
```

## Estrutura

```
template/
├── package.json, vite.config.ts, tsconfig.*, postcss.config.js
├── tailwind.config.ts        # importa preset EMB
├── index.html
└── src/
    ├── main.tsx, App.tsx
    ├── index.css             # imports tokens + tailwind layers
    ├── lib/cn.ts             # helper clsx + tw-merge
    └── components/
        ├── Nav.tsx           # sticky glass
        ├── Hero.tsx          # gradient + glow + stats
        ├── FeatureGrid.tsx   # radial-glow hover
        ├── CTA.tsx           # gradiente brand animado
        └── Footer.tsx        # multi-coluna simples

recipes/
└── RECIPES.md                # 8 padrões prontos
```

## Próximos passos (opcional)

- **shadcn:** `npx shadcn@latest init` → adicione `Button`, `Dialog`, `Form`, `Tabs` conforme uso
- **Animação avançada:** `npm i motion` (Motion One, 4kb)
- **Roteamento:** `npm i react-router-dom` (só se SPA multi-página)
- **Forms:** `npm i react-hook-form zod @hookform/resolvers`
- **Deploy:** `npx vercel` (mais simples) ou Cloudflare Pages

## Cross-references

- `design-tokens-emb` — tokens (obrigatório)
- `ui-styling` — guia shadcn detalhado
- `frontend-design` — fundamentos anti-IA
- `designer-senior` — alternativa HTML puro
