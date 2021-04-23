export default {
	computed: {
        wallet () {
            return this.store.state.wallet
        },
        membership () {
            return this.wallet.userMembership
        },
        pendingBalance: {
            get () {
                return this.wallet.pendingBalance
            },
            set (val) {
                this.$store.commit('UPDATE_WALLET', {index: 'pendingBalance', value: val})
            }
        },
        availableBalance: {
            get () {
                return this.wallet.availableBalance
            },
            set (val) {
                this.$store.commit('UPDATE_WALLET', {index: 'availableBalance', value: val})
            }
        },
        withdrawalBalance: {
            get () {
                return this.wallet.withdrawalBalance
            },
            set (val) {
                this.$store.commit('UPDATE_WALLET', {index: 'withdrawalBalance', value: val})
            }
        },
        transactions: {
            get () {
                return this.wallet.transactions
            },
            set (val) {
                this.$store.commit('UPDATE_WALLET', {index: 'transactions', value: val})
            }
        },
        expired_at: {
            get () {
                return this.wallet.expired_at
            },
            set (val) {
                this.$store.commit('UPDATE_WALLET', {index: 'expired_at', value: val})
            }
        },
        membershipTitle: {
            get () {
                return this.membership.title
            },
            set (val) {
                this.$store.commit('UPDATE_WALLET_MEMBERSHIP', {index: 'title', value: val})
            }
        },
        membershipDays: {
            get () {
                return this.membership.days
            },
            set (val) {
                this.$store.commit('UPDATE_WALLET_MEMBERSHIP', {index: 'days', value: val})
            }
        },
        membershipStatus: {
            get () {
                return this.membership.status
            },
            set (val) {
                this.$store.commit('UPDATE_WALLET_MEMBERSHIP', {index: 'status', value: val})
            }
        },
        membershipMeta: {
            get () {
                return this.membership.meta
            },
            set (val) {
                this.$store.commit('UPDATE_WALLET_MEMBERSHIP', {index: 'meta', value: val})
            }
        },
    }
}
