<template>
  <div id="logged-container">
    <Nuxt />
    <footer>
      <div class="grid grid-cols-5 grid-rows-1 gap-1 px-2 py-2">
        <div class="text-center col-span-2" @click="catShow = true">
          <Badge id="category" :text="catChosen.name" :icon="`${catChosen.icon} text-xl xs:text-2xl`" icon-position="before" />
        </div>

        <div class="text-center foot-icons cursor-pointer" @click="filShow = true">
          <i class="fal fa-sliders-h text-xl xs:text-2xl" />
        </div>

        <NuxtLink to="" class="text-center foot-icons">
          <i class="fal fa-tire text-xl xs:text-2xl" />
        </NuxtLink>

        <NuxtLink v-if="id !== 0" to="/profile/:id" class="text-center foot-icons">
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
import layout from '@/mixins/layout'
export default {
  mixins: [user, layout],
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
  })
}
</script>
