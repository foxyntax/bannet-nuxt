<template>
  <div class="tip-card">
    <div class="context">
      <i :class="icon" />
      <small> {{ text }} </small>
    </div>
    <div class="action">
      <small v-if="value !== ''" class="sans-number"> {{ value }} </small>
      <slot class="custom-btn" />
    </div>
  </div>
</template>

<script>
export default {
	props: {
		text: {
			required: true,
			type: String
		},
		icon: {
			required: true,
			type: String
		},
		value: {
			required: false,
			type: String,
			default: ''
		}
	}
}
</script>

<style lang="scss">
.tip-card {
    @apply w-full flex justify-between rounded-lg overflow-hidden px-2 xs:px-3 pt-3 pb-2;
    background: #F9F9F9;

    .context {
        @apply flex-grow;

		i {
			@apply relative;
			top: 2px;
		}
    }

	.custom-btn {
		@apply relative;
		top: -3px;
	}
}
</style>
