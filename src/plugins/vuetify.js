import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((nuxtApp) => {
	const vuetify = createVuetify({
		ssr: true,
		icons: {
			defaultSet: 'mdi'
    },
	})
	nuxtApp.vueApp.use(vuetify);
})
