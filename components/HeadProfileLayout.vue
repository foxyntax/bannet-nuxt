<template>
  <header id="profile-header" class="sticky bg-white z-50 px-2 pt-2 xs:pt-4 xs:px-4 mb-6 box-shadow">
    <div id="header-row-1" class="w-full flex flex-row justify-between items-center mb-5">
      <NuxtLink to="/me/:id/profile">
        <Avatar src="/demo/avatar.jpg" alt="تصویر کاربر" class="inline-block" />
        <span class="mr-1"> {{ name }} </span>
      </NuxtLink>

      <NuxtLink to="/welcome" class="text-center foot-icons">
        <i class="fal fa-sign-out ticker text-primary text-xl xs:text-2xl" />
      </NuxtLink>
    </div>
    <nav id="profile-nav">
      <NuxtLink to="/me/1/profile">
        پروفایل
      </NuxtLink>
      <NuxtLink to="/me/1/transactions">
        کیف‌پول
      </NuxtLink>
      <NuxtLink to="/me/1/favorites">
        علاقمندی‌ها
      </NuxtLink>
      <NuxtLink to="/me/1/contracts">
        آگهی‌ها
      </NuxtLink>
    </nav>
  </header>
</template>

<script>
import user from '@/mixins/user'
export default {
	mixins: [user]
}
</script>

<style lang="scss">
#profile-header {
	top: -65px;

	nav {
		@apply flex flex-row flex-nowrap justify-between items-center overflow-x-auto overflow-y-hidden bg-white pb-2 xs:pt-1 z-50;
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

		a {
			@apply w-max px-3 pb-1 mx-2;

			&:after {
				@apply bg-gray;
				border-radius: 4px 4px 0 0;
				transition: .15s all ease-in;
			}
		}

		.nuxt-link-active {
			@apply relative;

			&:after  {
				@apply w-2/3 absolute -bottom-2 left-0 right-0 mx-auto bg-primary #{!important};
				content: '';
				height: 3px;
			}
		}
	}

  /* Hide scrollbar for Chrome, Safari and Opera */
  nav::-webkit-scrollbar {
    display: none;
  }
}
</style>
