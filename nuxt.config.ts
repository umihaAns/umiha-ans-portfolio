// IMPORTANT: No comments per project rules
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2026-02-07',
  future: {
    compatibilityVersion: 4
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/ui'],
  ui: {
    colors: {
      primary: 'emerald'
    }
  },
  app: {
    head: {
      title: 'SEO Expert & Web Content Writer — Resume',
      meta: [
        { name: 'description', content: 'Resume of an SEO expert and professional web content writer with 4.5 years at eWebCraft as Assistant Manager.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'SEO Expert & Web Content Writer — Resume' },
        { property: 'og:description', content: 'Assistant Manager at eWebCraft with 4.5 years experience in SEO and content.' },
        { property: 'og:type', content: 'website' }
      ]
    }
  },
  tailwindcss: {
    viewer: false
  }
})
