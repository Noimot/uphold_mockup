<template>
  <div class="flex mt-2">
    <div class="flex">
      <svg-icon name="sidebar/outlet" class="w-8 h-10" />
      <div class="pl-3 font-semibold">
        <h1>{{ currency.currency }}</h1>
        <p class="text-gray-500 text-sm">{{ currency.symbol }}</p>
      </div>
    </div>
    <div class="text-right font-semibold">
      <p>{{ currency.price }}</p>
      <p :style="{ color: currency.color }">
        {{ currency.negPrice ? currency.negPrice : currency.posPrice }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["currency"]
};
</script>
