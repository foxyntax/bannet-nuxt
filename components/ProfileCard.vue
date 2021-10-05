<template>
  <section class="profile-card">
    <div class="card-title">
      <h2> {{ mainTitle }} </h2>
      <div>
        <span>
          <i v-show="status == 1" class="fas fa-check text-green-500" />
          <i v-show="status == 0" class="fad fa-clock text-gray-500" />
        </span>
        <small :class="{'text-green-500': status == 1, 'text-gray-500': status == 0}"> {{ getStatus }} </small>
      </div>
    </div>
    <div class="wrapper">
      <div class="header" @click="toggleCollapsed">
        <div class="text">
          <div>
            <i class="text-primary text-4xl" :class="headIcon" />
          </div>
          <div class="mr-2">
            <h3>{{ headTitle }}</h3>
            <small> {{ headSubtitle }} </small>
          </div>
        </div>
        <div class="icon">
          <i :class="{'fa-angle-down' : collapsed, 'fa-angle-up': !collapsed}" class="fal" />
        </div>
      </div>
      <div v-show="!collapsed" class="body">
        <div class="context">
          <slot name="context" />
        </div>
        <div class="actions">
          <slot name="actions" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    status: {
      required: true,
      type: String
    },
    mainTitle: {
      required: true,
      type: String
    },
    headIcon: {
      required: true,
      type: String
    },
    headTitle: {
      required: true,
      type: String
    },
    headSubtitle: {
      required: true,
      type: String
    }
  },
  data: () => ({
    collapsed: true
  }),
  computed: {
    getStatus () {
      // eslint-disable-next-line eqeqeq
      if (this.status == 1) {
        return 'تایید شده'
      } else {
        return 'در انتظار تایید'
      }
    }
  },
  methods: {
    toggleCollapsed () {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style lang="scss">
.profile-card {

  .card-title {
    @apply flex justify-between px-2 xs:px-3 mb-1;

    span {
      @apply relative;
      top: -1px;
    }

    h2 + div {
      @apply relative;
      top: -4px;
    }

    h2, small, i {
      @apply text-xs;
    }

    small {
      @apply sans-medium #{!important};
    }
  }

  .wrapper {
    @apply w-full h-auto p-2 xs:px-6 xs:pt-6 xs:pb-5 overflow-hidden box-shadow rounded-lg;

    .header {
      @apply w-full flex justify-between;

      .text {
        > div {
          @apply inline-block;
        }

        i {
          @apply relative -top-1
        }

        h3 {
          @apply sans-light;
        }
      }

      .icon > i {
        @apply relative text-2xl;
        top: 8px;
      }
    }

    .body {
      @apply w-full overflow-hidden;

      .context {
        @apply w-full h-auto p-2 xs:px-6 xs:pt-6 xs:pb-5;
      }

      .actions {
        @apply flex justify-end;
      }
    }
  }
}
</style>
