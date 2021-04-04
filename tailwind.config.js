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
	theme: {},
	variants: {},
	plugins: []
}
