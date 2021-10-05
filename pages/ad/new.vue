<template>
  <div class="wizard">
    <header class="w-full flex justify-between py-2">
      <h3 class="text-xl sans-light mt-1">
        ایجاد آگهی جدید
      </h3>
      <i class="far fa-arrow-left text-primary text-2xl" />
    </header>
    <article class="mt-8">
      <label for="provinces" class="label">نام کامل تایر:</label>
      <SelectInput
        id="tyre-name"
        v-model="nationalIdVal"
        :lists-array="provinces"
        placeholder="مثال: لاستیک متاستاز"
        :disabled="true"
      />
      <TextInput
        id="tyre-count"
        v-model="nationalIdVal"
        label="تعداد تایرها:"
        size="full"
        :length="20"
        placeholder="تعداد را به رقم تایپ کنید"
        styles="sans-number"
        required
        class="mt-8"
      />
      <TextInput
        id="tyre-year"
        v-model="nationalIdVal"
        label="سال تولید:"
        size="full"
        :length="4"
        placeholder="سال را چهار رقمی و به عدد تایپ کنید"
        styles="sans-number"
        required
        class="mt-8"
      />
      <TextInput
        id="shipment"
        v-model="nationalIdVal"
        label="تعهد ارسال:"
        size="full"
        :length="10"
        placeholder="تعهد ارسال را بر اساس روز و به عدد تایپ کنید"
        styles="sans-number"
        required
        class="mt-8"
      />
      <TextInput
        id="shipment"
        v-model="nationalIdVal"
        label="قیمت آگهی:"
        size="full"
        :length="3"
        placeholder="مبلغ را به تومان و به عدد تایپ کنید"
        styles="sans-number"
        required
        class="mt-8"
      />
      <TextAreaInput
        id="ad-desc"
        v-model="nationalIdVal"
        label="توضیحات تکمیلی:"
        size="full"
        placeholder="توضیحات در مورد هر اگهی اختیاریست."
        styles="sans-number"
        required
        class="mt-8"
      />
    </article>
    <footer>
      <Button template="primary" text="ساخت آگهی" class="w-full" />
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
