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
        catShow: {
            get () {
                return this.layout.categories.enabled
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_CATEGORY', { state: 'enabled', value: val })
            }
        },
        catChosen: {
            get () {
                return this.layout.categories.chosen
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_CATEGORY', { state: 'chosen', value: val })
            }
        },
        catList: {
            get () {
                return this.layout.categories.list
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_CATEGORY', { state: 'list', value: val })
            }
        },
        regShow: {
            get () {
                return this.layout.regions.enabled
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_REGION', { state: 'enabled', value: val })
            }
        },
        regChosen: {
            get () {
                return this.layout.regions.chosen
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_REGION', { state: 'chosen', value: val })
            }
        },
        regList: {
            get () {
                return this.layout.regions.list
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_REGION', { state: 'list', value: val })
            }
        },
        filBrand: {
            get () {
                return this.layout.filters.brand
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_FILTERS_CHOSEN', { state: 'brand', value: val })
            }
        },
        filBrandList: {
            get () {
                return this.layout.filters.brand
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_FILTERS_LIST', { state: 'brand', value: val })
            }
        },
        filWidth: {
            get () {
                return this.layout.filters.width
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_FILTERS_CHOSEN', { state: 'width', value: val })
            }
        },
        filWidthList: {
            get () {
                return this.layout.filters.width
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_FILTERS_LIST', { state: 'width', value: val })
            }
        },
        filWeight: {
            get () {
                return this.layout.filters.weight
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_FILTERS_CHOSEN', { state: 'weight', value: val })
            }
        },
        filWeightList: {
            get () {
                return this.layout.filters.weight
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_FILTERS_LIST', { state: 'weight', value: val })
            }
        },
        filHeight: {
            get () {
                return this.layout.filters.height
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_FILTERS_CHOSEN', { state: 'height', value: val })
            }
        },
        filHeightList: {
            get () {
                return this.layout.filters.height
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_FILTERS_LIST', { state: 'height', value: val })
            }
        },
        filTireHeight: {
            get () {
                return this.layout.filters.tire_height
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_FILTERS_CHOSEN', { state: 'tire_height', value: val })
            }
        },
        filTireHeightList: {
            get () {
                return this.layout.filters.tire_height
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_FILTERS_LIST', { state: 'tire_height', value: val })
            }
        },
        filForBack: {
            get () {
                return this.layout.filters.for_back
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_FILTERS_CHOSEN', { state: 'for_back', value: val })
            }
        },
        filForFront: {
            get () {
                return this.layout.filters.for_front
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_FILTERS_CHOSEN', { state: 'for_front', value: val })
            }
        }
    }
}
