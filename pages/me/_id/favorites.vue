<template>
  <div class="px-2 xs:px-4 mb-12">
    <div v-if="tyreList.length !== 0">
      <TyreCard v-for="(item, index) in tyreList" :key="index" :data="item" :index="index" />
      <div class="text-center mx-auto">
        <Button template="text" text="نمایش بیشتر" class="my-5" />
      </div>
    </div>
    <div v-else class="text-center mx-auto mt-12">
      <i class="fad fa-tire-flat fa-4x text-gray-300" />
      <h3 class="text-lg text-gray-600 mt-5">هنوز هیچ تایری را به لیست  <br> علاقمندی های خود اضافه نکرده‌اید.</h3>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'nav',
  data: () => ({
    tyreList: []
  })
}
</script>
