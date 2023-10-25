import { presetAnu, presetIconExtraProperties } from 'anu-vue'
import { presetThemeDefault } from '@anu-vue/preset-theme-default'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    // anu-vue preset
    presetAnu(),

    // default theme preset
    presetThemeDefault(),
  ],
  content: {
    pipeline: {
      include: [/.*\/anu-vue\.js(.*)?$/, './**/*.vue', './**/*.md'],

    },
  },
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],

  theme: {
    fontFamily: {
      iranyekan: 'IRANYekan',
    },
    colors: {
      white: '#FEFEFF',
      black: '#0D0D0D',
    },
    breakpoints: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1380px',
    },
    spacing: {
      25: '6.25rem',
      50: '12.5rem',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '0.625rem',
      },
    },
  },
})
