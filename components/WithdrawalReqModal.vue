<template>
  <div class="overflow-hidden">
    <div class="text-center">
      <h6 class="text-gray-600 text-sm xs:text-lg mb-1">
        درخواست عودت وجه
      </h6>
      <small class="block text-gray-600 text-xs xs:text-sm px-6 sans-number"> حداقل رقم مجاز برای عودت وجه از حساب اصلی، {{ minWithdrawalReqAmount | toMoney }} می‌باشد. </small>
    </div>

    <form @submit.prevent="withdrawal()">
      <div class="mt-10 px-4 xl:px-6">
        <TextInput
          id="tell"
          v-model="cost"
          size="full"
          placeholder="مبلغ درخواستی"
          :length="25"
          styles="sans-number"
          required
          class="mt-5"
        />
        <small v-show="cost !== '' && cost !== 0" class="text-gray-500 text-xs block mt-2 sans-number"> {{ cost | toMoney }} </small>
      </div>

      <div class="fixed bottom-4 w-full bg-white px-4 xl:px-6">
        <Button type="submit" :loading="btnWaiting" :disabled="isNotReadyToSend" text="ارسال درخواست" classes="bg-primary" />
      </div>
    </form>
  </div>
</template>

<script>
import user from '@/mixins/commits/user'
import wallet from '@/mixins/commits/wallet'
import layout from '@/mixins/commits/layout'
import formValidation from '@/mixins/helpers/formValidation'
import filters from '@/mixins/helpers/filters'
export default {
  mixins: [user, wallet, layout, formValidation, filters],
  data: () => ({
      isNotReadyToSend: true,
      btnWaiting: false,
      cost: '',
      minWithdrawalReqAmount: 10000
  }),
  watch: {
    cost (val) {
      this.isNotReadyToSend = (parseInt(val) <= this.minWithdrawalReqAmount || val === '')
    }
  },
  methods: {
    // Layout
    isFormValidated () {
      if (this.hasEngLetter(this.cost) || this.hasFaLetter(this.cost) || this.hasSpecialCharacter(this.cost)) {
        this.$notify({
          type: 'warn',
          title: 'خطای فرم',
          text: 'تنها از اعداد برای مبلغ مورد نظر استفاده کنید.',
          duration: 4000
        })
        return false
      } else if (this.hasEngLetter(this.cost) || this.hasFaLetter(this.cost) || this.hasSpecialCharacter(this.cost)) {
        this.$notify({
          type: 'warn',
          title: 'خطای فرم',
          text: 'لطفا تنها از اعداد استفاده کنید.',
          duration: 4000
        })
        return false
      } else if (parseInt(this.cost) > parseInt(this.availableBalance)) {
        this.$notify({
          type: 'warn',
          title: 'خطای فرم',
          text: 'مبلغ درخواستی شما بیشتر از موجودی حساب شماست.',
          duration: 4000
        })
        return false
      }
      return true
    },
    // API
    withdrawal () {
      if (!this.isFormValidated()) { return }
      this.$axios.patch(`user/profile/withdrawal/${this.id}`, {
        cost: this.cost
      }).then((res) => {
        console.log(res, this.id)
          if (res.data.status) {
            this.$notify({
                type: 'success',
                title: 'درخواست موفق',
                text: 'درخواست شما ثبت شد و در اسرع وقت توسط بخش مالی پیگیری خواهد شد.',
                duration: 4000
            })
            this.withdrawalBalance = parseInt(this.withdrawalBalance) + parseInt(this.cost)
            this.availableBalance = this.availableBalance - this.cost
          } else {
            this.$notify({
                type: 'error',
                title: 'درخواست ناموفق',
                text: 'درخواست شما معتبر نیست و در حال حاضر قادر انجام آن نیستیم.',
                duration: 4000
            })
          }
      }).catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err.response)
          if (err.response.status === 400) {
            this.$notify({
              type: 'error',
              title: 'محدودیت اجرا',
              text: 'مبلغ درخواستی شما بیشتر از موجودی حساب شماست.',
              duration: 4000
            })
          } else {
            this.$notify({
              type: 'error',
              title: 'خطای سرور',
              text: 'خطایی در ارسال درخواست به وجود آمده است؛ لطفا دقایق دیگر امتحان کنید یا با پشتیبانی تماس بگیرید.',
              duration: 4000
            })
          }
      }).finally(() => {
        this.withdrawalModal = false
      })
    }
  }
}
</script>
