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

  runtimeConfig: {
    openaiApiKey: '',
  },

  routeRules: {
    // Static pages
    '/': { prerender: true },
    '/about/**': { prerender: true },
    '/blog/**': { prerender: true },
    '/projects/**': { prerender: true },

    // Serverless functions
    '/api/chat': { cors: true, headers: { 'cache-control': 'no-cache' } },
    '/api/cv/**': { prerender: false },
  },

  experimental: {
    typedPages: true,
  },

  compatibilityDate: '2025-10-18',

  nitro: {
    preset: 'netlify',
  },

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
