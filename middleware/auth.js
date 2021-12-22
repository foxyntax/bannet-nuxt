/* eslint-disable  padded-blocks  */

import Vue from 'vue'

/**
 * Settings
 */
const failedRedirection = '/'
const loginRoute = ['/welcome']
const PublicRoutes = {
  const: ['/'],
  exp: ['/tyre']
}

export default function ({ route, $axios, redirect, store }) {

  // Get token name from cookie
  const tokenName = Vue.prototype.$cookie.get('webtoken') ?? null

  // Logout Automaticlly if we navigate to loggin page
  const isLoginRoute = (loginRoute.filter(item => route.fullPath.includes(item)).length > 0)

  // Reject if we have different ID in URL
  const hasSavedID = (typeof store.state.user.id !== 'undefined' && store.state.user.id !== 0)
  const isIDinURL = (typeof route.params.id !== 'undefined')

  // Define if there is Auth Value in header and cookie
  const isAuthHeaderEnabled = (typeof $axios.defaults.headers.common.Authorization !== 'undefined')
  const isAuthCookieEnabled = (tokenName !== null)

  /**
  ** Public routes will be ignored redireciton, if auth progress is failed.
  */
  const isPublicRoute = (
    PublicRoutes.const.filter(item => route.fullPath === item).length > 0 ||
    PublicRoutes.exp.filter(item => route.fullPath.includes(item)).length > 0
  )

  // Reset all user data if we wanna go to login page
	if (isLoginRoute) {
		store.dispatch('reset_user_data')
		return
	}

  // Reset all user data if we have different ids [it's useful for situtation that some scripts try to change id of routes]
  // eslint-disable-next-line eqeqeq
  if (hasSavedID && isIDinURL && (store.state.user.id != route.params.id)) {
    console.log('%s reset cause of defferent ids', 'color: red; font-size: 12px; padding: 20px; height: 80px')
    store.dispatch('reset_user_data')
    return redirect(failedRedirection)
  }

  // Get user data or stay in page or even redirect to a public page
  if (isAuthCookieEnabled && isAuthHeaderEnabled) {

    Vue.prototype.$cookie.set('webtoken', tokenName, { expires: '1Y' })

  } else if (isAuthCookieEnabled) {

    store.dispatch('api_check', {
      name: 'name',
      value: tokenName
    })

  } else if (isAuthHeaderEnabled) {

    const token = $axios.defaults.headers.common.Authorization.replace('Bearer ', '')
    store.dispatch('api_check', {
      name: 'token',
      value: token
    })

  } else if (!isAuthCookieEnabled && !isAuthHeaderEnabled) {
    if (isPublicRoute) { return }

    // we are in private route and we must redirect user to public user that we had defined before
    console.log('%s reset cause of vanished tokens', 'color: red; font-size: 12px; padding: 20px; height: 80px')
    return redirect(failedRedirection)
  }
}
