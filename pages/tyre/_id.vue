<template>
  <section class="px-3">
    <!-- Back to store -->
    <div class="w-full block text-left md:mb-28 pt-6">
      <NuxtLink to="/">
        <i class="fas fa-arrow-left text-primary text-2xl" />
      </NuxtLink>
    </div>
    <!-- Image and Set into my favorites -->
    <div>
      <ImgSlider :src="tyre.features.src" />
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
		activeIndex: 1,
		tyre: {
			type: '',
			features: {
				id: 1,
				name: 'لاستیک خودرو نکسن مدل NFERA SU1',
				design_name: '235/40R18',
				brand: 'نکسن',
				src: ['/demo/goods/3.jpg', '/demo/goods/2.jpg', '/demo/goods/1.jpg']
			}
		},
		ads: [],
		myAds: []
  }),
	methods: {
		newSliderIndex (index, type = 'exact') {
			if (type === 'exact') {
				this.activeIndex = index
			} else {
				const lastIndex = this.tyre.features.src.length - 1
				if (index === lastIndex) {
					this.activeIndex = (type !== 'swipeleft' && type === 'swiperight') ? 0 : index - 1
				} else if (index === 0) {
					this.activeIndex = (type !== 'swipeleft' && type === 'swiperight') ? index + 1 : lastIndex
				} else {
					this.activeIndex = (type !== 'swipeleft' && type === 'swiperight') ? index + 1 : index - 1
				}
			}
		}
	}
}
</script>

<style lang="scss">
#tyre-img {
	@apply w-full mb-4;

	img {
		width: inherit;
		height: auto;
	}
}
#slider-dot {
	@apply w-full h-auto text-center;

	div {
		@apply inline-block bg-gray-200 mx-1;
		width: 7px;
		height: 7px;
		border-radius: 80px;
		transition: all .2s ease-in;
	}

	.active-dot {
		@apply bg-primary;
		width: 20px !important;
	}
}
</style>
