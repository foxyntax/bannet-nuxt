<template>
  <div class="pb-6">
    <div class="px-2 xs:px-4 mb-12">
      <ProfileCard main-title="مشخصات فردی" status="1" head-subtitle="عضویت از ۲۲ مهر ماه ۱۴۰۰" head-title="میلاد محمدی" head-icon="fad fa-user">
        <div slot="context">
          <div class="w-full">
            <IconInfo title="تلفن همراه" subtitle="09361719209" icon="fad fa-mobile" />
            <IconInfo title="کد ملی" subtitle="0810163470" icon="fad fa-address-card" />
          </div>
        </div>
        <Button slot="actions" template="bordered" size="mini" text="تغییر شماره همراه" />
      </ProfileCard>
      <TipCard text="امتیازات شما از مجموع بازخوردهای اخیر:" icon="fad fa-comment-lines text-gray-900" value="4.7/5" class="mt-4" />
    </div>

    <Divider size="mini" />

    <div class="px-2 xs:px-4 mt-12 mb-24">
      <ProfileCard main-title="کسب و کار" status="1" head-subtitle="صادره از خراسان رضوی، مشهد" head-title="شناسه کسب ۵۹۰۰۵۸۲۳۳۰" head-icon="fad fa-briefcase">
        <div slot="context">
          <div class="w-full">
            <IconInfo title="تلفن محل کسب" subtitle="۰۲۱۲۱۱۲۵۷۷۸" icon="fad fa-mobile" />
            <IconInfo title="کد پستی" subtitle="۰۹۳۶۱۱۵۸۲۰" icon="fad fa-address-card" />
            <IconInfo title="آدرس محل کار" subtitle="خیابان بهشتی، دکتر بهشتی فلان" icon="fad fa-address-card" />
          </div>
        </div>
        <Button slot="actions" template="bordered" size="mini" text="تغییر مشخصات" />
      </ProfileCard>
    </div>
  </div>
</template>

<script>
export default {
    layout: 'nav'
}
</script>

<style>

</style>
