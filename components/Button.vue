<template>
  <button class="bannet-btn" :class="classes">
    <span v-show="!loading">{{ text }}</span>
    <div class="spinner" v-show="loading">
      <div class="dot1"></div>
      <div class="dot2"></div>
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
    }
  }
}
</script>
