<template>
  <div>
    <!-- Header -->
    <section class="px-4 mb-4 xs:mb-16">
      <div class="w-full block text-left mb-5 md:mb-28 py-6">
        <NuxtLink to="/">
          <i class="fal fa-arrow-left text-primary text-2xl" />
        </NuxtLink>
      </div>
      <div class="w-full text-center">
        <h2 class="text-5xl text-default-lighten mb-2 en">
          BANNET
        </h2>
        <h1 class="text-lg text-primary sans-ultra-light">
          فروشـگاه هوشـمند بـَنِت
        </h1>
      </div>
    </section>
    <!-- Before Sending a Token -->
    <section v-if="! hasTokenSent" class="px-4 md:px-6">
      <div class="w-full input-text-area">
        <label for="tell">شماره موبایل:</label>
        <input
          id="tell"
          v-model="tell"
          type="text"
          placeholder="●●●●●●●● 091"
          maxlength="11"
          class="text-center sans-number"
          required
        >
      </div>
      <div class="w-full fixed text-center py-5 px-4 md:px-6 left-0 bottom-0 right-0">
        <a class="block text-default-lighten text-sm mb-5" href="https://bannet.com/roles/" target="self">مطالعه قوانین و مقررات بنت</a>
        <div class="block w-full">
          <Button text="دریافت کد" classes="bg-primary" :loading="waitingForToken" />
        </div>
      </div>
    </section>
    <!-- After Sending a Token -->
    <section v-else class="px-4 xs:px-6 md:px-10">
      <p class="text-xl text-default-lighten sans-medium text-center mb-2">
        کد ارسالی را وارد کنید.
      </p>
      <p class="text-xs text-default-ultraLighten text-center mb-3">
        کد 5 رقمی به شماره شما پیامک شد.
      </p>
      <Badge text="09156284764" class="max-w-max text-center cursor-pointer mx-auto mb-6" icon="far fa-pen-alt" @click="startAgain" />
      <div class="flex justify-center sm:justify-center mb-6 px-5">
        <div class="input-text-area mx-1 user-token">
          <input
            id="tap-4"
            v-model="userToken[4]"
            type="text"
            placeholder="_"
            maxlength="1"
            class="text-center sans-number text-xl"
            tabindex="5"
            required
          >
        </div>
        <div class="input-text-area mx-1 user-token">
          <input
            id="tap-3"
            v-model="userToken[3]"
            type="text"
            placeholder="_"
            maxlength="1"
            class="text-center sans-number text-xl"
            tabindex="4"
            required
            @keyup="autoNextInput('tap-', 3)"
          >
        </div>
        <div class="input-text-area mx-1 user-token">
          <input
            id="tap-2"
            v-model="userToken[2]"
            type="text"
            placeholder="_"
            maxlength="1"
            class="text-center sans-number text-xl"
            tabindex="3"
            required
            @keyup="autoNextInput('tap-', 2)"
          >
        </div>
        <div class="input-text-area mx-1 user-token">
          <input
            id="tap-1"
            v-model="userToken[1]"
            type="text"
            placeholder="_"
            maxlength="1"
            class="text-center sans-number text-xl"
            tabindex="2"
            required
            @keyup="autoNextInput('tap-', 1)"
          >
        </div>
        <div class="input-text-area mx-1 user-token">
          <input
            id="tap-0"
            v-model="userToken[0]"
            type="text"
            placeholder="_"
            maxlength="1"
            class="text-center sans-number text-xl"
            tabindex="11"
            required
            @keyup="autoNextInput('tap-', 0)"
          >
        </div>
      </div>
      <div class="flex justify-between px-7 xs:px-5 sm:px-48 lg:px-16">
        <p class="text-default-ultraLighten text-xs">
          پیامکی دریافت نکرده اید؟
        </p>
        <p class="text-primary text-pointer text-xs sans-medium cursor-pointer">
          ارسال مجدد پیامک
        </p>
      </div>
      <div class="w-full fixed text-center py-5 px-4 md:px-6 left-0 bottom-0 right-0">
        <div class="block w-full">
          <Button text="ورود | ثبت نام" classes="bg-primary" :loading="waitingForToken" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    hasTokenSent: false, // true
    tell: '',
    token: '',
    userToken: [],
    waitingForToken: false
  }),
  head: () => ({
    title: 'بنت | ثبت نام یا ورود',
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
    startAgain () {
      this.token = ''
      this.hasTokenSent = false
    },
    autoNextInput (prefix, index) {
      if (document.getElementById(prefix + index).value.length !== 0) {
        document.getElementById(prefix + (index + 1)).focus()
      }
    }
  }
}
</script>

<style lang="scss">
* {
  width: auto;
}
.user-token, .user-token > input {
  width: 50px;
}
@media (max-width: 320px) {
  .user-token, .user-token > input {
    @apply text-xl #{!important};
    width: 40px !important;
    height: 40px !important;
  }
  .user-token > input {
    @apply pt-1 pb-0 px-0 #{!important};
  }
}
</style>
