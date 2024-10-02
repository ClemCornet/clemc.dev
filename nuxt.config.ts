export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  // Nuxt app
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      templateParams: {
        separator: '•',
      },
    },
  },

  // Nuxt modules
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
  ],

  // Color mode
  colorMode: {
    preference: 'system',
    fallback: 'light',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage',
    storageKey: 'nuxt-color-mode',
  },

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },

  routeRules: {
    '/': { prerender: true },
  },

  compatibilityDate: '2024-10-02',
})
