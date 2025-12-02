// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-10-16',

  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/seo'
  ],

  css: ['~/assets/css/main.css'],

  // @ts-ignore - @nuxt/image types not fully compatible with Nuxt 4
  image: {
    provider: 'ipx',
    ipx: {}
  },

  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  },

  nitro: {
    preset: 'netlify',
    alias: {
      'tailwindcss/colors': 'tailwindcss/colors.js'
    }
  },

  site: {
    url: 'https://cssprep.pk',
    name: 'CSS Prep Pakistan',
    description: 'Your comprehensive hub for CSS exam preparation - curated resources, study materials, and strategic guidance for Pakistani civil service aspirants.',
    defaultLocale: 'en',
  },

  devtools: { enabled: false }
})