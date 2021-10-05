<template>
  <div class="select-input" :class="{'select-input-activated': searchBox !== '', 'select-disabled': disabled}" @mouseleave="showList = false">
    <div class="flex justify-between" @click="showSelectList">
      <span v-if="chosenText === ''" class="text-input p">{{ placeholder }}</span>
      <span v-else class="text-input t">{{ chosenText }}</span>
      <i class="fal fa-angle-left ml-2 relative" />
    </div>

    <keep-alive>
      <transition enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster" mode="out-in" appear>
        <div v-show="showList" class="select-zone">
          <div class="select-list">
            <input v-show="search" v-model="searchBox" type="text" class="bordered-input px-0 mb-2">

            <!-- For Array -->
            <ul v-if="lists !== null && listsArray === null" class="select-options">
              <li v-for="(item, index) in lists" :key="index" :class="{ 'active-item': isActive(item.text) }" @click="activeModel(item.value, item.text)">
                {{ item.text }}
              </li>
            </ul>

            <!-- For Objects -->
            <ul v-if="lists === null && listsArray !== null" class="select-options">
              <li v-for="(item, index) in listsArray" :key="index" :class="{ 'active-item': isActive(item) }" @click="activeModelFromArray(index, item)">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </keep-alive>
  </div>
</template>

<script>
export default {
	name: 'SelectInput',
	props: {
		placeholder: {
			type: [String, Number, Object],
			required: false,
			default: 'انتخاب کنید'
		},
		search: {
			type: Boolean,
			required: false,
			default: false
		},
		lists: {
			type: Array,
			required: false,
			default: null
		},
		listsArray: {
			type: Array,
			required: false,
			default: null
		},
		value: {
			type: [String, Number, Object],
			required: false,
			default: null
		},
		disabled: {
			type: Boolean,
			required: false,
			default: false
		}
	},
	data: () => ({
		showList: false,
		searchBox: '',
		chosenText: ''
	}),
	methods: {
		showSelectList () {
			if (!this.disabled) {
				this.showList = !this.showList
			}
		},
		activeModel (value, text) {
			this.chosenText = text
			this.$emit('input', value)
			this.showList = false
		},
		activeModelFromArray (index, text) {
			this.chosenText = text
			this.$emit('input', index)
			this.showList = false
		},
		isActive (text) {
			if (this.chosenText === null && text === this.placeholder) {
				return true
			} else if (text === this.chosenText) {
				return true
			} else {
				return false
			}
		}
	}
}
</script>

<style>

</style>
