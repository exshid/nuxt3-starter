import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: 'Nuxt 3 Starter',
  },

  buildModules: ['@pinia/nuxt', '@unocss/nuxt', '@vueuse/nuxt'],

  publicRuntimeConfig: {
    DEPLOYMENT_ENVIRONMENT: 'local',
  },

  unocss: {
    preflight: true,
    uno: true,
    icons: {
      scale: 1.2,
      extraProperties: {
        position: 'relative',
        display: 'inline-block',
        'vertical-align': 'middle',
        bottom: '0.125ex',
      },
    },
  },

  typescript: {
    shim: false,
  },
})
