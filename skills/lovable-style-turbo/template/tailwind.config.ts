import type { Config } from 'tailwindcss'
// Ajuste o caminho para onde a skill design-tokens-emb está no seu sistema:
// Por padrão: ~/.claude/emb/skills/design-tokens-emb/tailwind.preset.js
// Recomendação: copie a pasta design-tokens-emb para dentro do projeto em /tokens
import embPreset from './tokens/tailwind.preset.js'

export default {
  presets: [embPreset],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
} satisfies Config
