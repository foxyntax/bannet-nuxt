export const mutations = {
	// USER
	UPDATE_USER (state, payload) {
		state.user[payload.index] = payload.value
	},
	UPDATE_USER_PERSONAL (state, payload) {
		state.user.personal[payload.index] = payload.value
	},
	UPDATE_USER_FINANCIAL (state, payload) {
		state.user.financial[payload.index] = payload.value
	},
	UPDATE_USER_FINANCIAL_DEBIT_CARD (state, payload) {
		state.user.financial.debitCard[payload.index] = payload.value
	},
	UPDATE_USER_FINANCIAL_NATIONAL_ID (state, payload) {
		state.user.financial.nationalId[payload.index] = payload.value
	},
	UPDATE_USER_FINANCIAL_LICENSE_CARD (state, payload) {
		state.user.financial.licenseCard[payload.index] = payload.value
	},
	ADD_USER_SCORE (state, payload) {
		state.user.score.push(payload)
	},

	// Wallet
	UPDATE_WALLET (state, payload) {
		state.wallet[payload.index] = payload.value
	},
	UPDATE_WALLET_MEMBERSHIP (state, payload) {
		state.wallet.userMembership[payload.index] = payload.value
	},

	// Data
	UPDATE_CONTRACT (state, payload) {
		state.contract.list = payload
	},
	UPDATE_FAVORITE (state, payload) {
		state.favorite.list = payload
	},
	UPDATE_RECEIPT (state, payload) {
		state.receipt.list = payload
	},

	// Layout
	UPDATE_LAYOUT (state, payload) {
		state.layout[payload.state] = payload.value
	},
	UPDATE_LAYOUT_CATEGORY (state, payload) {
		state.layout.categories[payload.state] = payload.value
	},
	UPDATE_LAYOUT_REGION (state, payload) {
		state.layout.regions[payload.state] = payload.value
	},
	UPDATE_LAYOUT_FILTER (state, payload) {
		state.layout.filters[payload.state] = payload.value
	},
	UPDATE_LAYOUT_FILTER_LIST (state, payload) {
		state.layout.filters[payload.state].list = payload.value
	},
	UPDATE_LAYOUT_FILTER_CHOSEN (state, payload) {
		state.layout.filters[payload.state].chosen = payload.value
	},

	// Tables
	SET_TABLE (state, payload) {
		state.tables[payload.table] = payload.value
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
