import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives } from 'unocss'
import { presetUseful } from 'unocss-preset-useful'

export default defineConfig({
  theme: {
    colors: {
      level: {
        0: 'var(--gc-level-0)',
        1: 'var(--gc-level-1)',
        2: 'var(--gc-level-2)',
        3: 'var(--gc-level-3)',
        4: 'var(--gc-level-4)',
      },
    },
  },
  presets: [
    presetUno({ preflight: false }),
    presetAttributify(),
    presetIcons(),
    presetUseful(),
  ],
  transformers: [
    transformerDirectives(),
  ],
  preflights: [{
    layer: 'vue-github-calendar',
    getCSS() {
      return `
:root {
  --gc-text: #1F2328;
  --gc-level-0: #ebedf0;
  --gc-level-1: #9be9a8;
  --gc-level-2: #40c463;
  --gc-level-3: #30a14e;
  --gc-level-4: #216e39;
}
.dark {
  --gc-text: #adbac7;
  --gc-level-0: #2d333b;
  --gc-level-1: #0e4429;
  --gc-level-2: #006d32;
  --gc-level-3: #26a641;
  --gc-level-4: #39d353;
}`
    },
  }],
  shortcuts: {
    bg: 'bg-#eee dark:bg-#222',
    text: 'text-#333 dark:text-#ddd',
  },
  safelist: ['fill-level-0', 'fill-level-1', 'fill-level-2', 'fill-level-3', 'fill-level-4'],
})
