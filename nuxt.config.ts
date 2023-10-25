import { pwa } from './config/pwa'
import { appDescription } from './constants/index'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@anu-vue/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxtjs/i18n',
    '@vee-validate/nuxt',
    'nuxt-primevue',
  ],
  primevue: {
    options: {
   
      ripple: true,
   
  },
    components: {
      prefix: 'Prime',
      include: ['AutoComplete'], /* Used as <PrimeButton /> and <PrimeDataTable /> */
    },
  },
  vite: {
    vue: {
      script: {
        defineModel: true,
      },
    },
  },
  ssr: false,
  i18n: {
    // Adding English-Canada and Arabic-Egypt
    // as our supported locales. You can add as
    // many locales as you want here.
    locales: ['en', 'fa'],

    strategy: 'prefix_except_default',
    // Used when active locale is not explicitly defined
    defaultLocale: 'fa',

    // Disabling automatic locale detection (see below)
    detectBrowserLanguage: false,
    vueI18n: './i18n.config.ts',
  },
  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/css/fonts.css',
    '~/assets/css/main.css',
    'primevue/resources/themes/lara-dark-teal/theme.css',
  ],

  colorMode: {
    preference: 'light',
    classSuffix: '',
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
    },
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  pwa,

  devtools: {
    enabled: true,
  },
})
