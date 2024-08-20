import { useUserStore } from '~/stores/user.js'

export default defineNuxtRouteMiddleware((to) => {
	const currentUser = useUserStore().currentUser
	const url = to.path ? `/login?url=${to.path}` : '/login'

	const userPermissions = currentUser ? currentUser.permission : []
	const permission = to.meta.permission

	if (!currentUser)
		return navigateTo(url)

	if (Array.isArray(permission) && !permission.some((p) => userPermissions.includes(p)))
		return navigateTo('/error/no-access')
	else if (typeof permission === 'string' && (!userPermissions  || !userPermissions.includes(permission)))
		return navigateTo('/error/no-access')
})
