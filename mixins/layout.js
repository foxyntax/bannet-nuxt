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
        filters () {
            return this.layout.filters
        },
        filShow: {
            get () {
                return this.filters.enabled
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_FILTER', { state: 'enabled', value: val })
            }
        },
        filBrand: {
            get () {
                return this.filters.brand.chosen
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_FILTER_CHOSEN', { state: 'brand', value: val })
            }
        },
        filBrandList: {
            get () {
                return this.filters.brand.list
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_FILTER_LIST', { state: 'brand', value: val })
            }
        },
        filWidth: {
            get () {
                return this.filters.width.chosen
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_FILTER_CHOSEN', { state: 'width', value: val })
            }
        },
        filWidthList: {
            get () {
                return this.filters.width.list
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_FILTER_LIST', { state: 'width', value: val })
            }
        },
        filWeight: {
            get () {
                return this.filters.weight.chosen
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_FILTER_CHOSEN', { state: 'weight', value: val })
            }
        },
        filWeightList: {
            get () {
                return this.filters.weight.list
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_FILTER_LIST', { state: 'weight', value: val })
            }
        },
        filHeight: {
            get () {
                return this.filters.height.chosen
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_FILTER_CHOSEN', { state: 'height', value: val })
            }
        },
        filHeightList: {
            get () {
                return this.filters.height.list
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_FILTER_LIST', { state: 'height', value: val })
            }
        },
        filTireHeight: {
            get () {
                return this.filters.tire_height.chosen
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_FILTER_CHOSEN', { state: 'tire_height', value: val })
            }
        },
        filTireHeightList: {
            get () {
                return this.filters.tire_height.list
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_FILTER_LIST', { state: 'tire_height', value: val })
            }
        },
        filForBack: {
            get () {
                return this.filters.for_back.chosen
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_FILTER_CHOSEN', { state: 'for_back', value: val })
            }
        },
        filForFront: {
            get () {
                return this.filters.for_front.chosen
            },
            set (val) {
                this.$store.commit('UPDATE_LAYOUT_FILTER_CHOSEN', { state: 'for_front', value: val })
            }
        }
    }
}
