export const state = () => ({
    pendingBalance: 0,
    availableBalance: 0,
    withdrawalBalance: 0,
    transactions: null,
    expired_at: null,

    // From Membership
    userMembership: {
        title: null,
        days: null,
        status: null,
        meta: null
    }
})