<template>
  <div
    class="bg-white rounded-md p-6 sm:px-0 md:px-2 lg:px-3 flex justify-between flex-col"
  >
    <div>
      <p class="font-semibold text-center md:text-sm">Anything to Anything</p>
      <div
        class="flex justify-between items-center mt-6 bg-gray-100 rounded-full pr-5 sm:text-xs sm:px-0 md:px-2 md:text-sm lg:text-sm"
      >
        <div class="rounded-full bg-green-300 text-white py-1 pl-8 px-5">
          Transaction
        </div>
        <div>Repeat</div>
        <div>Limit</div>
      </div>
      <div>
        <Textarea />
      </div>
    </div>

    <div
      class="text-white bg-green-300 py-1 bg-opacity-50 rounded-full font-semibold text-center"
    >
      Preview
    </div>
  </div>
</template>
