<template>
  <div class="img-grid">
    <div v-for="(item, index) in data" :key="index" class="img-wrapper">
      <div class="img-mask"></div>
      <img :src="item.src" :alt="item.alt">
      <NuxtLink :to="item.url" class="img-link">
        <div class="img-title-wrapper">
            <h4>{{ item.name }}</h4>
        </div>
      </NuxtLink>
    </div>

    <div class="show-more-grid" v-show="hiddenItems != 0">
      <img src="/brand_gem.png" alt="show more">
      <NuxtLink :to="showMoreUrl" class="title-wrapper">
        <p class="before-hover">You also have {{ hiddenItems }} trend gifts!</p>
        <p class="after-hover">See more ...</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      required: true,
      type: Object
    },
    showMoreUrl: {
      required: true,
      type: String
    },
    hiddenItems: {
      required: false,
      type: [String, Number],
      default: 0
    }
  }
}
</script>
