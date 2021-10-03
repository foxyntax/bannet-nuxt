export default {
	computed: {
        contract: {
            get () {
                return this.$store.state.contract.list
            },
            set (val) {
                this.$store.commit('UPDATE_CONTRACT', val)
            }
        },
        favorite: {
            get () {
                return this.$store.state.favorite.list
            },
            set (val) {
                this.$store.commit('UPDATE_FAVORITE', val)
            }
        },
        receipt: {
            get () {
                return this.$store.state.receipt.list
            },
            set (val) {
                this.$store.commit('UPDATE_RECEIPT', val)
            }
        },
        memberships: {
            get () {
                return this.$store.state.membership.list
            },
            set (val) {
                this.$store.commit('UPDATE_MEMBERSHIP', val)
            }
        }
    }
}
