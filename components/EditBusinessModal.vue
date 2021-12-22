<template>
  <div class="overflow-x-hidden overscroll-y-auto">
    <div class="text-center">
      <h6 class="text-gray-600 text-sm xs:text-lg mb-1">
        بروزرسانی اطلاعات تماس کسب و کار
      </h6>
      <small class="block text-gray-600 text-xs xs:text-sm px-6">با تغییر مقادیر قبلی میتوانید اطلاعات جدید خود را بروزرسانی نمایید.</small>
    </div>

    <form @submit.prevent="update()">
      <article class="mt-8 px-4 xl:px-6">
        <label for="provinces" class="label">نام استان:</label>
        <SelectInput
          id="provinces"
          v-model="userProvince"
          :lists-array="provinces"
          placeholder="نام استان خود را انتخاب کنید"
        />
        <label for="provinces" class="label mt-8">نام شهر:</label>
        <SelectInput
          id="provinces"
          v-model="userCity"
          :lists-array="cities[userProvince]"
          :disabled="(userProvince === -1)"
          placeholder="نام شهر خود را انتخاب کنید"
        />
        <TextInput
          id="post-code"
          v-model="postCode"
          label="کد پستی ده رقمی:"
          size="full"
          :length="10"
          placeholder="مثال: 1234567890"
          styles="sans-number"
          required
          class="mt-8"
        />
        <TextInput
          id="phone"
          v-model="phone"
          label="شماره تماس محل کار (به همراه کد شهر):"
          size="full"
          :length="11"
          placeholder="مثال: 02122331122"
          styles="sans-number"
          required
          class="mt-8"
        />
        <TextAreaInput
          id="full-addr"
          v-model="addr"
          label="آدرس کامل محل کار:"
          size="full"
          placeholder="مثال: بلوار خزائی، انتهای عبداللهی 7، پلاک 56"
          styles="sans-number"
          required
          class="mt-8"
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
      userProvince: -1,
      userCity: ''
  }),
  methods: {
    // Layout
    isPersonalFormValidated () {
      if (!this.comparison(this.postCode.length, 10, '=') || this.hasWhiteSpace(this.postCode)) {
        this.$notify({
          type: 'warn',
          title: 'خطای فرم',
          text: 'کد پستی ده رقمی خود را کامل و بدون فاصله تایپ کنید.',
          duration: 4000
        })
        return false
      } else if (this.hasEngLetter(this.postCode) || this.hasFaLetter(this.postCode) || this.hasSpecialCharacter(this.postCode)) {
        this.$notify({
          type: 'warn',
          title: 'خطای فرم',
          text: 'تنها از اعداد برای تایپ کد پستی محل کار خود استفاده کنید.',
          duration: 4000
        })
        return false
      } else if (this.hasEngLetter(this.phone) || this.hasFaLetter(this.phone) || this.hasSpecialCharacter(this.phone)) {
        this.$notify({
          type: 'warn',
          title: 'خطای فرم',
          text: 'تنها از اعداد برای تایپ شماره ثابت محل کار خود استفاده کنید.',
          duration: 4000
        })
        return false
      } else if (!this.comparison(this.phone.length, 11, '=') || this.hasWhiteSpace(this.phone)) {
        this.$notify({
          type: 'warn',
          title: 'خطای فرم',
          text: 'شماره ثابت خود را کامل و به همراه کد استان وارد نمایید.',
          duration: 4000
        })
        return false
      } else if (this.hasEngLetter(this.addr)) {
        this.$notify({
          type: 'warn',
          title: 'خطای فرم',
          text: 'استفاده از حروف انگلیسی در آدرس مجاز نیست.',
          duration: 4000
        })
        return false
      } else if (this.userProvince === -1 || this.userCity === '') {
        this.$notify({
          type: 'warn',
          title: 'خطای فرم',
          text: 'ارسال اطلاعات استان و شهر الزامیست.',
          duration: 4000
        })
        return false
      }
      return true
    },
    update () {
      if (!this.isPersonalFormValidated()) { return }
      const data = new FormData()
      data.append('province', this.provinces[this.userProvince])
      data.append('city', this.cities[this.userProvince][this.userCity])
      data.append('postal_code', this.postCode)
      data.append('phone', this.phone)
      data.append('address', this.addr)

      this.$axios.post(`user/profile/update/${this.id}/personal`, data).then((res) => {
        this.province = res.data.province
        this.city = res.data.city
        this.$notify({
          type: 'success',
          title: 'تغییر مشخصات کسب و کار',
          text: 'مشخصات کسب و کار شما با موفقیت به روزرسانی شد.',
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
        this.businessModal = false
      })
    }
  }
}
</script>
