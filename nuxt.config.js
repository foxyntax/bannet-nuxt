export default {

  server: {
		port: 3000, // default: 3000
		host: '0.0.0.0' // default: localhost
	},

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // env property
  env: {
    // assets: 'http://localhost/bannet-sv/uploads/'
    assets: 'https://sv.banett.ir/uploads/'
  },

  // Global Route Settings
  router: {
    middleware: ['membershipCheck', 'auth']
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Banett',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/animate.css',
    '~/assets/css/all.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-hammer.js',
    '~/plugins/notify.js',
    '~/plugins/cookie.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://dev.to/ceppeu/using-sass-global-variables-in-nuxt-js-j0k
    // NOTE: Only 10.1.1v works
		'@nuxtjs/style-resources'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  loading: {
		color: 'black',
		height: '2px'
	},

	loadingIndicator: {
		name: 'fading-circle',
		color: 'black',
		background: 'transparent'
	},

  /**
   * =================================
   * Modules Configuration
   * =================================
   */

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // baseURL: 'http://localhost/bannet-sv/api/',
    baseURL: 'https://sv.banett.ir/api/',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		}
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
			title: 'Banett',
			author: 'FOXYNTAX'
		},
		manifest: {
			name: 'Banett App',
			short_name: 'Banett',
			lang: 'fa'
		},
		icon: {
			source: '/pwa.png',
			fileName: 'pwa.png',
			purpose: ['any', 'monochrome', 'maskable']
		}
  },

  // Using SCSS global variables in Nuxt JS
	styleResources: {
		scss: ['~/assets/scss/main.scss']
	}
}
