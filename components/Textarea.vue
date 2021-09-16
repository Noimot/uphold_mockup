<template>
  <div class="mt-10">
    <div
      class="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600"
    >
      <label
        for="name"
        class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
        >From</label
      >
      <input
        type="text"
        name="name"
        id="name"
        class="block w-full border-0 p-0 text-gray-500 placeholder-gray-500 focus:ring-0 sm:text-sm text-lg font-semibold"
        placeholder="0"
      />
      <span class="text-sm"
        ><fa
          icon="chevron-right"
          class="transform rotate-90 absolute bottom-4 left-80 text-gray-500"
      /></span>
    </div>

    <div
      class="relative left-14 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600 mt-8 w-72"
    >
      <input
        type="text"
        name="name"
        id="name"
        class="block w-full border-0 p-0 text-gray-500 placeholder-gray-500 focus:ring-0 sm:text-sm"
        placeholder="0"
      />
      <span class="text-sm"
        ><fa
          icon="chevron-right"
          class="transform rotate-90 absolute bottom-3 left-64 text-gray-500"
      /></span>
      <span class="text-sm absolute bottom-2 left-48 font-semibold">USD</span>
      <svg-icon
        name="sidebar/exchange"
        class="w-5 h-8 absolute bottom-1 -left-2.5 text-gray-500"
      />
    </div>

    <div
      class="relative border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600 mt-8"
    >
      <label
        for="name"
        class="absolute -top-2 left-2 -mt-px inline-block px-1 bg-white text-xs font-medium text-gray-900"
        >To</label
      >
      <input
        type="text"
        name="name"
        id="name"
        class="block w-full border-0 p-0  placeholder-gray-500 focus:ring-0 sm:text-sm text-lg font-semibold text-gray-500"
        placeholder="0"
      />
      <span class="text-sm"
        ><fa
          icon="chevron-right"
          class="transform rotate-90 absolute bottom-4 left-80 text-gray-500"
      /></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>
