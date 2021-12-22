<template>
  <div class="overflow-hidden">
    <div class="text-center">
      <h6 class="text-gray-600 text-sm xs:text-lg mb-1">
        تغییر مشخصات آگهی
      </h6>
      <small class="block text-gray-600 text-xs xs:text-sm px-6">مشخصات کلی اگهی خود را تغییر دهید</small>
    </div>

    <form @submit.prevent="withdrawal()">
      <div class="mt-10 px-4 xl:px-6">
        <TextInput
          id="year"
          v-model="token"
          label="توکن آزادسازی وجه"
          size="full"
          placeholder="توکن 5 رقمی"
          :length="5"
          styles="sans-number"
          required
          class="mt-5"
        />
      </div>

      <div class="fixed bottom-4 w-full bg-white px-4 xl:px-6">
        <Button type="submit" :loading="btnWaiting" text="دریافت اجرت" />
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
    userId: {
      required: true,
      type: [Number, String]
    },
    contractId: {
      required: true,
      type: [Number, String]
    }
  },
  data: () => ({
    btnWaiting: false,
    token: ''
  }),
  methods: {
    // Layout
    isFormValidated () {
      if (this.hasEngLetter(this.token) || this.hasFaLetter(this.token) || this.hasSpecialCharacter(this.token)) {
        this.$notify({
          type: 'warn',
          title: 'خطای فرم',
          text: 'لطفا تنها از اعداد برای تعداد روزهای تعهد خود استفاده کنید.',
          duration: 4000
        })
        return false
      } else if (!this.hasValidatedLength(this.token, 5)) {
        this.$notify({
          type: 'warn',
          title: 'خطای فرم',
          text: 'لطفا توکن درخواستی را به طور کامل تایپ کنید',
          duration: 4000
        })
        return false
      }
      return true
    },
    // API
    withdrawal () {
      if (!this.isFormValidated()) { return }
      this.btnWaiting = true
      this.$axios.post('user/contract/withdrawal/pending-balance', {
        user_id: this.userId,
        contract_id: this.contractId,
        token: this.token
      }).then(() => {
        this.$emit('doWithdrawal')
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.response)
        if (err.response.status === 400) {
          this.$notify({
            type: 'error',
            title: 'محدودیت اجرا',
            text: 'در حال حاضر توکنی برای دریافت اجرت از طرف خریدار مشخص نشده است یا توکن ارسالی صحیح نیست!',
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
        this.withdrawalModal = false
      })
    }
  }
}
</script>
