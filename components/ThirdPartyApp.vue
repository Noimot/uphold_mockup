<template>
  <div
    class="flex justify-between border-2 rounded-md mb-4 p-2 filter drop-shadow sm:text-sm"
  >
    <div class="flex">
      <span><fa icon="circle" class="text-green-300 text-md sm:hidden"/></span>
      <!-- <span v-html="data.img" ></span> -->
      <div class="pl-4 sm:pl-0">
        <h1 class="font-bold">{{ data.app }}</h1>
        <div class="text-gray-500">
          <!-- {{
          !data.btn
            ? data.paragraph
            : (data.btn && data.paragraph) || data.btn || data.paragraph
        }} -->
          {{ data.paragraph }}
        </div>
      </div>
    </div>
    <p
      :style="{ backgroundColor: data.color }"
      class="text-white h-5 rounded text-sm"
    >
      {{ data.btn }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {};
  }
};
</script>
