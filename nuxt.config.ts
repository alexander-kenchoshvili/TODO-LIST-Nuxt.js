// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/scss/fonts.scss', '@/assets/scss/main.scss'],
  modules: ['@pinia/nuxt'],
  components: [
    {
      path: './components',
      pathPrefix: false,
    },
    { path: '~/components/ui', pathPrefix: false },
    { path: '~/components/ui/ProgressBar', pathPrefix: false },
    { path: '~/components/ui/tasks', pathPrefix: false },
  ],
  alias: {
    '@types': './types',
  },
  plugins: ['~/plugins/firebase'],
  vite: {
    assetsInclude: ['**/*.woff', '**/*.woff2'],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "~/assets/scss/mixins/_mixins.scss";
          `,
        },
      },
    },
  },
  app: {
    head: {
      script: [
        {
          innerHTML: `
            try {
              if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            } catch (_) {}
          `,
          type: 'text/javascript',
        },
      ],
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
});
