<template>
  <div class="show-steps">
    <div v-for="item, index in steps" :key="index">
      <div class="info">
        <i :class="icon + ' ' + getColor" />
        <p> {{ item }} </p>
      </div>

      <div v-if="index !== steps.length - 1" class="space" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    steps: {
      required: true,
      type: Array
    },
    color: {
      required: false,
      type: String,
      default: 'default'
    },
    icon: {
        required: false,
        type: String,
        default: 'fas fa-dot-circle'
    }
  },
  computed: {
    getColor () {
      switch (this.color) {
        case 'primary':
          return 'text-primary'
        case 'red':
          return 'text-red-500'
        case 'indego':
          return 'text-indego-500'
        case 'yellow':
          return 'text-yellow-500'
        default:
          return 'text-primary'
      }
    }
  }
}
</script>

<style lang="scss">
.show-steps {
  > div {
    @apply my-1;
  }

  .info > i {
    @apply relative text-xl;
    top: 4px;
  }

  .info > p {
    @apply inline-block sans-medium text-gray-700 mr-1;
  }

  .space {
    @apply relative;
    height: 55px;
    border-style: dashed;
    border-right-width: 2px;
    margin-right: 9px;
    top: 4px;
  }
}
</style>
