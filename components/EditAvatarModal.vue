<template>
  <div class="overflow-hidden">
    <div class="text-center">
      <Avatar size="100px" icon="fas fa-user fa-4x" :src="avatar" alt="تصویر کاربر" class="inline-block mb-4" />
      <h6 class="text-gray-600 text-sm xs:text-lg mb-1">
        بروزرسانی نمایه پروفایل
      </h6>
      <small class="block text-gray-600 text-xs xs:text-sm px-6">داشتن یک تصویر نمایه میتواند در اعتمادسازی بیشتر بازار بنت تاثیرگذار باشد.</small>
    </div>

    <form @submit.prevent="submitForm()">
      <div class="mt-10 px-4 xl:px-6">
        <Uploader
          id="avatar"
          :size="4"
          class="w-full mt-8"
          @data="getData"
        />
      </div>

      <div class="fixed bottom-4 w-full bg-white px-4 xl:px-6">
        <Button type="submit" :loading="loading" text="ثبت نمایه" :disabled="newAvatar === ''" />
        <Button
          v-if="avatar !== null && avatar !== ''"
          template="red"
          :loading="loading"
          text="حذف"
          class="mt-2"
          @clicked="removeAvatar()"
        />
      </div>
    </form>
  </div>
</template>

<script>
import user from '@/mixins/commits/user'
import layout from '@/mixins/commits/layout'
import formValidation from '@/mixins/helpers/formValidation'
export default {
  mixins: [user, layout, formValidation],
  data: () => ({
      loading: false,
      newAvatar: '',
      userTell: ''
  }),
  fetch () {
    // this.sendToken()
  },
  methods: {
    // Layout
    getData (file) {
      this.newAvatar = file
    },
    // API
    submitForm () {
      this.loading = true
      const formData = new FormData()
      formData.append('avatar', this.newAvatar)
      this.$axios.post(`user/profile/update/${this.id}/personal`, formData).then((res) => {
        // console.log(res)
        this.avatar = res.data.avatar
        this.avatarModal = false
        this.$notify({
          type: 'success',
          title: 'گزارش تغییر نمایه',
          text: 'نمایه شما با موفقیت به روزرسانی شد.',
          duration: 4000
        })
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
        this.$notify({
          type: 'warn',
          title: 'گزارش تغییر نمایه',
          text: 'مشکلی در ارتباط با سرور رخ داده است، لطفا درخواست خود را دقایق دیگر امتحان کنید.',
          duration: 4800
        })
      }).finally(() => {
        this.loading = false
      })
    },
    removeAvatar () {
      this.loading = true
      return this.$axios.post(`user/profile/update/${this.id}/personal`, {
        deleted_avatar: true
      }).then(() => {
        this.avatar = ''
        this.avatarModal = false
        this.$notify({
          type: 'success',
          title: 'گزارش حذف نمایه',
          text: 'نمایه شما با موفقیت حذف شد.',
          duration: 4000
        })
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
        this.$notify({
          type: 'warn',
          title: 'گزارش حذف نمایه',
          text: 'مشکلی در ارتباط با سرور رخ داده است، لطفا درخواست خود را دقایق دیگر امتحان کنید.',
          duration: 4800
        })
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
