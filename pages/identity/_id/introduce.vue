<template>
  <div class="wizard">
    <header>
      <div class="w-full text-center mt-3">
        <i class="fad fa-fingerprint text-primary fa-3x" />
        <h3 class="text-xl sans-light mt-3">
          احراز هویت شما
        </h3>
      </div>
      <div class="mt-6">
        <p class="text-sm text-justify">
          احراز هویت شما برای استفاده کامل از امکانات اپلیکیشن بنت از واجبات کسب و کار ماست؛ این رویه باعث میشود تا شما و دیگران در یک محیط امن معاملات خودتان را انجام دهید؛ این مراحل شامل قدم‌های زیر است:
        </p>
      </div>
    </header>
    <article class="mt-8 px-4">
      <ShowSteps :steps="steps" />
    </article>
    <footer>
      <LinkableButton :to="`/identity/${id}/personal`" template="primary" text="شروع کن" class="block w-full" />
    </footer>
  </div>
</template>

<script>
import user from '@/mixins/user'
export default {
  mixins: [user],
  layout: 'default',
  data: () => ({
    steps: ['مشخصات فردی', 'محل کار و پروانه کسب', 'اطلاعات بانکی معتبر']
  })
}
</script>
