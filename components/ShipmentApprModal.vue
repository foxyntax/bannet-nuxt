<template>
  <div class="overflow-hidden">
    <div class="text-center">
      <h6 class="text-gray-600 text-sm xs:text-lg mb-1">
        ارسال فیش تاییدیه مرسوله
      </h6>
      <small class="block text-gray-600 text-xs xs:text-sm px-6">با تایید فیش تاییدیه شما توسط واحد بازرسی بنت، نیازی با گرفتن توکن دریافت اجرت نخواهید داشت</small>
    </div>

    <form @submit.prevent="confim()">
      <div class="mt-10 px-4 xl:px-6">
        <Uploader
          id="bill"
          :size="4"
          class="w-full mt-8"
          @data="getData"
        />
      </div>

      <div class="fixed bottom-4 w-full bg-white px-4 xl:px-6">
        <Button type="submit" :loading="btnWaiting" text="ارسال فیش تاییدیه" />
      </div>
    </form>
  </div>
</template>

<script>
import layout from '@/mixins/commits/layout'
import formValidation from '@/mixins/helpers/formValidation'
export default {
  mixins: [layout, formValidation],
  props: {
    contractId: {
      required: true,
      type: [Number, String]
    }
  },
  data: () => ({
    btnWaiting: false,
    bill: ''
  }),
  methods: {
    // Layout
    getData (file) {
      this.bill = file
    },
    // API
    confim () {
      this.btnWaiting = true
      const formData = new FormData()
        formData.append('contract', this.contractId)
        formData.append('bill', this.bill)
      this.$axios.post('user/contract/withdrawal/pending-balance', formData).then(() => {
        this.$emit('confirm')
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.response)
        if (err.response.status === 400) {
          this.$notify({
            type: 'error',
            title: 'محدودیت اجرا',
            text: 'معامله در مرحله ای نیست که انتظار فیش تاییدیه ارسال مرسوله را داشته باشیم!',
            duration: 5000
          }); return
        }
        this.$notify({
          type: 'error',
          title: 'خطای سرور',
          text: 'لطفا درخواست خود را دقایقی دیگر امتحان کنید.',
          duration: 4000
        })
      }).finally(() => {
        this.btnWaiting = false
        this.shipmentConfirmationModal = false
      })
    }
  }
}
</script>
