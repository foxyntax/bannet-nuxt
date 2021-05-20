<template>
  <div id="avatar-zone" :class="{'rounded-full': (radius === 'full')}" :style="`width: ${size}; height: ${size}`">
    <img :src="src" :alt="alt">
    <i :class="icon" />
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
      required: true,
      type: String
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

		i {
			@apply relative text-gray-300 z-0;
		}

		img {
			@apply absolute left-0 top-0 bottom-0 right-0 z-50;
		}
}
</style>
