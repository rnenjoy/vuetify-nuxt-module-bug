import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

// If we install @mdi/font it will use the local version with more icons

export default defineVuetifyConfiguration({
	theme: {
		defaultTheme: 'hcCustomLightTheme',
		themes: {
			dark: {},
			light: {},
			hcCustomLightTheme: {
				colors: {
					'background': '#FFFFFF',
					'surface': '#FFFFFF',
					'primary': '#5cc1aa',
					'primary-darken-1': '#3700B3',
					'secondary': '#03DAC6',
					'secondary-darken-1': '#018786',
					'error': '#B00020',
					'info': '#2196F3',
					'success': '#4CAF50',
					'warning': '#FB8C00',
				},
			},
		},
	},

	ssr: {
		clientWidth: 100,
		// clientHeight: 100,
	},

	directives: true, // can take an array as well

	// Global components
	components: [
		// 'VDialog',
		// 'VExpansionPanel',
		// 'VExpansionPanelText',
		// 'VExpansionPanelTitle',
	],

	labComponents: true,
	// labComponents: [
	// 'VDataTable',
	// 'VDatePickerControls',
	// 'VDatePickerHeader',
	// ],

	icons: {
		defaultSet: 'mdi',
	},
})
