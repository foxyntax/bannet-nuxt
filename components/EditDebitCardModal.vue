<template>
  <div class="overflow-x-hidden overscroll-y-auto">
    <div class="text-center">
      <h6 class="text-gray-600 text-sm xs:text-lg mb-1">
        بروزرسانی اطلاعات بانکی
      </h6>
      <small class="block text-gray-600 text-xs xs:text-sm px-6">با تغییر مقادیر قبلی میتوانید اطلاعات جدید خود را بروزرسانی نمایید.</small>
    </div>

    <form @submit.prevent="update()">
      <article class="mt-8 px-4 xl:px-6">
        <TextInput
          id="shabaa"
          v-model="shabaa"
          label="شماره شبا:"
          size="full"
          placeholder="IR شماره بدون"
          :length="24"
          styles="sans-number"
          required
          class="mt-8"
        />
        <TextInput
          id="debit-card"
          v-model="debitCardVal"
          label="شماره کارت بانکی:"
          size="full"
          placeholder="شماره 16 رقمی بدون خط یا فاصله"
          :length="16"
          styles="sans-number"
          required
          class="mt-8"
        />
        <Uploader
          id="debit-card-img"
          title="تصویر کارت عابر:"
          :size="4"
          class="w-full mt-8"
          @data="getData"
        />
      </article>

      <div class="fixed bottom-4 w-full bg-white px-4 xl:px-6">
        <Button type="submit" :loading="btnWaiting" text="بروزرسانی اطلاعات" classes="bg-primary" />
      </div>
    </form>
  </div>
</template>

<script>
import user from '@/mixins/commits/user'
import layout from '@/mixins/commits/layout'
import formValidation from '@/mixins/helpers/formValidation'
export default {
  mixins: [user, layout, formValidation],
  data: () => ({
      btnWaiting: false,
      userDebitCardImg: ''
  }),
  methods: {
    // Layout
    getData (file) {
      this.userDebitCardImg = file
    },
    isFinancialFormValidated () {
      if (!this.comparison(this.shabaa.length, 24, '=') || this.hasWhiteSpace(this.shabaa)) {
        this.$notify({
          type: 'warn',
          title: 'خطای فرم',
          text: 'کد شبای بیست و چهار رقمی خود را کامل و بدون فاصله تایپ کنید.',
          duration: 4000
        })
        return false
      } else if (this.hasEngLetter(this.shabaa) || this.hasFaLetter(this.shabaa) || this.hasSpecialCharacter(this.shabaa)) {
        this.$notify({
          type: 'warn',
          title: 'خطای فرم',
          text: 'تنها از اعداد برای تایپ شماره شبا خود استفاده کنید.',
          duration: 4000
        })
        return false
      } else if (this.hasEngLetter(this.debitCardVal) || this.hasFaLetter(this.debitCardVal) || this.hasSpecialCharacter(this.debitCardVal)) {
        this.$notify({
          type: 'warn',
          title: 'خطای فرم',
          text: 'تنها از اعداد برای تایپ شماره کارت خود استفاده کنید.',
          duration: 4000
        })
        return false
      } else if (this.userDebitCardImg === '') {
        this.$notify({
          type: 'warn',
          title: 'خطای فرم',
          text: 'آپلود فایل الزامیست!',
          duration: 4000
        })
        return false
      }
      return true
    },
    // API
    update () {
      if (!this.isFinancialFormValidated()) { return }
      this.btnWaiting = true

      const data = new FormData()
      data.append('shabaa', this.shabaa)
      data.append('debit_card', this.userDebitCardImg)
      data.append('debit_card_value', this.debitCardVal)

      return this.$axios.post(`user/profile/update/${this.id}/financial`, data).then((res) => {
        this.debitCardImg = res.data.debit_card.img

        this.$notify({
          type: 'success',
          title: 'تغییر مشخصات بانکی',
          text: 'مشخصات بانکی شما با موفقیت به روزرسانی شد.',
          duration: 4000
        })
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.response)
        this.$notify({
          type: 'error',
          title: 'خطای سرور',
          text: 'لطفا درخواست خود را دقایقی دیگر امتحان کنید.',
          duration: 4000
        })
      }).finally(() => {
        this.btnWaiting = false
        this.bankModal = false
      })
    }
  }
}
</script>
