<template>
  <p
    class="badge sans-number"
    :class="`${classes} ${getTypeClass} ${getColorClass} ${getFontStyle}`"
    @click="$emit('clicked')"
  >
    <i v-show="iconPosition === 'before'" :class="icon + ' ' + getTextColor()" class="ml-1" />
    <span :class="getTextColor()"> {{ text }} </span>
    <i v-show="iconPosition === 'after'" :class="icon + ' ' + getTextColor()" class="mr-1" />
  </p>
</template>

<script>
export default {
  props: {
    text: {
      required: false,
      type: [String, Number],
      default: ''
    },
    type: {
        required: false,
        type: String,
        default: 'default'
    },
    color: {
        required: false,
        type: String,
        default: 'primary'
    },
    faNumber: {
        required: false,
        type: Boolean,
        default: false
    },
    icon: {
      required: false,
      type: String,
      default: ''
    },
    iconPosition: {
        required: false,
        type: String,
        default: 'after'
    },
    classes: {
      required: false,
      type: String,
      default: ''
    }
  },
  computed: {
    getTypeClass () {
      if (this.type === 'big') {
        return 'badge-big'
      } else if (this.type === 'small') {
        return 'badge-small'
      } else {
        return 'badge-mini'
      }
    },
    getColorClass () {
      if (this.color === 'default') {
        return 'badge-default'
      } else if (this.color === 'danger') {
        return 'badge-danger'
      } else if (this.color === 'primary') {
        return 'badge-primary'
      } else if (this.color === 'indego') {
        return 'badge-indego'
      } else {
        return 'bg-' + this.color + '-200'
      }
    },
    getFontStyle () {
      return (this.faNumber) ? 'sans-number' : null
    }
  },
  methods: {
    getTextColor () {
      if (this.color !== ('default' && 'danger' && 'primary')) {
        return 'text-' + this.color + '-500'
      }
      return ''
    }
  }
}
</script>
