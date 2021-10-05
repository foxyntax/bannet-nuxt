<template>
  <div>
    <p class="head-list">
      <i v-if="icon !== ''" :class="icon" />
      <span class="font-bold mr-1"> {{ title }} </span>
    </p>
    <ul class="w-full overflow-auto attr-list">
      <li
        v-for="(item, index) in data"
        v-show="data !== []"
        :key="index"
        class="flex justify-between flex-wrap px-1 xs:px-2"
      >
        <small class="attr"> {{ item.attr }}: </small>
        <small class="value"> {{ item.value }} </small>
      </li>
      <slot />
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    },
    icon: {
      required: false,
      type: String,
      default: ''
    },
    data: {
      required: false,
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
.head-list {
  @apply w-full pt-4 pb-2 xs:pt-4 xs:pb-2;

  i {
    @apply relative;
    top: 3px;
  }
}
.attr-list {
  small {
    @apply inline-block sans-number py-1 xs:py-2;
  }

  .attr {
    @apply text-gray-900 pl-2;
    min-width: 120px;
  }

  .value {
    @apply text-gray-400;
  }
}
</style>
