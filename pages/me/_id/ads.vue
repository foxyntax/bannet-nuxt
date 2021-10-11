<template>
  <div class="contract">
    <!-- No Customer -->
    <CollapsedList title="آگهی بدون مشتری">
      <li v-for="(item, index) in data.noCustomer" :key="index" class="px-2 xs:px-3 my-5">
        <div class="flex justify-end text-xs text-gray-500 px-2">
          <i class="fad fa-clock relative" />
          <small class="sans-num mr-1">25 مهر ماه 1400</small>
        </div>
        <Card>
          <List title="ویژگی‌ها" icon="fad fa-info-circle text-primary" :data="item.attrbutes">
            <div class="flex justify-end mt-3">
              <Button template="text" size="mini" text="مشاهده جزئیات کالا" />
            </div>
          </List>
          <List title="لجستیک" icon="fad fa-truck-loading text-primary" :data="item.lagestic">
            <div class="flex justify-end mt-8">
              <Button template="bordered" size="mini" text="تغییر مشخصات" class="ml-1" />
              <Button template="text" size="mini" text="حذف کالا" />
            </div>
          </List>
        </Card>
      </li>
    </CollapsedList>
    <Divider />

    <!-- Activated Ads -->
    <CollapsedList title="آگهی‌های فعال">
      <li v-for="(item, index) in data.activated" :key="index" class="px-2 xs:px-3 my-5">
        <div class="flex justify-end text-xs text-gray-500 px-2">
          <i class="fad fa-clock relative" />
          <small class="sans-num mr-1">25 مهر ماه 1400</small>
        </div>
        <Card>
          <List title="ویژگی‌ها" icon="fad fa-info-circle text-primary" :data="item.attrbutes">
            <div class="flex justify-end mt-3">
              <Button template="text" size="mini" text="مشاهده جزئیات کالا" />
            </div>
          </List>
          <List title="آدرس مقصد" icon="fad fa-map-marker-alt text-primary" :data="item.address" />
          <List title="لجستیک" icon="fad fa-truck-loading text-primary mt-8" :data="item.lagestic">
            <li class="flex justify-between flex-wrap px-1 xs:px-2">
              <small class="attr"> فیش تاییدیه ارسال </small>
              <small v-if="item.hasProvenShipment" class="text-primary cursor-pointer">ارسال فیش</small>
              <small v-else class="value">ارسال شده</small>
            </li>
            <div class="flex justify-end mt-8">
              <Button template="primary" size="mini" text="دریافت اجرت" class="ml-1" />
              <Button template="text" size="mini" text="پروفایل مشتری" />
            </div>
          </List>
        </Card>
      </li>
    </CollapsedList>
    <Divider />

    <!-- Sell Archives -->
    <CollapsedList title="آرشیو فروش">
      <li v-for="(item, index) in data.sold" :key="index" class="px-2 xs:px-3 my-5">
        <div class="flex justify-end text-xs text-gray-500 px-2">
          <i class="fad fa-clock relative" />
          <small class="sans-num mr-1">25 مهر ماه 1400</small>
        </div>
        <Card>
          <List title="ویژگی‌ها" icon="fad fa-info-circle text-primary" :data="item.attrbutes">
            <div class="flex justify-end mt-3">
              <Button template="text" size="mini" text="مشاهده جزئیات کالا" />
            </div>
          </List>
          <List title="آدرس مقصد" icon="fad fa-map-marker-alt text-primary" :data="item.address" />
          <List title="لجستیک" icon="fad fa-truck-loading text-primary mt-8" :data="item.lagestic">
            <li class="flex justify-between flex-wrap px-1 xs:px-2">
              <small class="attr"> فیش تاییدیه ارسال </small>
              <small v-if="item.hasProvenShipment" class="text-primary cursor-pointer">مشاهده فیش</small>
              <small v-else class="value">ارسال شده</small>
            </li>
            <div class="flex justify-end mt-8">
              <Button template="text" size="mini" text="پروفایل مشتری" />
            </div>
          </List>
        </Card>
      </li>
    </CollapsedList>
    <Divider />

    <!-- Activated Buy -->
    <CollapsedList title="خریدهای فعال">
      <li v-for="(item, index) in data.buying" :key="index" class="px-2 xs:px-3 my-5">
        <div class="flex justify-end text-xs text-gray-500 px-2">
          <i class="fad fa-clock relative" />
          <small class="sans-num mr-1">25 مهر ماه 1400</small>
        </div>
        <Card>
          <List title="ویژگی‌ها" icon="fad fa-info-circle text-primary" :data="item.attrbutes">
            <div class="flex justify-end mt-3">
              <Button template="text" size="mini" text="مشاهده جزئیات کالا" />
            </div>
          </List>
          <List title="آدرس مقصد" icon="fad fa-map-marker-alt text-primary" :data="item.address" />
          <List title="لجستیک" icon="fad fa-truck-loading text-primary mt-8" :data="item.lagestic">
            <div class="flex justify-end mt-8">
              <Button template="primary" size="mini" text="تایید دریافت محموله" class="ml-1" />
              <Button template="text" size="mini" text="پروفایل فروشنده" />
            </div>
          </List>
        </Card>
      </li>
    </CollapsedList>
    <Divider />

    <!-- Buy Archives -->
    <CollapsedList title="آرشیو خرید">
      <li v-for="(item, index) in data.bought" :key="index" class="px-2 xs:px-3 my-5">
        <div class="flex justify-end text-xs text-gray-500 px-2">
          <i class="fad fa-clock relative" />
          <small class="sans-num mr-1">25 مهر ماه 1400</small>
        </div>
        <Card>
          <List title="ویژگی‌ها" icon="fad fa-info-circle text-primary" :data="item.attrbutes">
            <div class="flex justify-end mt-3">
              <Button template="text" size="mini" text="مشاهده جزئیات کالا" />
            </div>
          </List>
          <List title="آدرس مقصد" icon="fad fa-map-marker-alt text-primary" :data="item.address" />
          <List title="لجستیک" icon="fad fa-truck-loading text-primary mt-8" :data="item.lagestic">
            <div class="flex justify-end mt-8">
              <Button template="text" size="mini" text="پروفایل فروشنده" />
            </div>
          </List>
        </Card>
      </li>
    </CollapsedList>
    <Divider />
  </div>
</template>

<script>
export default {
  layout: 'nav',
  data: () => ({
    data: {
      noCustomer: [
        {
          attrbutes: [
            { attr: 'سال تولید', value: 2015 },
            { attr: 'تعداد لاستیک', value: '20 حلقه' },
            { attr: 'قیمت آگهی', value: '10.200.000 تومان' },
            { attr: 'توضیحات فروشنده', value: 'لاستیک ها رو خیلی وقت نیست خریدم ' }
          ],
          lagestic: [
            { attr: 'تعهد ارسال', value: '15 روزه' },
            { attr: 'تاریخ انقضا', value: '25 دی ماه 1400' }
          ]
        },
        {
          attrbutes: [
            { attr: 'سال تولید', value: 2017 },
            { attr: 'تعداد لاستیک', value: '30 حلقه' },
            { attr: 'قیمت آگهی', value: '17.200.000 تومان' },
            { attr: 'توضیحات فروشنده', value: 'توضیحی ثبت نشده' }
          ],
          lagestic: [
            { attr: 'تعهد ارسال', value: '15 روزه' },
            { attr: 'تاریخ انقضا', value: '27 دی ماه 1400' }
          ]
        }
      ],
      activated: [
        {
          attrbutes: [
            { attr: 'سال تولید', value: 2015 },
            { attr: 'تعداد لاستیک', value: '20 حلقه' },
            { attr: 'قیمت آگهی', value: '10.200.000 تومان' },
            { attr: 'توضیحات فروشنده', value: 'لاستیک ها رو خیلی وقت نیست خریدم ' }
          ],
          lagestic: [
            { attr: 'تعهد ارسال', value: '15 روزه' }
          ],
          address: [
            { attr: 'استان', value: 'خراسان رضوی' },
            { attr: 'شهر', value: 'مشهد' }
          ],
          hasProvenShipment: true // you have to open popup to upload it
        },
        {
          attrbutes: [
            { attr: 'سال تولید', value: 2017 },
            { attr: 'تعداد لاستیک', value: '30 حلقه' },
            { attr: 'قیمت آگهی', value: '17.200.000 تومان' },
            { attr: 'توضیحات فروشنده', value: 'توضیحی ثبت نشده' }
          ],
          lagestic: [
            { attr: 'تعهد ارسال', value: '15 روزه' }
          ],
          address: [
            { attr: 'استان', value: 'خراسان رضوی' },
            { attr: 'شهر', value: 'مشهد' }
          ],
          hasProvenShipment: false // you have to open popup to upload it
        }
      ],
      sold: [
        {
          attrbutes: [
            { attr: 'سال تولید', value: 2015 },
            { attr: 'تعداد لاستیک', value: '20 حلقه' },
            { attr: 'قیمت آگهی', value: '10.200.000 تومان' },
            { attr: 'توضیحات فروشنده', value: 'لاستیک ها رو خیلی وقت نیست خریدم ' }
          ],
          lagestic: [
            { attr: 'تعهد ارسال', value: '15 روزه' }
          ],
          address: [
            { attr: 'استان', value: 'خراسان رضوی' },
            { attr: 'شهر', value: 'مشهد' }
          ],
          hasProvenShipment: false
        },
        {
          attrbutes: [
            { attr: 'سال تولید', value: 2017 },
            { attr: 'تعداد لاستیک', value: '30 حلقه' },
            { attr: 'قیمت آگهی', value: '17.200.000 تومان' },
            { attr: 'توضیحات فروشنده', value: 'توضیحی ثبت نشده' }
          ],
          lagestic: [
            { attr: 'تعهد ارسال', value: '15 روزه' }
          ],
          address: [
            { attr: 'استان', value: 'خراسان رضوی' },
            { attr: 'شهر', value: 'مشهد' }
          ],
          hasProvenShipment: true // you have to open popup to upload it
        }
      ],
      buying: [
        {
          attrbutes: [
            { attr: 'سال تولید', value: 2015 },
            { attr: 'تعداد لاستیک', value: '20 حلقه' },
            { attr: 'قیمت آگهی', value: '10.200.000 تومان' },
            { attr: 'توضیحات فروشنده', value: 'لاستیک ها رو خیلی وقت نیست خریدم ' }
          ],
          lagestic: [
            { attr: 'تعهد ارسال', value: '15 روزه' },
            { attr: 'توکن آزادسازی اجرت', value: 'ست نشده' }
          ],
          address: [
            { attr: 'استان', value: 'خراسان رضوی' },
            { attr: 'شهر', value: 'مشهد' }
          ]
        },
        {
          attrbutes: [
            { attr: 'سال تولید', value: 2017 },
            { attr: 'تعداد لاستیک', value: '30 حلقه' },
            { attr: 'قیمت آگهی', value: '17.200.000 تومان' },
            { attr: 'توضیحات فروشنده', value: 'توضیحی ثبت نشده' }
          ],
          lagestic: [
            { attr: 'تعهد ارسال', value: '15 روزه' },
            { attr: 'توکن آزادسازی اجرت', value: '2132115' }
          ],
          address: [
            { attr: 'استان', value: 'خراسان رضوی' },
            { attr: 'شهر', value: 'مشهد' }
          ]
        }
      ],
      bought: [
        {
          attrbutes: [
            { attr: 'سال تولید', value: 2015 },
            { attr: 'تعداد لاستیک', value: '20 حلقه' },
            { attr: 'قیمت آگهی', value: '10.200.000 تومان' },
            { attr: 'توضیحات فروشنده', value: 'لاستیک ها رو خیلی وقت نیست خریدم ' }
          ],
          lagestic: [
            { attr: 'تعهد ارسال', value: '15 روزه' },
            { attr: 'توکن آزادسازی اجرت', value: '9980175' }
          ],
          address: [
            { attr: 'استان', value: 'خراسان رضوی' },
            { attr: 'شهر', value: 'مشهد' }
          ]
        },
        {
          attrbutes: [
            { attr: 'سال تولید', value: 2017 },
            { attr: 'تعداد لاستیک', value: '30 حلقه' },
            { attr: 'قیمت آگهی', value: '17.200.000 تومان' },
            { attr: 'توضیحات فروشنده', value: 'توضیحی ثبت نشده' }
          ],
          lagestic: [
            { attr: 'تعهد ارسال', value: '15 روزه' },
            { attr: 'توکن آزادسازی اجرت', value: '2132115' }
          ],
          address: [
            { attr: 'استان', value: 'خراسان رضوی' },
            { attr: 'شهر', value: 'مشهد' }
          ]
        }
      ]
    }
  })
}
</script>

<style lang="scss">
  .contract .fa-clock {
    top: 0.2px;
  }
</style>
