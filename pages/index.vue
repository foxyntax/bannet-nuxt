<template>
  <section id="store-container">
    <header id="store-header" class="sticky top-0 flex flex-row justify-between items-center bg-white z-50 p-2 xs:p-3">
      <NuxtLink v-if="id !== 0" to="/me/:id/profile">
        <Avatar src="demo/avatar.jpg" alt="تصویر کاربر" class="inline-block" />
      </NuxtLink>

      <NuxtLink v-else tag="button" to="/welcome" class="sign">
        ثبت‌نام / ورود
      </NuxtLink>

      <button class="region-selection" @click="regShow = true">
        <i class="fal fa-map-marker-alt" />
        <span class="text-default"> {{ regChosen }} </span>
      </button>
    </header>

    <!-- Search and Titles -->
    <section>
      <div class="relative w-full mt-2 p-2 xs:p-3">
        <input id="searchbox" type="text" placeholder="جست‌وجو تایر" class="default-text-input pl-2 pr-10">
        <label for="searchbox" @click="searchTires">
          <i class="far fa-search text-gray-400" />
        </label>
      </div>

      <div class="flex flex-row justify-between divider-b mt-3 px-2 xs:px-3 pb-5">
        <h1> {{ chosenCategory }} </h1>
        <small class="sans-number text-gray-400"> {{ countTires | AddTextTire }} </small>
      </div>
    </section>

    <!-- Goods [Tires] -->
    <article class="p-2 xs:p-3 mb-12">
      <TyreCard v-for="(item, index) in tireList" :key="index" :data="item" :index="index" />
    </article>
  </section>
</template>

<script>
import user from '@/mixins/user'
import layout from '@/mixins/layout'
export default {
  filters: {
    AddTextTire (val) {
      return val + ' تایر'
    }
  },
  mixins: [user, layout],
  layout: 'nav',
  data: () => ({
    chosenCategory: 'تایر خودرو سواری',
    countTires: 538,
    limit: 10,
    offset: 0,
    get_filters: 1,
    tireList: []
  }),
  fetch () {
    this.render_products()
  },
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
  mounted () {
    window.addEventListener('scroll', this.toggleShadow)
  },
  destroyed () {
    window.removeEventListener('scroll', this.toggleShadow)
  },
  methods: {
    searchTires () {

    },
    toggleShadow () {
      const el = document.getElementById('store-header')
      if (window.scrollY > 25) {
        el.classList.add('box-shadow')
      } else if (window.scrollY <= 25 && el.classList.contains('box-shadow')) {
        el.classList.remove('box-shadow')
      }
    },
    render_products () {
      this.$axios.get(`user/store/fetch/product/${this.offset}/${this.limit}/${this.get_filters}?full&type=1`).then((res) => {
        this.tireList = res.data.body.products
      }).catch((err) => {
        console.log(err.reponse)
      })
    }
  }
}
</script>

<style lang="scss">
#store-container {
  @apply relative;
  z-index: 0
}

#store-header {
  > button {
    @apply rounded-md px-6;
    transition: .3s all ease;
  }

  .region-selection {
    @apply primary-shadow;
    padding-top: 7px;
    padding-bottom: 6px;

    > i {
      @apply relative text-default text-sm ml-1;
      top: 2px;
    }

    &:hover > * {
      @apply text-primary;
    }
  }

  .sign {
    @apply bg-primary text-white;
    padding-top: 8px;
    padding-bottom: 5px;
  }
}

</style>
