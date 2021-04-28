<template>
    <p
        class="badge sans-number"
        :class="{
            'badge-small'  : (type == 'small'),
            'badge-big'    : (type == 'big'),
            'badge-primary': (color == 'primary'),
            'badge-default': (color == 'default'),
            'badge-danger' : (color == 'danger'),
            'badge-mini'   : (type == 'default'),
            'sans-number'  : (faNumber),
            classes
        }"
    >
        <i v-show="iconPosition == 'before'" :class="icon" class="ml-1" />
        <span> {{ text }} </span>
        <i v-show="iconPosition == 'after'" :class="icon" class="mr-1" />
    </p>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String
    },
    type: {
        required: false,
        type: String,
        default: 'default'
    },
    color: {
        required: false,
        type: String,
        default: 'primary'
    },
    faNumber: {
        required: false,
        type: Boolean,
        default: false
    },
    icon: {
      required: false,
      type: String,
      default: ''
    },
    iconPosition: {
        required: false,
        type: String,
        default: 'after'
    },
    classes: {
      required: false,
      type: String,
      default: ''
    }
  }
}
</script>
