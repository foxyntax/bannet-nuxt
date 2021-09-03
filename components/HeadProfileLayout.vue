<template>
  <header id="profile-header" class="sticky bg-white z-50 px-2 pt-2 xs:pt-3 xs:px-3 mb-6 box-shadow">
    <div id="header-row-1" class="w-full flex flex-row justify-between items-center mb-5">
      <NuxtLink to="/me/:id/profile">
        <Avatar src="/demo/avatar.jpg" alt="تصویر کاربر" class="inline-block" />
        <span class="mr-1"> {{ name }} </span>
      </NuxtLink>
    </div>
    <nav id="profile-nav">
      <NuxtLink to="/me/1/profile">
        پروفایل
      </NuxtLink>
      <NuxtLink to="/me/1/favorites">
        علاقمندی‌ها
      </NuxtLink>
      <NuxtLink to="/me/1/contracts">
        آگهی‌ها
      </NuxtLink>
      <NuxtLink to="/me/1/transactions">
        تراکنش‌ها
      </NuxtLink>
      <NuxtLink to="/me/1/transactions">
        کیف‌پول
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
		@apply flex flex-row flex-nowrap justify-between items-center overflow-x-auto overflow-y-hidden bg-white pt-2 xs:pt-3 z-50;

		a {
			@apply w-max px-2 pb-1 mx-1;

			&:after {
				@apply bg-gray;
				border-radius: 2px 2px 0 0;
				transition: .15s all ease-in;
			}
		}

		.nuxt-link-active {
			@apply relative;

			&:after  {
				@apply w-full absolute bottom-0 left-0 right-0 mx-auto bg-primary #{!important};
				content: '';
				height: 3px;
			}
		}
	}
}
</style>
