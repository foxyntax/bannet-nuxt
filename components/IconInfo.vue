<template>
  <div :class="{'icon-info': icon !== '', 'just-info': icon === ''}">
    <div class="icon" :class="getTemplate">
      <i v-if="icon !== ''" :class="icon" />
    </div>
    <div class="text">
      <h3 class="mb-1">
        {{ title }}
      </h3>
      <small> {{ subtitle }} </small>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    },
    subtitle: {
      required: true,
      type: String
    },
    icon: {
      required: false,
      type: String,
      default: ''
    },
    circleTemp: {
      required: false,
      type: [String, Object],
      default: ''
    }
  },
  computed: {
    getTemplate () {
      switch (this.circleTemp) {
        case 'indego':
          return 'bg-indego-500'
        case 'red':
          return 'bg-red-500'
        case 'yellow':
          return 'bg-yellow-500'
        case 'green':
          return 'bg-green-500'
        case 'primary':
          return 'bg-primary'
        default:
          return ''
      }
    }
  }
}
</script>

<style lang="scss">
.icon-info {
  @apply mb-4;

  >div {
    @apply inline-block;
  }

  .icon {
    @apply relative w-8 h-8 rounded-full bg-primary-half text-center pt-2 ml-2 -top-1 overflow-hidden;

    i {
      @apply text-primary;
    }
  }

  .text {
    h3 {
      @apply text-sm;
    }

    small {
      @apply sans-number text-gray-500;
    }
  }
}
.just-info {
  @apply mb-1;

  >div {
    @apply inline-block;
  }

  .icon {
    @apply relative w-4 h-4 rounded-full ml-2 overflow-hidden;
    top: -10px;
  }

  .text {
    h3 {
      @apply text-sm;
    }

    small {
      @apply sans-number text-gray-500;
    }
  }
}
</style>
