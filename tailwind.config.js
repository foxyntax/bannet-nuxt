module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: [
			'components/*.vue',
			'layouts/*.vue',
			'pages/*.vue',
			'pages/**/*.vue',
			'plugins/*.js',
			'nuxt.config.js'
		]
	},
	corePlugins: {
		ringWidth: false
	},
	theme: {
		screens: {
			xs: '375px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px'
		}
	},
	variants: {},
	plugins: []
}
