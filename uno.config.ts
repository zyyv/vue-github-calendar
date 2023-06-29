import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives } from 'unocss'
import { presetUseful } from 'unocss-preset-useful'

export default defineConfig({
  theme: {
    colors: {
      level: {
        0: '#2d333b',
        // 0: '#ebedf0',
        1: '#0e4429',
        // 1: '#9be9a8',
        2: '#006d32',
        // 2: '#40c463',
        3: '#26a641',
        // 3: '#30a14e',
        4: '#39d353',
        // 4: '#216e39',
      },
    },
  },
  presets: [
    presetUno({ preflight: true }),
    presetAttributify(),
    presetIcons(),
    presetUseful(),
  ],
  transformers: [
    transformerDirectives(),
  ],
  safelist: ['fill-level-0', 'fill-level-1', 'fill-level-2', 'fill-level-3', 'fill-level-4'],
})
