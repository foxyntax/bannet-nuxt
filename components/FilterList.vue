<template>
  <div>
    <p class="w-full flex justify-between hover-1 px-4 xs:px-6 py-4 xs:py-6" @click="expanded = !expanded">
      <span> {{ title }} </span>
      <i :class="{'fa-angle-down': !expanded, 'fa-angle-up': expanded}" class="fal relative top-0 text-2xl ml-2" />
    </p>
    <ul v-show="expanded" class="w-full overflow-auto divider-xs-b">
      <li
        v-for="(item, index) in list"
        :key="index"
        class="hover-1 px-4 xs:px-6 py-4 xs:py-6"
        :class="{'chosen-item': (item === value)}"
        @click="updateFilterItem(item)"
      >
        {{ item }}
      </li>
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
    list: {
      required: true,
      type: [Array, Object]
    },
    value: {
      required: false,
      type: [String, Number, Array, Object],
      default: ''
    }
  },
  data: () => ({
    expanded: false
  }),
  methods: {
    updateFilterItem (item) {
      this.$emit('input', item)
    }
  }
}
</script>
