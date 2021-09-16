export const state = () => ({
	id: 1,
    name: 'میلاد محمدی', // ""
    tell: '',
    personal: {
        avatar: null,
        province: null,
        city: null,
        addr: null,
        postCode: null,
        phone: null
    },
    financial: {
        shabaa: null,
        debitCard: {
            img: null,
            val: null,
            validated: 0
        },
        nationalId: {
            img: null,
            val: null,
            validated: 0
        },
        licenseCard: {
            img: null,
            val: null,
            validated: 0
        }
    },
    scores: null
})
