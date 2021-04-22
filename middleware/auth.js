import Vue from 'vue'

export default function ({ route, $axios, redirect, store }) {
	// First, is public route
	const isPublicRoute = route.fullPath.includes('/order/new')

	// Logout Automaticlly if we navigate to loggin page
	if (route.fullPath === '/login' || route.fullPath === '/login/') {
		Vue.prototype.$cookie.delete('logged')
		$axios.defaults.headers.common.Authorization = null
		store.commit('UPDATE_USER_ACTIVE', { index: 'id', value: 0 })
		store.commit('UPDATE_USER_ACTIVE', { index: 'tell', value: '' })
		return
	}

	// Get All of Auth Values
	const authInHeader = (typeof $axios.defaults.headers.common.Authorization !== 'undefined')
		? $axios.defaults.headers.common.Authorization
		: false

	const hasID = (typeof store.state.user.id !== 'undefined' && store.state.user.id !== 0)

	const authInCookie = (Vue.prototype.$cookie.get('logged') !== null)
		? Vue.prototype.$cookie.get('logged')
		: false

	if (authInCookie !== false) { // Check Verification if Cookie Setted Before
		if (authInHeader !== false && hasID !== false) { // everything is okay, go ahead
			Vue.prototype.$cookie.set('logged', authInCookie, { expires: '1Y' })
		} else { // Authorization or vuex states lost
			$axios.post('api-token/check', { name: authInCookie }).then((res) => {
				// Renew API token
				$axios.defaults.headers.common.Authorization = 'Bearer ' + res.data.token
				Vue.prototype.$cookie.set('logged', res.data.token_name, { expires: '1Y' })

				// Fetch User Data
				const user = res.data.user
				store.dispatch('fetch_user', user)
			}).catch(() => {
				// console.log(err.response.data)
				return redirect('/login')
			})
		}
	} else if (!authInCookie && authInHeader !== false && hasID !== false) { // Cookie Deleted, but Auth is Succeed
		Vue.prototype.$cookie.set('logged', store.state.user.tell, { expires: '1Y' })
	} else if ((!authInCookie && (!authInHeader || !hasID)) && !isPublicRoute) { // Push to Login Page if Auth is Failed or RoutPath is not public
		return redirect('/login')
	}
}
