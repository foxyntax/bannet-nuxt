<template>
  <div class="uploader">
    <label :for="id">
      <p> {{ title }} </p>
      <div class="upload-zone">
        <i class="fas fa-cloud-upload-alt" />
        <p> {{ placeholder }} </p>
        <small> {{ size | noticeForSize }} </small>
      </div>
    </label>
    <input
      :id="id"
      type="file"
      :multiple="multiple"
      :name="value"
      :required="required"
      @input="emit"
    >
  </div>
</template>

<script>
export default {
	name: 'SelectInput',
  filters: {
    noticeForSize (val) {
      return `حداکثر حجم قابل قبول ${val} مگابایت است`
    }
  },
	props: {
    title: {
			type: String,
			required: false,
      default: ''
		},
		placeholder: {
			type: [String, Number, Object],
			required: false,
			default: 'برای آپلود فایل، لمس کنید.'
		},
    size: {
			type: Number,
			required: false,
			default: 10
		},
		multiple: {
			type: Boolean,
			required: false,
			default: false
		},
    id: {
			type: String,
			required: true
		},
		value: {
			type: [String, Number, Object],
			required: false,
			default: null
		},
    required: {
			type: Boolean,
			required: false,
			default: false
		},
		disabled: {
			type: Boolean,
			required: false,
			default: false
		}
	},
	methods: {
		emit () {
			this.$emit('input', this.value)
		}
	}
}
</script>

<style>

</style>
