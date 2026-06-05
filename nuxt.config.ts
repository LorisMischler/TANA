// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],

  app: {
    head: {
      title: 'TANA – Tous Avec Nos Ados',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            "TANA accompagne les mineurs confrontés aux violences et à l'exploitation sexuelle. Sensibilisation, prévention, soutien.",
        },
        { property: 'og:title', content: 'TANA – Tous Avec Nos Ados' },
        { property: 'og:description', content: 'Prévention, formation, accompagnement et réinsertion des mineurs en situation de prostitution.' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=DM+Serif+Display:ital@0;1&display=swap',
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2025-01-01',
})
