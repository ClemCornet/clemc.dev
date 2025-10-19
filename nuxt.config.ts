import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({

  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxtjs/device',
  ],

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  ui: {
    colorMode: false,
  },

  routeRules: {
    '/': { prerender: true },
  },

  experimental: {
    typedPages: true,
  },

  compatibilityDate: '2025-10-18',

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },
})
