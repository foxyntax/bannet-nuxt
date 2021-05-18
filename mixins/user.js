export default {
	computed: {
        user () {
            return this.$store.state.user
        },
        personal () {
            return this.user.personal
        },
        financial () {
            return this.user.financial
        },
        debitCard () {
            return this.financial.debitCard
        },
        nationalId () {
            return this.financial.nationalId
        },
        licenseCard () {
            return this.financial.licenseCard
        },
        id: {
            get () {
                return this.user.id
            },
            set (val) {
                this.$store.commit('UPDATE_USER', { index: 'id', value: val })
            }
        },
        name: {
            get () {
                return this.user.name
            },
            set (val) {
                this.$store.commit('UPDATE_USER', { index: 'name', value: val })
            }
        },
        tell: {
            get () {
                return this.user.tell
            },
            set (val) {
                this.$store.commit('UPDATE_USER', { index: 'tell', value: val })
            }
        },
        avatar: {
            get () {
                return this.personal.avatar
            },
            set (val) {
                this.$store.commit('UPDATE_USER_PERSONAL', { index: 'avatar', value: val })
            }
        },
        province: {
            get () {
                return this.personal.province
            },
            set (val) {
                this.$store.commit('UPDATE_USER_PERSONAL', { index: 'province', value: val })
            }
        },
        city: {
            get () {
                return this.personal.city
            },
            set (val) {
                this.$store.commit('UPDATE_USER_PERSONAL', { index: 'city', value: val })
            }
        },
        addr: {
            get () {
                return this.personal.addr
            },
            set (val) {
                this.$store.commit('UPDATE_USER_PERSONAL', { index: 'addr', value: val })
            }
        },
        postCode: {
            get () {
                return this.personal.postCode
            },
            set (val) {
                this.$store.commit('UPDATE_USER_PERSONAL', { index: 'postCode', value: val })
            }
        },
        shabaa: {
            get () {
                return this.financial.shabaa
            },
            set (val) {
                this.$store.commit('UPDATE_USER_FINANCIAL', { index: 'postCode', value: val })
            }
        },
        debitCardImg: {
            get () {
                return this.debitCard.img
            },
            set (val) {
                this.$store.commit('UPDATE_USER_FINANCIAL_DEBIT_CARD', { index: 'img', value: val })
            }
        },
        debitCardVal: {
            get () {
                return this.debitCard.val
            },
            set (val) {
                this.$store.commit('UPDATE_USER_FINANCIAL_DEBIT_CARD', { index: 'val', value: val })
            }
        },
        debitCardValidated: {
            get () {
                return this.debitCard.validated
            },
            set (val) {
                this.$store.commit('UPDATE_USER_FINANCIAL_DEBIT_CARD', { index: 'validated', value: val })
            }
        },
        nationalIdImg: {
            get () {
                return this.nationalId.img
            },
            set (val) {
                this.$store.commit('UPDATE_USER_FINANCIAL_DEBIT_CARD', { index: 'img', value: val })
            }
        },
        nationalIdVal: {
            get () {
                return this.nationalId.val
            },
            set (val) {
                this.$store.commit('UPDATE_USER_FINANCIAL_DEBIT_CARD', { index: 'val', value: val })
            }
        },
        nationalIdValidated: {
            get () {
                return this.nationalId.validated
            },
            set (val) {
                this.$store.commit('UPDATE_USER_FINANCIAL_NATIONAL_ID', { index: 'validated', value: val })
            }
        },
        licenseCardImg: {
            get () {
                return this.licenseCard.img
            },
            set (val) {
                this.$store.commit('UPDATE_USER_FINANCIAL_DEBIT_CARD', { index: 'img', value: val })
            }
        },
        licenseCardVal: {
            get () {
                return this.licenseCard.val
            },
            set (val) {
                this.$store.commit('UPDATE_USER_FINANCIAL_DEBIT_CARD', { index: 'val', value: val })
            }
        },
        licenseCardValidated: {
            get () {
                return this.licenseCard.validated
            },
            set (val) {
                this.$store.commit('UPDATE_USER_FINANCIAL_LICENSE_CARD', { index: 'validated', value: val })
            }
        },
        scores: {
            get () {
                return this.user.score
            },
            set (val) {
                this.$store.commit('ADD_USER_SCORE', val)
            }
        }
    }
}
