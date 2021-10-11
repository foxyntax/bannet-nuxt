<template>
  <section>
    <!-- Back to store -->
    <div class="w-full relative block text-left md:mb-18 pt-6 px-3 z-50">
      <NuxtLink to="/">
        <i class="far fa-arrow-left text-primary text-2xl" />
      </NuxtLink>
    </div>
    <!-- Good Brief -->
    <div id="good-zone">
      <SwiperImg :src="tyre.features.src" />
      <div class="mt-3">
        <div class="flex justify-between">
          <small class="sans-number text-gray-400">
            {{ tyre.features.design_name }}
            <Badge type="small" :text="tyre.features.brand" classes="inline mr-1" />
          </small>
          <i class="far fa-bookmark bookmark text-xl" />
        </div>
        <h1 class="sans-number text-md text-gray-600 mt-2">
          {{ tyre.features.name }}
        </h1>
      </div>
    </div>

    <!-- Call to action -->
    <div class="w-full mb-2 px-3">
      <Button v-if="expired_at === null && id !== 0" text="مشاهده تایر با پروفایل کاربری" template="red" icon="fal fa-user-plus" />
      <Button v-else-if="id !== 0" text="فعالسازی اشتراک فروشگاه" icon="fal fa-cash-register" />
      <Button v-else text="ثبت آگهی برای این تایر" template="yellow" icon="fal fa-tire" />
    </div>

    <!-- Menu -->
    <div id="menu-tab">
      <p :class="{'active-tab': activeTab === 'features'}" @click="activeTab = 'features'">
        جزئیات تایر
      </p>
      <p :class="{'active-tab': activeTab === 'ads'}" @click="activeTab = 'ads'">
        آگهی‌های ثبت شده
      </p>
      <p :class="{'active-tab': activeTab === 'myAds'}" @click="activeTab = 'myAds'">
        آگهی‌های من
      </p>
    </div>

    <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster" mode="out-in" appear>
      <FeatureList v-if="activeTab === 'features'" :list="tyre.features" />
      <AdsList v-else-if="activeTab === 'ads'" :list="ads" :avarage="avarage" />
      <MyAds v-else-if="activeTab === 'myAds'" :list="myAds" />
    </transition>
  </section>
</template>

<script>
import user from '@/mixins/user'
import wallet from '@/mixins/wallet'
export default {
  mixins: [user, wallet],
  data: () => ({
		activeIndex: 1,
    activeTab: 'features',
		tyre: {
			type: '',
			features: {
				id: 1,
				name: 'لاستیک خودرو نکسن مدل NFERA SU1',
				design_name: '235/40R18',
				brand: 'نکسن',
				src: ['/demo/goods/3.jpg', '/demo/goods/2.jpg', '/demo/goods/1.jpg'],
        width: 235,
        height: 40,
        tire_height: 63,
        diameter: 18,
        color: 'سیاه',
        country: 'ژاپن',
        for_back: 1,
        for_front: 0,
        tubless: 18,
        speed: 190,
        weight: 39
			}
		},
		ads: [
      {
        meta: {
          city: 'مشهد', tyre_year: '1400', count: 2, cost: 25000000, shipment_day: 15
        },
        expired_at: '12 مرداد ماه',
        users: {
          full_name: 'میلاد محمدی',
          meta: {
            personal: {
              avatar: '/demo/avatar.jpg'
            },
            scores: [
              { rate: 4 },
              { rate: 2 },
              { rate: 5 },
              { rate: 5 },
              { rate: 5 }
            ]
          }
        }
      },
      {
        meta: {
          city: 'تهران', tyre_year: '1398', count: 6, cost: 85005450, shipment_day: 24
        },
        expired_at: '11 مرداد ماه',
        users: {
          full_name: 'مقدس فرهزاد',
          meta: {
            personal: {
              avatar: '/demo/avatar.jpg'
            },
            scores: [
              { rate: 4 },
              { rate: 0 },
              { rate: 2 },
              { rate: 5 },
              { rate: 5 }
            ]
          }
        }
      }
    ],
    avarage: 25000000,
		myAds: [
      {
        meta: {
          city: 'مشهد', tyre_year: '1400', count: 2, cost: 25000000, shipment_day: 15
        },
        expired_at: '12 مرداد ماه'
      },
      {
        meta: {
          city: 'تهران', tyre_year: '1398', count: 6, cost: 85005450, shipment_day: 24
        },
        expired_at: '11 مرداد ماه'
      }
    ]
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
#good-zone {
	@apply relative px-2 pb-2 pt-0 xs:px-3 xs:pb-3;
  top: -15px;

	> i {
		@apply absolute text-2xl z-50 top-3 right-5 text-gray-600;
	}
}
#menu-tab {
  @apply w-full flex justify-between my-5 px-3;
  box-shadow: 0 5px 5px 0 lighten($default_color, 70%);

  p {
    @apply relative font-bold text-gray-700 text-center text-xs xs:text-sm py-3;

    &:after {
      @apply w-0 absolute bottom-0 left-0 right-0 mx-auto bg-primary;
      content: '';
      height: 3px;
      border-radius: 2px 2px 0 0;
      transition: .15s all ease-in;
    }
  }

  .active-tab:after, .active-tab:hover:after {
    @apply w-full;
  }
}
</style>
