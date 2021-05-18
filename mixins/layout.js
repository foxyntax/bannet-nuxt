export default {
	computed: {
        layout () {
            return this.$store.state.layout
        },
        isLoading: {
            get () {
                return this.layout.isLoading
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT', { state: 'isLoading', value: val })
            }
        },
        categoryItems: {
            get () {
                return this.layout.categoryItems
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT', { state: 'categoryItems', value: val })
            }
        },
        filters: {
            get () {
                return this.layout.filters
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT', { state: 'filters', value: val })
            }
        },
        regionItems: {
            get () {
                return this.layout.regionItems
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT', { state: 'regionItems', value: val })
            }
        }
    }
}
