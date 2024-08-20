import { resolve } from 'node:path'
import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	srcDir: 'src/',

	runtimeConfig: {
		public: {
			isDev: true,
			protocol: 'https',
			host: 'localhost',
		},
	},

	experimental: {
		asyncContext: true, // This setting solves the problem with context being lost when using multiple asyncData with awaits
	},

	features: {
		inlineStyles: false,
	},

	typescript: { shim: false },

	app: {
		head: {
			meta: [],
			link: [
				{ href: 'https://fonts.googleapis.com/css?family=Montserrat:200,200i,300,400,500,500i,600,700,700i,800|Material+Icons', rel: 'stylesheet' },
			],
			style: [],
			script: [],
			noscript: [],
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: '',
		},
	},

	modules: [
		'@nuxt/devtools',
		'@pinia/nuxt',
		'vuetify-nuxt-module',
		[
			'@storyblok/nuxt',
			{
				accessToken: '',
			},
		],
		'@sentry/nuxt/module'
	],

	vuetify: {
		moduleOptions: {
			ssrClientHints: {
				reloadOnFirstRequest: false,
				prefersColorScheme: true,
				prefersColorSchemeOptions: {
					useBrowserThemeOnly: false,
				},
				viewportSize: true,
			},
		},

		vuetifyOptions: './vuetify.config.ts', // This file is generally configured as configPath with Pinegrow Vuetify Plugin
	},

	apollo: {
		clients: {
			default: {
			},
		},
	},

	vite: {
		define: {
			'process.env.DEBUG': true,
		},

		css: {
			preprocessorOptions: {
				stylus: {
					additionaldаta: [`@import "${resolve(__dirname, './')}/assets/styl/variables";`],
				},
			},
		},

		// Fix package that doesnt export a correct es5 module
		optimizeDeps: {
			include: [
				'fast-deep-equal', // Google maps
			],
		},

		server: {
			watch: {
				usePolling: true,
			},
		},

		build: {
			sourcemap: true, // Source map generation must be turned on
		},
	},

	build: {
		// Add library here if it complains about not being able to import
		transpile: ['vuetify', '@apollo/client', '@vue/apollo-composable'],
	},

	devtools: {
		enabled: true,
		timeline: {
			enabled: true,
		},
	},

	compatibilityDate: '2024-07-08',
})
