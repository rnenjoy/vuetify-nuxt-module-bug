import gql from 'graphql-tag'

import { useUserStore } from '~/stores/user.js'

export default defineNuxtRouteMiddleware(async () => {
	const userStore = useUserStore()

	if (!userStore.currentUser) {
		const { data } = await useAsyncQuery(gql`
			query currentUser {
				currentUser {
					_id
					email
					firstname
					lastname
					permission
					vehicleDealerIds
					saleCoachUserIds
					dealerId
				}
			}`)

		if (data.value?.currentUser)
			userStore.setCurrentUser(data.value.currentUser)
	}
})
