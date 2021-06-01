<template>
  <div id="my-ads-tab">
    <div v-if="list.length > 0">
      <ul id="ads">
        <li v-for="(item, index) in list" :key="index" class="card-list">
          <NuxtLink to="">
            <div class="title">
              <div class="cost">
                <p> {{ item.meta.cost | toMoney }} </p>
                <span>برای {{ item.meta.count }} تایر</span>
              </div>
              <small class="date"> {{ item.expired_at }} </small>
            </div>

            <div class="badges">
              <Badge color="primary" icon="fad fa-city" icon-position="before" :text="item.meta.city" classes="inline ml-1" />
              <Badge color="pink" icon="fad fa-truck-loading" icon-position="before" :text="item.meta.shipment_day + ' روز'" classes="inline ml-1" />
              <Badge color="yellow" icon="fad fa-industry" icon-position="before" :text="item.meta.tyre_year" classes="inline ml-1" />
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div v-else>
      <div id="header">
        <ContractIcon class="mx-auto mb-6 gray-filter" />
        <p>هیچ معامله فعالی ندارید!</p>
      </div>
    </div>
  </div>
</template>

<script>
import filters from '@/mixins/filters'
export default {
	mixins: [filters],
  props: {
    list: {
      required: true,
      type: [Object, Array]
    }
  },
	methods: {
		getAvarageScore (scores) {
			const length = scores.length
			let allScores = 0
			scores.forEach((element) => {
				allScores += element.rate
			})
			return allScores / length
		}
	}
}
</script>

<style lang="scss">
#my-ads-tab {
    @apply text-center;

		#header {
			@apply py-8;

			> p {
				@apply sans-medium text-lg;
			}

			> span {
				@apply sans-number text-gray-500;
			}

			.gray-filter {
				filter: grayscale(100);
			}
		}

		#ads {
			@apply px-2 xs:px-3 pb-5;

			.card-list {
				@apply box-shadow rounded-lg my-5 overflow-hidden p-3;

				.title {
					@apply flex justify-between text-right;

					* {
						@apply sans-number;
					}

					.cost {
						> p {
							@apply text-lg;
						}

						> span {
							@apply text-sm text-gray-500;
						}
					}

					.date {
						@apply text-gray-400;
					}
				}

				.badges {
					@apply text-right mt-6;
				}
			}
		}
}
</style>
