<template>
  <div class="divider" :class="getDivider" />
</template>

<script>
export default {
    props: {
        size: {
            required: true,
            type: String
        }
    },
    computed: {
        getDivider () {
            switch (this.size) {
                case 'big':
                    return 'divider-big'
                case 'mini':
                    return 'divider-mini'
                default:
                    return 'divider-normal'
            }
        }
    }
}
</script>

<style lang="scss">
.divider {
    @apply w-full h-0 mx-auto p-0;
}
.divider-mini {
    border-bottom: 1px solid #F6F6F6;
}
.divider-normal {
    border-bottom: 2px solid #F6F6F6
}
.divider-big {
    border-bottom: 3px solid #F6F6F6;
}
</style>
