<template>
  <div class="overflow-x-hidden overflow-y-auto">
    <div class="text-center">
      <h6 class="text-gray-600 text-sm xs:text-lg mb-1">
        تغییر مشخصات آگهی
      </h6>
      <small class="block text-gray-600 text-xs xs:text-sm px-6">مشخصات کلی اگهی خود را تغییر دهید</small>
    </div>

    <form @submit.prevent="updateAd()">
      <div class="mt-10 px-4 xl:px-6">
        <TextInput
          id="year"
          v-model="year"
          label="سال تولید تایر:"
          size="full"
          placeholder="سال تولید تایر"
          :length="4"
          styles="sans-number"
          required
          class="mt-5"
        />
        <TextInput
          id="count"
          v-model="count"
          label="تعداد لاستیک‌ها:"
          size="full"
          placeholder="تعداد تایرها"
          :length="20"
          styles="sans-number"
          required
          class="mt-5"
        />
        <TextInput
          id="shipment"
          v-model="shipment"
          label="تعهد ارسال:"
          size="full"
          placeholder="روز تعهد شده برای ارسال"
          :length="2"
          styles="sans-number"
          required
          class="mt-5"
        />
        <TextInput
          id="shipment"
          v-model="cost"
          label="قیمت آگهی"
          size="full"
          placeholder="قیمت آگهی به تومان"
          :length="20"
          styles="sans-number"
          required
          class="mt-5"
        />
        <TextAreaInput
          id="desc"
          v-model="desc"
          label="آدرس کامل محل کار:"
          size="full"
          placeholder="توضیح مختصر در مورد آگهی"
          styles="sans-number"
          required
          class="mt-5"
        />
      </div>

      <div class="fixed bottom-4 w-full bg-white px-4 xl:px-6">
        <Button type="submit" :loading="btnWaiting" text="بروزرسانی آگهی" />
      </div>
    </form>
  </div>
</template>

<script>
import layout from '@/mixins/commits/layout'
import formValidation from '@/mixins/helpers/formValidation'
import filters from '@/mixins/helpers/filters'
export default {
  mixins: [layout, formValidation, filters],
  props: {
    ad: {
      required: true,
      type: [Object, Array, String]
    }
  },
  data: () => ({
    btnWaiting: false,
    year: '',
    count: '',
    cost: '',
    desc: '',
    shipment: '',
    edited: ''
  }),
  mounted () {
    this.year = this.ad.attrbutes[0].value
    this.count = this.ad.attrbutes[1].value.replace(' حلقه', '')
    this.cost = this.ad.attrbutes[2].value.replace(' تومان', '').replace(/[,]/g, '')
    this.desc = this.ad.attrbutes[3].value
    this.shipment = this.ad.lagestic[0].value.replace(' روز', '')
  },
  methods: {
    // Layout
    isFormValidated () {
      if ((this.hasEngLetter(this.shipment) || this.hasFaLetter(this.shipment) || this.hasSpecialCharacter(this.shipment))) {
        this.$notify({
          type: 'warn',
          title: 'خطای فرم',
          text: 'لطفا تنها از اعداد برای تعداد روزهای تعهد خود استفاده کنید.',
          duration: 4000
        })
        return false
      } else if ((this.hasEngLetter(this.year) || this.hasFaLetter(this.year) || this.hasSpecialCharacter(this.year))) {
        this.$notify({
          type: 'warn',
          title: 'خطای فرم',
          text: 'لطفا تنها از اعداد برای سال تولید تایر خود استفاده کنید.',
          duration: 4000
        })
        return false
      } else if ((this.hasEngLetter(this.count) || this.hasFaLetter(this.count) || this.hasSpecialCharacter(this.count))) {
        this.$notify({
          type: 'warn',
          title: 'خطای فرم',
          text: 'لطفا تنها از اعداد برای تعداد تایرهای آگهی خود استفاده کنید.',
          duration: 4000
        })
        return false
      }
      return true
    },
    // API
    updateAd () {
      if (!this.isFormValidated()) { return }
      this.btnWaiting = true
      this.$axios.patch(`user/contract/update/${this.ad.id}`, {
        count: this.count,
        cost: this.cost,
        tyre_year: this.year,
        shipment_day: this.shipment,
        desc: this.desc
      }).then(() => {
        this.edited = this.ad
        this.edited.attrbutes[0].value = this.year
        this.edited.attrbutes[1].value = this.count + ' حلقه'
        this.edited.attrbutes[2].value = this.toMoney(this.cost)
        this.edited.attrbutes[3].value = this.desc
        this.edited.lagestic[0].value = this.shipment + ' روز'
        this.$emit('doEdit', this.edited)
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.response)
        if (err.response.status === 400) {
          this.$notify({
            type: 'error',
            title: 'محدودیت اجرا',
            text: 'این آگهی قابل ویرایش نیست!',
            duration: 4000
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
        this.adModal = false
      })
    }
  }
}
</script>
