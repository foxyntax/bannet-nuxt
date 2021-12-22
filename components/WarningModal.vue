<template>
  <div class="overflow-hidden">
    <div class="text-center">
      <h6 class="text-gray-600 text-sm xs:text-lg mb-1">
        {{ title }}
      </h6>
      <small class="block text-gray-600 text-xs xs:text-sm px-6">{{ text }}</small>
    </div>

    <form @submit.prevent="remove()">
      <div class="fixed bottom-4 w-full bg-white px-4 xl:px-6">
        <div class="flex justify-center w-full">
          <Button classes="ml-2" type="submit" text="حذف آگهی" template="red" />
          <Button classes="mr-2" text="پشیمون شدم" template="bordered" @clicked="close()" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import layout from '@/mixins/commits/layout'
export default {
  mixins: [layout],
	// eslint-disable-next-line vue/require-prop-types
	props: ['value', 'title', 'text'],
	methods: {
		close () {
			this.warningModal = false
		},
    remove () {
      this.$emit('doRemove', true)
      this.close()
    }
	}
}
</script>
