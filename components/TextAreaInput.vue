<template>
  <div class="input-text-area" :class="getSize">
    <label :for="id">{{ label }}</label>
    <textarea
      :id="id"
      :name="value"
      type="text"
      :placeholder="placeholder"
      :maxlength="length"
      :class="styles"
      :required="required"
      @input="emit"
    />
  </div>
</template>

<script>
export default {
	name: 'TextInput',
	props: {
    size: {
			type: String,
			required: false,
			default: ''
		},
		placeholder: {
			type: String,
			required: false,
			default: 'مقدار صحیح را وارد نمایید'
		},
    label: {
			type: String,
			required: true
		},
		id: {
			type: String,
			required: true
		},
		required: {
			type: Boolean,
			required: false,
			default: false
		},
    length: {
      type: Number,
      required: false,
      default: 9999
    },
		styles: {
			type: String,
			required: false,
			default: ''
		},
    value: {
      type: [String, Number],
			required: false,
			default: ''
    }
	},
  computed: {
    getSize () {
      switch (this.size) {
        case 'full':
          return 'w-full'
        case 'half':
          return 'w-1/2'
        default:
          return ''
      }
    }
  },
	methods: {
		emit () {
			this.$emit('input', this.value)
		}
	}
}
</script>
