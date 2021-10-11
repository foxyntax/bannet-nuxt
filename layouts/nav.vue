<template>
  <div id="logged-container">
    <HeadProfileLayout v-if="$route.fullPath.includes('/me')" />
    <Nuxt id="nav-body" />
    <footer>
      <div class="grid grid-cols-5 grid-rows-1 gap-1 px-4 py-4">
        <div class="text-center" :class="{'col-span-2': $route.fullPath === '/', 'col-span-3': $route.fullPath.includes('/me')}" @click="catShow = true">
          <!-- Choose Cars -->
          <Badge v-if="$route.fullPath === '/'" id="category" :text="catChosen.name" :icon="`${catChosen.icon} text-xl xs:text-2xl`" icon-position="before" />
          <div v-else class="w-full">
            <Button v-if="isUserValidated && !hasUserMembership" text="خرید اشتراک کاربری" template="indigo" icon="fal fa-users" icon-position="before" />
            <Button v-else-if="!isUserValidated" text="تکمیل مشخصات" template="red" icon="fal fa-address-card" icon-position="before" />
            <Button v-else text="ثبت آگهی" icon="fal fa-ad" icon-position="before" />
          </div>
        </div>

        <!-- Open Filters -->
        <div v-if="$route.fullPath === '/'" class="text-center foot-icons cursor-pointer" @click="filShow = true">
          <i class="fal fa-sliders-h text-xl xs:text-2xl" />
        </div>

        <!-- Footer Items -->
        <NuxtLink to="/" class="text-center foot-icons">
          <i class="fal fa-tire text-xl xs:text-2xl" />
        </NuxtLink>

        <NuxtLink v-if="id !== 0" to="/me/1/profile" class="text-center foot-icons">
          <i class="fal fa-user text-xl xs:text-2xl" />
        </NuxtLink>

        <NuxtLink v-else to="/welcome" class="text-center foot-icons">
          <i class="fal fa-sign-in ticker text-xl xs:text-2xl" />
        </NuxtLink>
      </div>
    </footer>

    <!-- Modals: [Categories, Filters, Region] -->
    <SwiperCard v-model="catShow">
      <Categories />
    </SwiperCard>

    <SwiperCard v-model="regShow">
      <Cities />
    </SwiperCard>

    <SwiperCard v-model="filShow">
      <Filters />
    </SwiperCard>
  </div>
</template>

<script>
import user from '@/mixins/user'
import wallet from '@/mixins/wallet'
import layout from '@/mixins/layout'
export default {
  mixins: [user, wallet, layout],
  data: () => ({}),
  head: () => ({
    title: 'بنت | محصولات',
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
    isUserValidated () {
      // eslint-disable-next-line eqeqeq
      if (this.licenseCardValidated == 1 && this.nationalIdValidated == 1 && this.debitCardValidated == 1 && this.shabaa !== null && this.addr !== null && this.city !== null && this.province !== null && this.postCode !== null) {
        return true
      }
      return false
    },
    hasUserMembership () {
      return (this.membershipTitle !== null)
    }
  }
}
</script>
