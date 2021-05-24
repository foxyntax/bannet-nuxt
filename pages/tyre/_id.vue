<template>
  <section class="px-3">
    <!-- Back to store -->
    <div class="w-full block text-left md:mb-28 pt-6">
      <NuxtLink to="/">
        <i class="fas fa-arrow-left text-primary text-2xl" />
      </NuxtLink>
    </div>
    <!-- Image and Set into my favorites -->
    <div id="img-zone">
      <SwiperImg :src="tyre.features.src" />
      <i class="far fa-bookmark bookmark fa-2x" />
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
	head: () => ({
    title: 'بنت | نام متغیر از نام کالا',
    meta: [
      // SEO Examples
      { hid: 'description', name: 'description', content: 'Gemnote VueJS Frontend Assessment' },
      { hid: 'keywords', name: 'keywords', content: 'Gemnote, swag and gifts, gifts, gift inventory' },
      { name: 'robots', content: 'noindex, nofollow' },
      // Social Media
      { property: 'og:site_name', content: 'Gemnote' },
      { property: 'og:title', content: 'Gemnote VueJS Frontend Assessment' },
      { property: 'og:description', content: 'Gemnote by VueJs | NuxtJS' },
      { property: 'og:image', content: 'https://assets.website-files.com/5c7449f43783556baa54bd0e/60540cde101f8399aa9f3a8d_Gemnote_WebCover.png' },
      { property: 'og:url', content: 'https://gemnote.com' },
      { property: 'og:url', content: 'https://gemnote.com' },
      { name: 'twitter:card', content: 'twitterCard' },
      { name: 'twitter:image:alt', content: 'Alt text for image' },
      { name: 'twitter:site', content: '@website-username' },
      { name: 'fb:app_id', content: 'your_app_id' }
    ]
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
#img-zone {
	@apply relative;

	> i {
		@apply absolute z-50 top-1 right-5 text-gray-600;
	}
}
</style>
