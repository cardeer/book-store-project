export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ISEKAI',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          '//cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/variables.css', '~/assets/css/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/get_book_id.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/common',
      '~/components/common/navbar',
      '~/components/common/layout',
    ],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://35.247.181.83:4000',
  },

  router: {
    middleware: ['auth'],
  },

  auth: {
    strategies: {
      google: {
        clientId:
          '322525152965-hbqp3g534551bgrnapf5u7kmu4s07ved.apps.googleusercontent.com',
        token: {
          maxAge: 60 * 60 * 24,
        },
        codeChallengeMethod: '',
        responseType: 'token id_token',
      },
    },
    redirect: {
      login: '/',
      logout: '/',
      callback: '/callback',
      home: '/books',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },
}
