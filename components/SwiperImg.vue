<template>
  <div>
    <div id="tyre-img">
      <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster" mode="out-in" appear>
        <!-- eslint-disable-next-line vue/no-use-v-if-with-v-for eslint-disable-next-line vue/max-attributes-per-line -->
        <img v-for="(item, index) in src" v-if="activeIndex === index" :key="item" v-hammer:swipe.left.right="(event)=> newSliderIndex(index, event.type)" :src="item" alt="تایر خودرو">
      </transition>
    </div>
    <div id="slider-dot">
      <div v-for="(item, index) in src" :key="item" :class="{'active-dot': (activeIndex === index)}" @click="newSliderIndex(index)" />
    </div>
  </div>
</template>

<script>
export default {
    props: {
    src: {
      required: true,
      type: [Array, Object]
    }
  },
  data: () => ({
		activeIndex: 0
  }),
	methods: {
		newSliderIndex (index, type = 'exact') {
			if (type === 'exact') {
				this.activeIndex = index
			} else {
				const lastIndex = this.src.length - 1
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
