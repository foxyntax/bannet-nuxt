<template>
  <div class="wizard">
    <header class="w-full flex justify-end py-2">
      <i class="far fa-arrow-left text-primary text-2xl" />
    </header>
    <article class="mt-8">
      <!-- Avatar & Name & Score -->
      <div class="text-center mb-10">
        <Avatar src="/demo/avatar.jpg" alt="تصویر کاربر" size="80px" class="block mx-auto mb-4" />
        <h2 class="text-xl">
          {{ full_name }}
        </h2>
        <small class="text-gray-500">
          <i class="fas fa-star" />
          <span class="sans-number">
            {{ avg_score }}
          </span>
        </small>
      </div>

      <!-- Summary -->
      <div class="flex justify-around">
        <IconInfo title="آگهی فعال" :subtitle="adCount | showAdCount" icon="fad fa-ad" />
        <IconInfo title="معاملات موفق" :subtitle="successedContract | showSucContract" icon="fad fa-abacus" />
      </div>
      <TipCard text="معامله موفق: اتمام یک معامله در مقام مشتری یا فروشنده!" icon="fad fa-abacus text-gray-900" class="mt-2" />

      <!-- Reviews -->
      <Card id="reviews" main-title="بازخوردها" class="my-12">
        <h3 class="mb-2">
          سوابق طرف قرارداد خود را بشناسید
        </h3>
        <p>بازخوردهای داده شده به هر کاربر در دو موقعیت فروشنده و مشتری، مطابق رنگ بندی زیر آرشیو بندی می‌شوند تا بتوانید در موقعیت های مختلف معامله، نظرات کاربران در مورد یک شخص بررسی کنید:</p>
        <p class="tip">
          <i class="fas fa-circle text-red-500" />
          <span class="text-xs">مشتری</span>
        </p>
        <p class="tip">
          <i class="fas fa-circle text-primary" />
          <span class="text-xs">فروشنده</span>
        </p>

        <ul v-if="reviews.length !== 0" class="mt-5">
          <li
            v-for="(item, index) in reviews"
            :key="index"
            class="hover-1 rounded-lg px-1"
            @click="showDetail(index)"
          >
            <div class="flex justify-between flex-wrap pt-4 pb-1">
              <IconInfo :title="item.sender" :subtitle="item.created_at" :circle-temp="item.is_seller | showCircleTemp" />
              <div class="text-gray-500 mt-3">
                <i class="fas fa-star text-xs" />
                <small class="sans-number"> {{ item.rate }} </small>
              </div>
            </div>
            <small v-show="inDetail === index" class="block text-justify text-xs my-4">
              {{ item.desc }}
            </small>
            <Divider v-if="index !== reviews.length - 1" size="mini mb-2" />
          </li>
        </ul>
        <div v-else class="w-full text-gray-500 text-center mt-5">
          <i class="fad fa-unlink text-4xl" />
          <h3 class="text-sm mt-5">
            بازخوردی برای این کاربر ثبت نشده است
          </h3>
        </div>
      </Card>

      <!-- Availabe Ads -->
      <Card v-if="contract !== []" id="reviews" main-title="اگهی‌های فعال" class="mt-12">
        <h3 class="mb-2">
          کالای مورد نیازتان را خریداری کنید
        </h3>
        <p>آگهی‌های زیر همچنان بدون مشتریست و میتوانید در صورت نیاز، با مقایسه با آگهی های مشابه، آن‌ها را خریداری نمایید.</p>

        <ul class="mt-5">
          <li
            v-for="(item, index) in contract"
            :key="index"
            class="px-1 mt-2 pt-1"
          >
            <div class="flex justify-between flex-wrap pt-4 pb-1">
              <IconInfo :title="item.name" :subtitle="item.count | showTyreCount" icon="fad fa-tire" />
              <NuxtLink :to="`/tyre/${item.id}`" class="text-gray-500 mt-3">
                <i class="far fa-external-link-square text-gray-500 text-lg" />
              </NuxtLink>
            </div>
            <Divider v-if="index !== contract.length - 1" size="mini mb-2" />
          </li>
        </ul>
      </Card>
    </article>
    <footer>
      <Button template="primary" text="ساخت آگهی" class="w-full" />
    </footer>
  </div>
</template>

<script>
import user from '@/mixins/user'
import layout from '@/mixins/layout'
export default {
  filters: {
    showAdCount (ad) {
      return ad + ' آگهی'
    },
    showSucContract (contract) {
      return contract + ' معامله'
    },
    showCircleTemp (pos) {
      // eslint-disable-next-line eqeqeq
      return (pos == 0) ? 'red' : 'primary'
    },
    showTyreCount (tyre) {
      return tyre + ' حلقه'
    }
  },
  mixins: [user, layout],
  layout: 'default',
  data: () => ({
    full_name: 'میلاد محمدی',
    avg_score: 4.7,
    adCount: 5,
    successedContract: 39,
    inDetail: '',
    reviews: [ // you have to fillter all unnecessary reviews before fetching on this
      { to: 1, from: 12, sender: 'عزیز محمدی', is_seller: 1, receiver: 'میلاد محمدی', contract_id: 1, rate: 5, desc: 'یک توضیح مختصر در مورد میلاد', created_at: '6 شهریور ماه 1400' },
      { to: 1, from: 8, sender: 'خادم شریف', is_seller: 0, receiver: 'میلاد محمدی', contract_id: 1, rate: 4.3, desc: 'یک توضیح مختصر در مورد میلاد', created_at: '4 مهر ماه 1400' }
    ],
    contract: [
      { id: 1, name: 'نام کامل لاستیک', count: 15 },
      { id: 2, name: 'نام کامل لاستیک', count: 100 },
      { id: 2, name: 'نام کامل لاستیک', count: 100 }
    ]
  }),
  methods: {
    showDetail (index) {
      this.inDetail = (this.inDetail !== index) ? index : ''
    }
  }
}

  </script>

<style lang="scss">
#reviews {
  p {
    @apply text-justify text-xs;
  }

  .tip {
    @apply mt-2 font-bold;

    i {
      @apply relative;
      top: 1px;
    }
  }
}
</style>
