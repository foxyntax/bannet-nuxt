<template>
  <div id="tyre-ads-tab">
    <div v-if="list.length > 0">
      <div id="header">
        <ContractIcon class="mx-auto mb-6" />
        <p>میانگین قیمت تایر</p>
        <span> {{ avarage | toMoney }} </span>
      </div>
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

            <div class="user">
              <div>
                <Avatar size="30px" :src="item.users.meta.personal.avatar" :alt="item.users.full_name" class="inline-block" />
                <small class="mr-1 inline-block">{{ item.users.full_name }}</small>
              </div>
              <div class="relative top-1">
                <i class="fal fa-star text-xs" />
                <small>{{ getAvarageScore(item.users.meta.scores) }}</small>
              </div>
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
import filters from '@/mixins/filters'
export default {
	mixins: [filters],
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
			return allScores / length
		}
	}
}
</script>

<style lang="scss">
#tyre-ads-tab {
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
					@apply text-right my-6;
				}

				.user {
					@apply flex justify-between mt-4;
				}
			}
		}
}
</style>
