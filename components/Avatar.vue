<template>
  <div class="overflow-hidden">
    <div id="avatar-zone" :class="{'rounded-full': (radius === 'full')}" :style="`width: ${size}; height: ${size}`">
      <img v-show="src !== null && src !== ''" :src="getSrc" :alt="alt">
      <i v-show="src === null || src === ''" :class="icon" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
		size: {
			required: false,
			type: String,
			default: '45px'
		},
    src: {
      required: false,
      type: [String, Boolean],
      default: ''
    },
    alt: {
        required: false,
        type: String,
        default: 'default'
    },
    radius: {
        required: false,
        type: [String, Number],
        default: 'full'
    },
    icon: {
      required: false,
      type: String,
      default: 'fas fa-user fa-2x top-1'
    }
  },
  computed: {
    getSrc () {
      if (this.src === '' || this.src === false) {
        return ''
      } else {
        return process.env.assets + this.src
      }
    }
  },
	mounted () {
		if (this.radius !== 'full') {
			document.getElementById('avatar-zone').style.borderRadius = this.radius + 'px'
		}
	}
}
</script>

<style lang="scss">
#avatar-zone {
    @apply relative text-center align-middle bg-gray-100 overflow-hidden;
    display: flex;
    justify-content: center;
    align-items: center;

		i {
			@apply text-gray-300;
      flex-shrink: 0;
		}

		img {
			@apply absolute left-0 top-0 bottom-0 right-0 z-50;
		}
}
</style>
