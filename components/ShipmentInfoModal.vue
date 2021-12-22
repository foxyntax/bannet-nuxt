<template>
  <div class="overflow-hidden">
    <div class="text-center">
      <h6 class="text-gray-600 text-sm xs:text-lg mb-1">
        مشاهده آخرین فیش تاییدی ارسالی
      </h6>
      <small class="block text-gray-600 text-xs xs:text-sm px-6">تصویر زیر قابل تغییر نیست و بخشی از آرشیو قرارداد شماست.</small>
    </div>

    <div class="mt-10 px-4 xl:px-6">
      <img v-if="img !== false" :src="`https://sv.banett.ir/uploads${img}`" class="bill-file" alt="bill info">
      <div v-else class="text-center text-gray-600 text-sm">
        <i class="block far fa-unlink text-4xl mb-5" />
        <h4 class="text-lg">
          فیش تاییدیه ارسالی شما در حال حاضر  <br>در دسترس نمی باشد!
        </h4>
      </div>
    </div>

    <div class="fixed bottom-4 w-full bg-white px-4 xl:px-6">
      <Button template="yellow" text="بستن" @clicked="close()" />
    </div>
  </div>
</template>

<script>
import layout from '@/mixins/commits/layout'
import formValidation from '@/mixins/helpers/formValidation'
export default {
  mixins: [layout, formValidation],
  props: {
    img: {
      required: true,
      type: [Boolean, String]
    }
  },
  methods: {
    // Layout
    getData (file) {
      this.bill = file
    },
    close () {
      this.shipmentInfoModal = false
    }
  }
}
</script>

<style lang="scss">
.bill-file {
  @apply w-full overflow-hidden rounded-lg;
  height: 350px;
  object-fit: contain;
}
</style>
