<template>
  <div class="wizard">
    <header class="w-full flex justify-between py-2">
      <h3 class="text-xl sans-light mt-1">
        محل کار شما
      </h3>
      <i class="far fa-arrow-left text-primary text-2xl" />
    </header>
    <article class="mt-8">
      <label for="provinces" class="label">نام استان:</label>
      <SelectInput
        id="provinces"
        v-model="nationalIdVal"
        :lists-array="provinces"
        placeholder="نام استان خود را انتخاب کنید"
        :disabled="true"
      />
      <label for="provinces" class="label mt-8">نام شهر:</label>
      <SelectInput
        id="provinces"
        v-model="nationalIdVal"
        :lists-array="provinces"
        placeholder="نام شهر خود را انتخاب کنید"
        :disabled="false"
      />
      <TextInput
        id="post-code"
        v-model="nationalIdVal"
        label="کد پستی ده رقمی:"
        size="full"
        :length="10"
        placeholder="مثال: 1234567890"
        styles="sans-number"
        required
        class="mt-8"
      />
      <TextInput
        id="phone"
        v-model="nationalIdVal"
        label="شماره تماس محل کار (به همراه کد شهر):"
        size="full"
        :length="11"
        placeholder="مثال: 02122331122"
        styles="sans-number"
        required
        class="mt-8"
      />
      <TextInput
        id="license"
        v-model="nationalIdVal"
        label="شماره پروانه کسب:"
        size="full"
        :length="10"
        placeholder="مثال: 1234567890"
        styles="sans-number"
        required
        class="mt-8"
      />
      <TextAreaInput
        id="full-addr"
        v-model="nationalIdVal"
        label="آدرس کامل محل کار:"
        size="full"
        placeholder="مثال: بلوار خزائی، انتهای عبداللهی 7، پلاک 56"
        styles="sans-number"
        required
        class="mt-8"
      />
      <Uploader
        id="license-img"
        v-model="nationalIdVal"
        title="تصویر پورانه کسب:"
        :size="4"
        class="w-full mt-8"
      />
    </article>
    <footer>
      <LinkableButton :to="`/identity/${id}/financial`" template="primary" text="مرحله بعدی" class="block w-full" />
    </footer>
  </div>
</template>

<script>
import user from '@/mixins/user'
import layout from '@/mixins/layout'
export default {
  mixins: [user, layout],
  layout: 'default',
  data: () => ({
    full_name: ''
  })
}
</script>
