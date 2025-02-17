// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/scss/fonts.scss', '@/assets/scss/main.scss'],
  modules: ['@pinia/nuxt'],
  components: [{ path: './components', pathPrefix: false }],

  vite: {
    assetsInclude: ['**/*.woff', '**/*.woff2'],
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
});
