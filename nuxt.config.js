export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target:"static",
  head: {
    title: 'tedx-vitb',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyD7KsstZ80MHP68aSWjkHMRnV7mEJIbo90",
          authDomain: "tedx-vitb.firebaseapp.com",
          databaseURL: "https://tedx-vitb-default-rtdb.firebaseio.com",
          projectId: "tedx-vitb",
          storageBucket: "tedx-vitb.appspot.com",
          messagingSenderId: "835143077848",
          appId: "1:835143077848:web:b8f9ee5f1482aebf92ecad",
          measurementId: "G-RJTECGWWHD"
        },
        services: {
          auth: true,
          database:true // Just as example. Can be any other service.
        }
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
