export const state = () => ({
    isLoading: false,
    categories: {
        enabled: false,
        chosen: { type: 1, name: 'خودرو سواری', icon: 'fal fa-car' },
        list: [
            { type: 1, name: 'خودرو سواری', icon: 'fal fa-car' },
            { type: 2, name: 'خودرو سنگین', icon: 'fal fa-truck-moving' },
            { type: 3, name: 'موتورسیکلت', icon: 'fal fa-motorcycle' }
        ]
    },
    regions: {
        enabled: false,
        chosen: 'تهران',
        list: [
            'تهران',
            'مشهد',
            'اصفهان',
            'تبریز',
            'شیراز',
            'ارومیه',
            'رشت',
            'بندرعباس',
            'کیش',
            'بوشهر',
            'ساری',
            'قزوین',
            'کرج',
            'قم',
            'خرم آباد'
        ]
    },
    filters: {
        brand: {
            chosen: null,
            list: ['1', '2', '3', '4', '5', '6']
        },
        width: {
            chosen: null,
            list: ['1', '2', '3', '4', '5', '6']
        },
        weight: {
            chosen: null,
            list: ['1', '2', '3', '4', '5', '6']
        },
        height: {
            chosen: null,
            list: ['1', '2', '3', '4', '5', '6']
        },
        tire_height: {
            chosen: null,
            list: ['1', '2', '3', '4', '5', '6']
        },
        for_back: {
            chosen: null
        },
        for_front: {
            chosen: null
        }
    }
})
