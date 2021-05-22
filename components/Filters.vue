<template>
  <div class="overflow-hidden">
    <h6 class="text-gray-600 text-center text-sm xs:text-lg">
      مشخصات کلی تایر را انتخاب کنید:
    </h6>
    <section id="filter-list" class="mt-5 overflow-auto">
      <!-- Brand -->
      <CollapsedList v-model="filBrand" :list="filBrandList" title="برند تایر" />
      <!-- Width -->
      <CollapsedList v-model="filWidth" :list="filWidthList" title="عرض تایر" />
      <!-- Weight -->
      <CollapsedList v-model="filWeight" :list="filWeightList" title="وزن تایر" />
      <!-- Height -->
      <CollapsedList v-model="filHeight" :list="filHeightList" title="ارتفاع کل تایر" />
      <!-- TireHeight -->
      <CollapsedList v-model="filTireHeight" :list="filTireHeightList" title="ارتفاع تایر" />
      <!-- filForBack & filForFront -->
      <ul class="w-full divider-t">
        <li
          class="hover-1 px-4 xs:px-6 py-4 xs:py-6"
          :class="{'chosen-item': (filForBack !== null)}"
          @click="filForBack = (filForBack) ? null : true"
        >
          استفاده در محور عقب
        </li>
        <li
          class="hover-1 px-4 xs:px-6 py-4 xs:py-6"
          :class="{'chosen-item': (filForFront !== null)}"
          @click="filForFront = (filForFront) ? null : true"
        >
          استفاده از محور جلو
        </li>
      </ul>
    </section>

    <div class="fixed bottom-4 w-full bg-white px-2 xl:px-3">
      <div class="flex h-10 justify-start flew-nowrap overflow-x-auto mb-3">
        <div v-if="filBrand !== null" class="min-w-max mr-2" @click="filBrand = null">
          <Badge :text="`برند: ${filBrand}`" icon="fal fa-times" icon-position="before" />
        </div>
        <div v-if="filWidth !== null" class="min-w-max mr-2" @click="filWidth = null">
          <Badge :text="`عرض: ${filWidth}`" icon="fal fa-times" icon-position="before" />
        </div>
        <div v-if="filWeight !== null" class="min-w-max mr-2" @click="filWeight = null">
          <Badge :text="`وزن: ${filWeight}`" icon="fal fa-times" icon-position="before" />
        </div>
        <div v-if="filHeight !== null" class="min-w-max mr-2" @click="filHeight = null">
          <Badge :text="`ارتفاع کل: ${filHeight}`" icon="fal fa-times" icon-position="before" />
        </div>
        <div v-if="filTireHeight !== null" class="min-w-max mr-2" @click="filTireHeight = null">
          <Badge :text="`ارتفاع: ${filTireHeight}`" icon="fal fa-times" icon-position="before" />
        </div>
        <div v-if="filForBack !== null" class="min-w-max mr-2" @click="filForBack = null">
          <Badge text="برای محور عقب" icon="fal fa-times" icon-position="before" />
        </div>
        <div v-if="filForFront !== null" class="min-w-max mr-2" @click="filForFront = null">
          <Badge text="برای محور جلو" icon="fal fa-times" icon-position="before" />
        </div>
      </div>
      <div class="w-full" @click="updateFilters">
        <Button text="انتخاب کن" classes="bg-primary" />
      </div>
    </div>
  </div>
</template>

<script>
import layout from '@/mixins/layout'
export default {
  mixins: [layout],
  data: () => ({
    itemIsChosen: false,
    brandExpanded: false,
    widthExpanded: false
  }),
  mounted () {
    const winHeight = window.innerHeight
    document.getElementById('filter-list').style.height = (winHeight - 220) + 'px'
  },
  methods: {
    updateFilters () {
      this.filShow = false
    }
  }
}
</script>
