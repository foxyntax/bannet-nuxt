<template>
  <div>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut fast" mode="out-in" appear>
      <div v-show="value" class="fixed w-full max-m-screen inset-0 bg-opacity-50 bg-gray-900 z-50" />
    </transition>
    <keep-alive>
      <transition enter-active-class="animated slideInUp faster" leave-active-class="animated slideOutDown faster" mode="out-in" appear>
        <div v-if="value" class="swiper-card">
          <div v-hammer:swipe.down="close" class="swip-action" />
          <slot />
        </div>
      </transition>
    </keep-alive>
  </div>
</template>

<script>
export default {
	// eslint-disable-next-line vue/require-prop-types
	props: ['value'],
	methods: {
		close () {
			this.$emit('input', false)
		}
	}
}
</script>
