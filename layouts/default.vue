<template>
  <div id="layout">
    <!-- Mobile Header -->
    <header>
      <div>
        <img src="/gemnote-logo.png" alt="Gemnote logo">

        <div class="menu-icon" @click="showMobileNav = !showMobileNav">
          <div class="bar-1"></div>
          <div class="bar-2"></div>
          <div class="bar-3"></div>
        </div>
      </div>
    </header>

    <div class="w-full flex justify-between">
      <!-- Asider -->
      <transition enter-active-class="animated slideInLeft fast" mode="out-in" appear>
        <aside :class="{ 'aside-for-mobile': showMobileNav }">
          <div>
            <header>
              <img src="/gemnote-logo.png" alt="Gemnote logo">
              <h3>{{ $store.state.user.firstName + ' ' + $store.state.user.lastName }}</h3>
            </header>

            <nav>
              <ul>
                <li v-for="(item, index) in navLinks" :key="index">
                  <NuxtLink :to="item.url"> {{ item.name }} </NuxtLink>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </transition>

      <section>
        <Nuxt />
      </section>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    showMobileNav (status) {
      // Stop Scrolling when mini aside bar is being shown
      (status === true)
        ? document.getElementsByTagName('BODY')[0].classList.add('overflow-hidden')
        : document.getElementsByTagName('BODY')[0].classList.remove('overflow-hidden')
    }
  },
  data: () => ({
    showMobileNav: false,
    navLinks: [
      { name: 'Dashboard', url: '/' },
      { name: 'Orders', url: '/orders' },
      { name: 'Send a gifts', url: '/sending-gift' },
      { name: 'Users', url: '/users' },
      { name: 'Integrations', url: '/integrations' },
      { name: 'Settings', url: '/settings' },
      { name: 'Logout', url: '/logout' }
    ]
  })
}
</script>

<style lang="scss">
// Start Sass from External resources
#layout {}
</style>
