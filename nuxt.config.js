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

  env: {
    clientId: 'eb7634a0f04152a7f62e',
    clientSecret: 'fc5e59abf07d0f3a99457fa910f97de12739a5f4',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/variables.css', '~/assets/css/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/get_book_id.js', '~/plugins/github_logout.js'],

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
      github: {
        clientId: 'eb7634a0f04152a7f62e',
        clientSecret: 'fc5e59abf07d0f3a99457fa910f97de12739a5f4',
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
