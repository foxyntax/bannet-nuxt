<template>
  <ul id="features-tab">
    <li class="feature-list">
      <div>
        <i class="fal fa-globe-americas" />
        <span> کشور سازنده: </span>
      </div>
      <p>{{ list.country }}</p>
    </li>
    <li class="feature-list">
      <div>
        <i class="fal fa-fill-drip" />
        <span> رنگ: </span>
      </div>
      <p>{{ list.color }}</p>
    </li>
    <li class="feature-list">
      <div>
        <i class="fal fa-cogs" />
        <span> قابلیت استفاده در جلو: </span>
      </div>
      <p>{{ list.for_back | isSupported }}</p>
    </li>
    <li class="feature-list">
      <div>
        <i class="fal fa-cogs" />
        <span> قابلیت استفاده در عقب: </span>
      </div>
      <p>{{ list.for_front | isSupported }}</p>
    </li>
    <li class="feature-list">
      <div>
        <i class="fal fa-arrows-h" />
        <span> عرض: </span>
      </div>
      <p>{{ list.width }}cm</p>
    </li>
    <li class="feature-list">
      <div>
        <i class="fal fa-arrows-v" />
        <span> ارتفاع: </span>
      </div>
      <p>{{ list.height }}cm</p>
    </li>
    <li class="feature-list">
      <div>
        <i class="fal fa-arrows-alt" />
        <span> ارتفاع تایر: </span>
      </div>
      <p>{{ list.tire_height }}cm</p>
    </li>
    <li class="feature-list">
      <div>
        <i class="fal fa-life-ring" />
        <span> قطر: </span>
      </div>
      <p>{{ list.diameter }}cm</p>
    </li>
    <li class="feature-list">
      <div>
        <i class="fal fa-tire-rugged" />
        <span> تیوبلس: </span>
      </div>
      <p>{{ list.tubless }}cm</p>
    </li>
    <li class="feature-list">
      <div>
        <i class="fal fa-tachometer-fast" />
        <span> سرعت: </span>
      </div>
      <p>{{ list.speed }}km/h</p>
    </li>
    <li class="feature-list">
      <div>
        <i class="fal fa-tire-pressure-warning" />
        <span> وزن: </span>
      </div>
      <p>{{ list.weight }}kg</p>
    </li>
  </ul>
</template>

<script>
export default {
  filters: {
    isSupported (val) {
      return (val === 1) ? 'دارد' : 'ندارد'
    }
  },
  props: {
    list: {
      required: true,
      type: [Object, Array]
    }
  }
}
</script>

<style lang="scss">
#features-tab {
  @apply w-full;

  .feature-list {
    @apply flex justify-between hover-1 px-2 xs:px-3 py-2 xs:py-3;

    > div > i {
      @apply text-gray-600 relative top-1 text-xl ml-1;
      min-width: 23px;
    }

    > div > i + span {
      @apply font-bold text-gray-600;
    }

    > p {
      @apply sans-number text-gray-600 text-sm pt-1;
    }
  }
}
</style>
