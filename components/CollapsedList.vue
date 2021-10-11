<template>
  <div>
    <p class="w-full flex justify-between hover-1 px-4 xs:px-6 py-4 xs:py-6" @click="expanded = !expanded">
      <span> {{ title }} </span>
      <i :class="{'fa-angle-down': !expanded, 'fa-angle-up': expanded}" class="fal relative top-0 text-2xl ml-2" />
    </p>
    <ul v-show="expanded" class="w-full overflow-auto divider-xs-b">
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
    }
  },
  data: () => ({
    expanded: false
  })
}
</script>
