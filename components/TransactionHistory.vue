<template>
  <div>
    <p class="my-4 text-gray-500">{{ transaction.date }}</p>
    <div class="flex">
      <div class="flex">
        <span class="relative w-8 h-8 rounded-full bg-gray-100"
          ><fa
            icon="long-arrow-alt-down"
            class="transform rotate-45 absolute top-2 left-3 text-gray-500"
        /></span>
        <div class="pl-3">
          <h1 class="font-semibold">{{ transaction.received }}</h1>
          <p class="text-gray-500">{{ transaction.note }}</p>
        </div>
      </div>

      <div>
        <p class="font-semibold">{{ transaction.price }}</p>
        <p class="text-gray-500">{{ transaction.rate }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["transaction"]
};
</script>
