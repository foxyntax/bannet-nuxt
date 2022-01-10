<template>
  <div id="tyre-ads-tab">
    <div v-if="list.length > 0">
      <div id="header">
        <ContractIcon class="mx-auto mb-6" />
        <p>میانگین قیمت هر تایر</p>
        <span> {{ avarage | toMoney }} </span>
      </div>
      <ul id="ads">
        <li v-for="(item, index) in list" :key="index" class="card-list">
          <div @click="showBuyAd(item, index)">
            <div class="title">
              <div class="cost">
                <p> {{ item.meta.cost | toMoney }} </p>
                <span>برای {{ item.meta.count }} تایر</span>
              </div>
              <small class="date"> {{ item.created_at }} </small>
            </div>

            <div class="badges">
              <Badge color="red" icon="fad fa-city" icon-position="before" :text="item.meta.city" classes="inline ml-1" />
              <Badge color="yellow" icon="fad fa-truck-loading" icon-position="before" :text="item.meta.shipment_day + ' روز'" classes="inline ml-1" />
              <Badge color="primary" icon="fad fa-industry" icon-position="before" :text="item.meta.tyre_year" classes="inline ml-1" />
            </div>
          </div>

          <NuxtLink :to="`/profile/${item.user.id}`" class="user">
            <div>
              <Avatar size="30px" :src="item.user.meta.personal.avatar" :alt="item.user.full_name" class="inline-block" />
              <small class="mr-1 inline-block">{{ item.user.full_name }}</small>
            </div>
            <div class="relative top-1">
              <i class="fal fa-star text-xs" />
              <small>{{ getAvarageScore(item.user.meta.scores) }}</small>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div v-else>
      <div id="header">
        <ContractIcon class="mx-auto mb-6 gray-filter" />
        <p>معامله فعالی پیدا نشد!</p>
      </div>
    </div>
  </div>
</template>

<script>
import filters from '@/mixins/helpers/filters'
import layout from '@/mixins/commits/layout'
export default {
	mixins: [filters, layout],
  props: {
    list: {
      required: true,
      type: [Object, Array]
    },
    avarage: {
        required: true,
        type: [String, Number]
    }
  },
	methods: {
		getAvarageScore (scores) {
			const length = scores.length
			let allScores = 0
			scores.forEach((element) => {
				allScores += element.rate
			})
      const avg = allScores / length
			return avg.toFixed(1)
		},
    showBuyAd (ad, index) {
      this.adCardInfo = ad
      this.adCardIndex = index
      this.adCardShow = true
    }
	}
}
</script>
