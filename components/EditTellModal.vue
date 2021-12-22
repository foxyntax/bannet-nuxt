<template>
  <div class="overflow-hidden">
    <div class="text-center">
      <h6 class="text-gray-600 text-sm xs:text-lg mb-1">
        بروزرسانی شماره همراه
      </h6>
      <small class="block text-gray-600 text-xs xs:text-sm px-6">لطفا شماره جدید به همراه توکن ارسالی به شماره همراه سابق خود را وارد نمایید.</small>
    </div>

    <form @submit.prevent="updateTell()">
      <div class="mt-10 px-4 xl:px-6">
        <TextInput
          id="tell"
          v-model="userTell"
          size="full"
          placeholder="●●●●●●●● 091"
          :length="11"
          styles="sans-number text-center"
          required
          class="mt-5"
        />
        <TextInput
          id="post-code"
          v-model="token"
          size="full"
          placeholder="توکن 5 رقمی"
          :length="5"
          styles="sans-number text-center"
          required
          class="mt-5"
        />
        <TipCard text="تغییر شماره همراه برابر با تغییر مشخصات ورود شماست." icon="fad fa-shield-alt text-gray-900" class="mt-5" />
      </div>

      <div class="fixed bottom-4 w-full bg-white px-4 xl:px-6">
        <Button type="submit" :loading="btnWaiting" text="بروزرسانی شماره همراه" />
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
      isNotReadyToSend: true,
      btnWaiting: false,
      token: '',
      userTell: ''
  }),
  fetch () {
    this.sendToken()
  },
  watch: {
    token (val) {
      this.isNotReadyToSend = (val.length !== 5)
    }
  },
  methods: {
    // Layout
    isFormValidated () {
      if (!this.comparison(this.userTell.length, 11, '=') || this.hasWhiteSpace(this.userTell)) {
        this.$notify({
          type: 'warn',
          title: 'خطای فرم',
          text: 'شماره همراه یازده رقمی خود را کامل و بدون فاصله تایپ کنید.',
          duration: 4000
        })
        return false
      } else if (this.hasEngLetter(this.userTell) || this.hasFaLetter(this.userTell) || this.hasSpecialCharacter(this.userTell)) {
        this.$notify({
          type: 'warn',
          title: 'خطای فرم',
          text: 'تنها از اعداد برای تایپ شماره همراه خود استفاده کنید.',
          duration: 4000
        })
        return false
      } else if (this.isTell(this.userTell)) {
        this.$notify({
          type: 'warn',
          title: 'خطای فرم',
          text: 'ساختار شماره همراه شما نامعتبر است.',
          duration: 4000
        })
        return false
      } else if ((this.hasEngLetter(this.token) || this.hasFaLetter(this.token) || this.hasSpecialCharacter(this.token))) {
        this.$notify({
          type: 'warn',
          title: 'خطای فرم',
          text: 'لطفا تنها از اعداد استفاده کنید.',
          duration: 4000
        })
        return false
      }
      return true
    },
    // API
    sendToken () {
      const hadBeenSentBefore = this.$cookie.get('updateTell') ?? null
      console.log(this.$cookie.get('updateTell'))
      if (hadBeenSentBefore === null) {
        this.$axios.get(`auth/reset/tell/send/id/${this.id}`).then((res) => {
          if (res.data.success) {
            this.$notify({
              type: 'success',
              title: 'ارسال موفق',
              text: 'توکن تغییر شماره همراه برای شما ارسال شد.',
              duration: 4000
            })

            // Set Cookie to deny bad requests
            this.$cookie.set('updateTell', 'sent', { expires: '200s' })
          }
        }).catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err.response)
          this.$notify({
            type: 'error',
            title: 'خطای سرور',
            text: 'خطایی در ارسال پیامک به شماره همراه شما به وجود آمده است؛ لطفا دقایق دیگر امتحان کنید یا با پشتیبانی تماس بگیرید.',
            duration: 4000
          })
        })
      } else {
        this.$notify({
          type: 'warn',
          title: 'محدودیت اجرا',
          text: 'لطفا درخواست خود را دقایقی دیگر امتحان کنید یا از توکنی که دقایقی پیش برایتان ارسال کردیم، استفاده کنید.',
          duration: 4000
        })
      }
    },
    updateTell () {
      if (!this.isFormValidated()) { return }
      this.btnWaiting = true
      this.$axios.patch('auth/reset/tell/change', {
				id: this.id,
				tell: this.userTell,
        token: this.token
			}).then((res) => {
        if (res.data.success) {
          this.$notify({
            type: 'success',
            title: 'تایید شماره جدید',
            text: 'هم‌اکنون میتوانید با شماره همراه جدید، وارد حساب کاربری خود شوید.',
            duration: 2500
          })
          this.$notify({
            type: 'warn',
            title: 'هشدار امنیتی',
            text: 'برای امنیت بهتر، به زودی به صفحه ورود هدایت خواهید شد.',
            duration: 2500
          })
          this.tell = this.userTell

          setTimeout(() => {
            this.$router.push('/welcome')
            this.tellModal = false
          }, 3500)
        }
      }).catch((err) => {
        if (err.response.status === 400) {
          this.$notify({
            type: 'error',
            title: 'محدودیت اجرایی',
            text: 'این شماره قبلا در سیستم به ثبت رسیده است و نمی‌توان از آن استفاده کرد؛ اگر شما مالک این شماره همراه هستید، لطفا با پشتیبانی تماس بگیرید.',
            duration: 4000
          })
        } else if (err.response.status === 401) {
          // eslint-disable-next-line no-console
          console.log(err.response)
          this.$notify({
            type: 'error',
            title: 'خطای امنیتی',
            text: 'توکن ارسالی شما نامعتبر است!',
            duration: 4000
          })
        } else {
          // eslint-disable-next-line no-console
          console.log(err.response)
          this.$notify({
            type: 'error',
            title: 'خطای سرور',
            text: 'خطایی در ارسال پیامک به شماره همراه شما به وجود آمده است؛ لطفا دقایق دیگر امتحان کنید یا با پشتیبانی تماس بگیرید.',
            duration: 4000
          })
        }
      }).finally(() => {
        this.btnWaiting = false
      })
    }
  }
}
</script>
