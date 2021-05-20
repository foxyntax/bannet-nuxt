<template>
  <div class="tire-card">
    <NuxtLink to="">
      <img :src="tire.src[0]" :alt="tire.name">
      <div class="p-2 xs:p-3">
        <small class="sans-number text-gray-400">
          <i class="fad fa-tire" />
          {{ tire.design_name }}
          <Badge type="small" :text="tire.brand" classes="inline mr-1" />
        </small>
        <h3 class="sans-number text-md text-gray-600 mt-3">
          {{ tire.name }}
        </h3>
      </div>
    </NuxtLink>
    <div class="call-to-action">
      <i class="far fa-bookmark bookmark" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
			required: true,
			type: Object
    },
		index: {
			required: true,
			type: Number
    }
  },
  computed: {
		tire () {
			return this.data.features
		}
  }
}
</script>

<style lang="scss">
.tire-card {
	@apply relative w-full box-shadow rounded-lg my-5 overflow-hidden;

	a {
		@apply z-0;

		img {
			@apply w-full h-auto;
		}

		.fa-tire {
			@apply relative text-gray-400 ml-1;
			top: 1px;
		}
	}

	.call-to-action {
		@apply z-50;

		> * {
			@apply absolute;
		}

		.bookmark {
			@apply text-2xl top-4 right-5;
		}
	}
}
</style>
