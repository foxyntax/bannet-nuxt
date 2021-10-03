<template>
  <button class="bannet-btn" :class="classes + ' ' + getSize + ' ' + getTemplate">
    <span v-show="!loading">
      <i v-if="iconPosition === 'before' && icon !== ''" :class="icon" class="ml-1" />
      {{ text }}
      <i v-if="iconPosition === 'after' && icon !== ''" :class="icon" class="mr-1" />
    </span>
    <div v-show="loading" class="spinner">
      <div class="dot1" />
      <div class="dot2" />
    </div>
  </button>
</template>

<script>
export default {
  props: {
    size: {
      required: false,
      type: String,
      default: 'bannet-btn-normal'
    },
    template: {
      required: false,
      type: String,
      default: 'default'
    },
    text: {
      required: true,
      type: String
    },
    classes: {
      required: false,
      type: String,
      default: ''
    },
    loading: {
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
        default: 'before'
    }
  },
  computed: {
    getSize () {
      switch (this.size) {
        case 'mini':
          return 'size-mini'
        default:
          return 'size-normal'
      }
    },
    getTemplate () {
      switch (this.template) {
        case 'text':
          return 'temp-text'
        case 'bordered':
          return 'temp-bordered'
        case 'indego':
          return 'temp-indego'
        case 'red':
          return 'temp-red'
        case 'yellow':
          return 'temp-yellow'
        default:
          return 'temp-default'
      }
    }
  }
}
</script>
