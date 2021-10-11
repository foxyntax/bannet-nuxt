<template>
  <div class="wizard">
    <header class="w-full flex justify-between py-2">
      <h3 class="text-xl sans-light mt-1">
        هویت فردی شما
      </h3>
      <i class="far fa-arrow-left text-primary text-2xl" />
    </header>
    <article class="mt-8">
      <TextInput
        id="full-name"
        v-model="full_name"
        label="نام کامل فارسی:"
        styles="sans-light"
        size="full"
        placeholder="مثال: فرامرز صالحی"
        required
      />
      <TextInput
        id="national-id"
        v-model="nationalIdVal"
        label="کد ملی ده رقمی:"
        styles="sans-light"
        size="full"
        :length="10"
        placeholder="مثال: 1234567890"
        required
        class="mt-8"
      />
      <Uploader
        id="national-card-img"
        v-model="nationalIdVal"
        title="تصویر کارت ملی:"
        :size="4"
        class="w-full mt-8"
      />
    </article>
    <footer>
      <LinkableButton :to="`/identity/${id}/business`" template="primary" text="مرحله بعدی" class="block w-full-force" />
    </footer>
  </div>
</template>

<script>
import user from '@/mixins/user'
export default {
  mixins: [user],
  layout: 'default',
  data: () => ({
    full_name: ''
  })
}
</script>
