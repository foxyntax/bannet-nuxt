<template>
  <div class="overflow-hidden">
    <h6 class="text-gray-600 text-center text-sm xs:text-lg">
      دسته بندی اصلی تایرها را انتخاب کنید
    </h6>
    <ul class="w-full mt-5">
      <li v-for="(item, index) in catList" :key="index" class="hover-1 px-4 xs:px-6 py-4 xs:py-6" @click="changeCity(item)">
        <i :class="`${item.icon} relative top-1 text-2xl ml-2`" />
        <span> {{ item.name }} </span>
      </li>
    </ul>

    <div class="fixed bottom-4 w-full bg-white px-2 xl:px-3" @click="updateCityContracts">
      <Button text="انتخاب کن" classes="bg-primary" :disabled="!itemIsChosen" />
    </div>
  </div>
</template>

<script>
import layout from '@/mixins/layout'
export default {
  mixins: [layout],
  data: () => ({
    itemIsChosen: false
  }),
  methods: {
    changeCity (item) {
      this.itemIsChosen = true
      this.catChosen = item
    },
    updateCityContracts () {
      this.catShow = false
    }
  }
  // props: {
  //   text: {
  //     required: true,
  //     type: String
  //   },
  //   classes: {
  //     required: true,
  //     type: String
  //   },
  //   loading: {
  //     required: false,
  //     type: Boolean,
  //     default: false
  //   }
  // }
}
</script>
