export const mutations = {
	// GLobal
	UPDATE_USER_ACTIVE (state, payload) {
		state.user[payload.index] = payload.value
	},
	UPDATE_THEME_COLOR (state, val) {
		state.theme = val
	},
	UPDATE_SETTINGS (state, payload) {
		state.settings[payload.index] = payload.value
	},
	UPDATE_CLOSE_DAYS (state, payload) {
		state.settings.close_day[payload.index] = payload.value
	},
	UPDATE_LOAD_MODE (state, val) {
		state.isLoading = val
	},

	// Data
	SET_DATA (state, payload) {
		state.data[payload.index] = payload.value
	},

	// Order
	SET_ORDER_VAR (state, payload) {
		state.order[payload.index] = payload.value
	},
	SET_NEW_ORDER (state, payload) {
		state.order.newOrder[payload.index] = payload.value
	},
	SET_ADDR_ORDER (state, payload) {
		state.order.newOrder.address[payload.index] = payload.value
	},

	// Service
	SET_SERVICE_DAY (state, payload) {
		state.data.serviceDay[payload.index] = payload.value
	},

	// Tables
	SET_TABLE (state, payload) {
		state.data[payload.table] = payload.value
	},
	UPDATE_TABLE (state, payload) {
		state.tables[payload.table].find(item => item.id === payload.id)[payload.property] = payload.value
	},
	DELETE_FROM_TABLE (state, payload) {
		state.tables[payload.table].splice(payload.index, 1)
	},
	ADD_TO_TABLE (state, payload) {
		state.tables[payload.table].push(payload.value)
	}
}

export const actions = {
	// GLobal
	fetch_user ({ commit }, user) {
		commit('UPDATE_USER_ACTIVE', { index: 'id', value: user.id })
		commit('UPDATE_USER_ACTIVE', { index: 'full_name', value: user.full_name })
		commit('UPDATE_USER_ACTIVE', { index: 'tell', value: user.tell })
		commit('UPDATE_USER_ACTIVE', { index: 'verified_email', value: user.verified_email })
		commit('UPDATE_USER_ACTIVE', { index: 'is_disable', value: user.is_disable })
		commit('UPDATE_USER_ACTIVE', { index: 'sex', value: user.sex })
		if (user.email !== null && 'email' in user) {
			commit('UPDATE_USER_ACTIVE', { index: 'email', value: user.email })
		}
		if (user.avatar !== null && 'avatar' in user) {
			commit('UPDATE_USER_ACTIVE', { index: 'avatar', value: process.env.assetsBase + user.avatar })
		}
		if (user.birthday !== null && 'birthday' in user) {
			commit('UPDATE_USER_ACTIVE', { index: 'day', value: user.birthday.day })
			commit('UPDATE_USER_ACTIVE', { index: 'month', value: user.birthday.month })
			commit('UPDATE_USER_ACTIVE', { index: 'year', value: user.birthday.year })
		}
	}
}
