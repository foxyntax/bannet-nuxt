<template>
  <div id="logged-container">
    <section id="header"></section>
    <Nuxt />
    <section id="footer">
      <div class="p-3">
        <div class="h-9 xs:h-12 grid grid-cols-5 grid-rows-1 gap-1">
          <div class="text-center col-span-2">
            <Badge text="خودرو سواری" id="category" icon="fal fa-car text-xl xs:text-3xl" iconPosition="before"/>
          </div>
          <div class="text-center foot-icons"><i class="fal fa-sliders-h text-xl xs:text-3xl" /></div>
          <div class="text-center foot-icons"><i class="fal fa-tire text-xl xs:text-3xl" /></div>
          <div class="text-center foot-icons"><i class="fal fa-user text-xl xs:text-3xl" /></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
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

<style lang="scss">
#footer {
  @apply fixed w-full left-0 bottom-0 right-0;
  border-top: 1px solid lighten($default_color, 70%);

  #category {
    @apply text-center cursor-pointer py-2 text-xs xs:text-sm #{!important};

    span {
      @apply relative;
      top: -5px;
    }
  }

  .foot-icons {
    @apply relative text-default-lighten cursor-pointer;
    top: 7px;
  }
}

</style>
