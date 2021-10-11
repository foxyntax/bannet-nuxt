<template>
  <div class="pb-48">
    <section class="px-2 xs:px-4 mb-12">
      <div id="wallet-info">
        <h3>
          {{ availableBalance | toMoney }}
        </h3>
        <small>موجودی کیف پول شما</small>
        <div class="icon-information">
          <IconInfo title="موجودی حساب امن" :subtitle="pendingBalance | toMoney" icon="fad fa-wallet" />
          <IconInfo title="مبلغ عودت" :subtitle="withdrawalBalance | toMoney" icon="fad fa-money-check" />
        </div>
      </div>
      <TipCard text="موجودی خود را به حساب بانکی عودت دهید." icon="fad fa-piggy-bank text-gray-900" class="mt-4">
        <Button template="text" size="mini" text="عودت" class="custom-btn" />
      </TipCard>
    </section>

    <Divider size="mini" />

    <section class="px-2 xs:px-4 my-12">
      <Card id="debit-card" main-title="مشخصات بانکی" status="1" :background="creditCard">
        <div class="financial-info">
          <h2 class="text-2xl xs:text-3xl mb-2" style="direction: ltr">
            {{ debitCardVal | showDebitCard }}
          </h2>
          <p class="">
            IR{{ shabaa }}
          </p>
        </div>
      </Card>
      <TipCard text="حساب بانکی شما قابل تغییر است." icon="fad fa-credit-card-blank text-gray-900" class="mt-4 mb-10">
        <Button template="text" size="mini" text="تغییر حساب" class="custom-btn" />
      </TipCard>
    </section>

    <Divider size="mini" />

    <section id="memberships" class="my-12">
      <div class="star-icon">
        <i class="fad fa-star fa-2x" />
      </div>

      <div v-if="membershipTitle !== null" class="summary">
        <h3>
          <span>{{ membershipTitle }}</span>،
          برای شما فعال است
        </h3>
        <small>
          <i class="fas fa-business-time text-gray-800" />
          انقضای این بسته در تاریخ: {{ expired_at }}
        </small>
      </div>

      <div v-else class="summary">
        <h3>یک بسته کاربری خریداری کنید</h3>
        <small class="inline-block mt-2">با خرید یک بسته کاربری میتوانید  <br> به تمام امکانات برنامه دسترسی داشته باشید</small>
      </div>

      <ul class="w-full overflow-auto">
        <li
          v-for="(item, index) in memberships"
          :key="index"
          class="flex justify-between hover-1 px-4 xs:px-6 py-4"
          @click="chooseMembership(index)"
        >
          <div>
            <IconInfo :title="item.title" :subtitle="item.days | showDays" :circle-temp="setColor(index)" class="top-1 relative" />
          </div>
          <i v-if="chosenMembership === index" class="block far fa-check-circle text-xl mt-4" />
          <i v-else class="block far fa-circle-notch text-xl mt-4" />
        </li>
      </ul>

      <div v-if="chosenMembership !== ''" class="text-center px-8 mt-4">
        <Button template="primary" size="mini" :text="getCost | toMoney" icon="fal fa-shopping-bag" class="custom-btn sans-number pb-custom" />
      </div>
    </section>
  </div>
</template>

<script>
import filters from '@/mixins/filters'
import user from '@/mixins/user'
import wallet from '@/mixins/wallet'
import data from '@/mixins/data'
import creditCardImage from '@/assets/imgs/credit-card.png'
export default {
    filters: {
      showDebitCard (val) {
        return val.replace(/\w\w\w\w/g, '$&' + ' ')
      },
      showDays (val) {
        return val + ' روزه'
      }
    },
    mixins: [filters, user, wallet, data],
    layout: 'nav',
    data: () => ({
      creditCard: creditCardImage,
      chosenMembership: ''
    }),
    computed: {
      getCost () {
        return this.memberships[this.chosenMembership].meta.cost
      }
    },
    methods: {
      chooseMembership (index) {
        this.chosenMembership = index
      },
      setColor (index) {
        if (index === 0) {
          return 'primary'
        } else if (index % 2 === 0) {
          return 'red'
        } else if (index % 3 === 0) {
          return 'green'
        } else if (index % 5 === 0) {
          return 'indego'
        } else if (index % 2 === 1) {
          return 'yellow'
        } else {
          return 'primary-half'
        }
      }
    }
}
</script>

<style lang="scss">
#wallet-info {
	@apply w-full pt-5 pb-2;

  > h3 {
    @apply w-full text-2xl sans-number text-center text-gray-600;
  }

  > h3 + small {
    @apply block text-center mt-2 mb-8;
  }

  .icon-information {
    @apply flex justify-between mt-5 px-2 xs:px-4;
  }
}
#debit-card {
  .wrapper {
    height: 220px !important;
  }

  .financial-info {
    @apply absolute text-white text-left px-3;
    bottom: 30px;
    left: 10px;

    * {
      @apply sans-number;
    }
  }
}
#memberships {
  .star-icon {
    @apply w-16 h-16 rounded-lg bg-primary-half text-center mx-auto pt-3;

    > i {
      @apply relative text-primary;
      top: 3px;
    }
  }

  .summary {
    @apply w-full py-6 text-center;

    h3 {
      @apply text-xl;

      span {
        @apply text-primary;
      }
    }

    small {
      @apply sans-number text-gray-500;

      i {
        @apply relative;
        top: 1px;
      }
    }
  }

  .pb-custom {
    padding-bottom: 0.52rem !important;
  }
}

</style>
