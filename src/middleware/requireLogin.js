import { useUserStore } from '~/stores/user.js'

export default defineNuxtRouteMiddleware((to) => {
	const currentUser = useUserStore().currentUser

	if (!currentUser) {
		const url = `/login?url=${to.path}`

		return navigateTo(url)
	}
})
