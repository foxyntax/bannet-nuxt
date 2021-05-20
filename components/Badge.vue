<template>
    <p
      class="badge sans-number"
      :class="`${classes} ${getTypeClass} ${getColorClass} ${getFontStyle}`"
    >
      <i v-show="iconPosition == 'before'" :class="icon" class="ml-1" />
      <span> {{ text }} </span>
      <i v-show="iconPosition == 'after'" :class="icon" class="mr-1" />
    </p>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String
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
      } else {
        return 'badge-primary'
      }
    },
    getFontStyle () {
      return (this.faNumber) ? 'sans-number' : null
    }
  }
}
</script>
