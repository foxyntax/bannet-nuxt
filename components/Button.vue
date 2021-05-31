<template>
  <button class="bannet-btn" :class="classes">
    <span v-show="!loading">
      <i v-if="iconPosition === 'before'" :class="icon" class="ml-1" />
      {{ text }}
      <i v-if="iconPosition === 'after'" :class="icon" class="mr-1" />
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
    text: {
      required: true,
      type: String
    },
    classes: {
      required: true,
      type: String
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
  }
}
</script>
