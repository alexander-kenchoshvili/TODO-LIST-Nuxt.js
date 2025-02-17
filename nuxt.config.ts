// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/scss/main.scss'],
  modules: ['@pinia/nuxt'],
  components: [{ path: './components', pathPrefix: false }],

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
});
