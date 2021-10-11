<template>
  <div class="wizard">
    <header class="w-full flex justify-between py-2">
      <h3 class="text-xl sans-light mt-1">
        اطلاعات بانکی
      </h3>
      <i class="far fa-arrow-left text-primary text-2xl" />
    </header>
    <article class="mt-8">
      <TextInput
        id="post-code"
        v-model="nationalIdVal"
        label="شماره شبا:"
        size="full"
        placeholder="IR شماره بدون"
        :length="24"
        styles="sans-number"
        required
        class="mt-8"
      />
      <TextInput
        id="phone"
        v-model="nationalIdVal"
        label="شماره کارت بانکی:"
        size="full"
        placeholder="شماره 16 رقمی بدون خط یا فاصله"
        :length="16"
        styles="sans-number"
        required
        class="mt-8"
      />
      <Uploader
        id="debit-card-img"
        v-model="nationalIdVal"
        title="تصویر کارت عابر:"
        :size="4"
        class="w-full mt-8"
      />
    </article>
    <footer>
      <LinkableButton :to="`/identity/${id}/financial`" template="primary" text="تکمیل فرم" class="block w-full" />
    </footer>
  </div>
</template>

<script>
import user from '@/mixins/user'
export default {
  mixins: [user],
  layout: 'default',
  data: () => ({
    full_name: '',
    nationalId: ''
  })
}
</script>
