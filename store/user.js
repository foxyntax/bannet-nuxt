export const state = () => ({
	id: 0,
    name: '',
    tell: '',
    personal: {
        avatar: null,
        province: null,
        city: null,
        addr: null,
        postCode: null,
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