<template>
  <div class="px-2 py-4 xs:py-6 xs:px-4 overflow-auto-y">
    <div class="text-center mb-8">
      <h2 class="text-xl">
        جزئیات آگهی
      </h2>
      <small class="block sans-num mt-1 text-gray-400">
        انقضا در:
        {{ adCardInfo.expired_at }}
      </small>
    </div>
    <List title="ویژگی‌ها" icon="fad fa-info-circle text-primary" :data="ad.attrbutes" class="mb-4" />
    <TipCard
      v-if="hasMembership && isVerifiedFinancialConfirmation && IsBuyableByWallet && doWeKnowUser && (availableBalance >= ad.amount)"
      text="امکان خرید از طریق کیف پول فعال است:"
      icon="fad fa-wallet text-gray-900"
    >
      <Button template="text" size="mini" text="خرید" class="custom-btn" @clicked="buyAdUsingWaller(ad)" />
    </TipCard>
    <List title="لجستیک" icon="fad fa-truck-loading text-primary" :data="ad.lagestic" class="mt-4" />

    <div class="w-full fixed bottom-4 left-0 right-0 bg-white px-2 xl:px-3 overflow-hidden">
      <!-- Call to Actions -->
      <div v-if="doWeKnowUser" class="w-full mb-3">
        <Button
          v-if="hasMembership && isVerifiedFinancialConfirmation"
          icon="fal fa-ad"
          size="small"
          text="خرید مستقیم"
          :loading="loading"
          @clicked="buyAd(ad)"
        />
        <Button v-else-if="!hasMembership && isVerifiedFinancialConfirmation" icon="fal fa-users" text="خرید بسته کاربری" template="red" @clicked="goToWalletPage()" />
        <Button
          v-else-if="!isVerifiedFinancialConfirmation && isFilledForm"
          icon="fal fa-clipboard-check"
          text="در انتظار تایید هویت"
          disabled
        />
        <Button v-else-if="!isVerifiedFinancialConfirmation" icon="fal fa-user-shield" text="تکمیل احراز هویت" template="yellow" @clicked="startIdentity(info.id)" />
      </div>
      <!-- Close -->
      <div class="w-full">
        <Button text="بستن" template="bordered" @clicked="close()" />
      </div>
    </div>
  </div>
</template>

<script>
import filters from '@/mixins/helpers/filters'
import user from '@/mixins/commits/user'
import wallet from '@/mixins/commits/wallet'
import layout from '@/mixins/commits/layout'
import data from '@/mixins/commits/data'
import userValidation from '@/mixins/helpers/userValidation'
import walletValidation from '@/mixins/helpers/walletValidation'
import CTOButton from '@/mixins/helpers/CTOButton'
export default {
  mixins: [filters, user, wallet, layout, data, userValidation, walletValidation, CTOButton],
  data: () => ({
    loading: false,
    ad: {
      amount: 0,
      attrbutes: [],
      lagestic: []
    }
  }),
  fetch () {
    this.ad.id = this.adCardInfo.id
    this.ad.userId = this.id
    this.ad.amount = this.adCardInfo.meta.cost
    this.ad.attrbutes = [
      { attr: 'سال تولید', value: this.adCardInfo.meta.tyre_year },
      { attr: 'تعداد لاستیک', value: `${this.adCardInfo.meta.count} تایر` },
      { attr: 'قیمت آگهی', value: this.toMoney(this.adCardInfo.meta.cost) },
      {
        attr: 'توضیحات فروشنده',
        value: (this.adCardInfo.meta.desc !== '' || this.adCardInfo.meta.desc !== null)
        ? this.adCardInfo.meta.desc
        : 'توضیحی ثبت نشده است.'
      }
    ]

    this.ad.lagestic = [
      { attr: 'تعهد ارسال', value: `${this.adCardInfo.meta.shipment_day} روز کاری` },
      { attr: 'تاریخ انقضا', value: this.adCardInfo.expired_at }
    ]
  },
  methods: {
    buyAd (ad) {
      this.loading = true
      this.$axios.post('transaction/zarinpal/checkout', {
        contract_id: ad.id,
        user_id: ad.userId,
        amount: ad.amount,
        desc: 'پرداخت مبلغ ضمانت'
      }).then((res) => {
        window.open(res.data.action, '_self')
      }).catch((err) => {
        console.log(err.response)
        if (err.response.status === 400) {
          this.$notify({
            type: 'error',
            title: 'محدودیت اجرا',
            text: 'این آگهی توسط شخص دیگری خریداری یا رزرو شده است.',
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
        this.loading = false
        this.close()
      })
    },
    buyAdUsingWaller (ad) {
      this.loading = true
      this.$axios.patch('user/contract/buy', {
        contract_id: ad.id,
        user_id: ad.userId,
        amount: ad.amount
      }).then(() => {
        this.availableBalance = this.availableBalance - ad.amount
        this.pendingBalance = this.pendingBalance + ad.amount
        this.$store.commit('DELETE_AD', this.adCardIndex)
        this.$notify({
          type: 'success',
          title: 'عملیات موفقیت آمیز',
          text: 'تبریک! قرارداد شما با این اگهی آغاز شد و مبلغ ضمانت شما به حساب امن حساب بنت در پروفایل کاربری واریز شد.',
          duration: 5500
        })
      }).catch((err) => {
        console.log(err.response)
        if (err.response.status === 400) {
          this.$notify({
            type: 'error',
            title: 'محدودیت اجرا',
            text: 'این آگهی توسط شخص دیگری خریداری یا رزرو شده است.',
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
        this.loading = false
        this.close()
      })
    }
  }
}
</script>
