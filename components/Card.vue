<template>
  <section class="card">
    <div v-if="mainTitle !== '' && status !== ''" class="card-title">
      <h2> {{ mainTitle }} </h2>
      <div>
        <span>
          <i v-show="status == 1" class="fas fa-check text-green-500" />
          <i v-show="status == 0" class="fad fa-clock text-gray-500" />
        </span>
        <small :class="{'text-green-500': status == 1, 'text-gray-500': status == 0}"> {{ getStatus }} </small>
      </div>
    </div>

    <div class="wrapper" :style="{ backgroundImage: `url(${background})`}">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    status: {
      required: false,
      type: String,
      default: ''
    },
    mainTitle: {
      required: false,
      type: String,
      default: ''
    },
    background: {
      required: false,
      type: String,
      default: 'none'
    }
  },
  computed: {
    getStatus () {
      // eslint-disable-next-line eqeqeq
      if (this.status == 1) {
        return 'تایید شده'
      } else {
        return 'در انتظار تایید'
      }
    }
  }
}
</script>

<style lang="scss">
.card {

  .card-title {
    @apply flex justify-between px-2 xs:px-3 mb-1;

    span {
      @apply relative;
      top: 1px;
    }

    h2 + div {
      @apply relative -top-1;
    }

    h2, small, i {
      @apply text-xs;
    }

    small {
      @apply sans-medium #{!important};
    }
  }

  .wrapper {
    @apply relative w-full p-2 xs:px-6 xs:pt-6 xs:pb-5 overflow-hidden box-shadow rounded-lg;
    background-origin: border-box;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
}
</style>
