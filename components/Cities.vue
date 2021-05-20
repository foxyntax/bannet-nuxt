<template>
  <div class="overflow-hidden">
    <h6 class="sticky top-2 text-gray-600 text-center text-sm xs:text-lg">
      انتخاب شهر همکاران و شرکاء تجاری شما
    </h6>
    <ul id="city-list" class="w-full overflow-auto mt-5">
      <li v-for="item in regList" :key="item" class="hover-1 px-4 xs:px-6 py-4 xs:py-6" @click="changeCategory(item)">
        <span> {{ item }} </span>
      </li>
    </ul>

    <div class="fixed bottom-4 w-full bg-white px-2 xl:px-3" @click="updateStoreList">
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
  mounted () {
    const winHeight = window.innerHeight
    document.getElementById('city-list').style.height = (winHeight - 167) + 'px'
  },
  methods: {
    changeCategory (item) {
      this.itemIsChosen = true
      this.regChosen = item
    },
    updateStoreList () {
      this.regShow = false
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
