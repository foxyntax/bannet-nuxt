export default {
	filters: {
		toMoney (num) {
			if (typeof num === 'undefined' || num == null) { return }
			if (num === 0) { return 'free' }
			const number = typeof num === 'number' ? num.toString() : num
			return number.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + ',') + ' تومان'
		},
        toFormattedInt (num) {
            if (typeof num === 'undefined' || num == null) { return }
			if (num === 0) { return 'No Data' }
			const number = typeof num === 'number' ? num.toString() : num
			return number.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + ',')
        }
	}
}
