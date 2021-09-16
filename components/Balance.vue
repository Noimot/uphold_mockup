<template>
  <div class="bg-white rounded-md">
    <div class="p-6 sm:px-2">
      <p>Total Balance</p>
      <h2 class="text-xl font-bold sm:text-base">
        $3.43
        <span class="px-2 rounded text-xs text-green-300 bg-green-100 sm:px-1"
          >+54.71%</span
        >
      </h2>
    </div>
    <Sparklines />
    <hr class="border-2 border-dotted" />
    <ul
      class="flex my-8 justify-between px-6 sm:text-xs sm:px-2 md:px-3 lg:px-4"
    >
      <li>1H</li>
      <li class="bg-green-100 text-green-300 rounded-full px-4 sm:px-2">1D</li>
      <li>1W</li>
      <li>1M</li>
      <li>1Y</li>
    </ul>
    <div class="px-6 sm:px-1 md:px-3 lg:px-4">
      <p class="font-semibold">
        Balance <span><fa icon="sort-down"/></span>
      </p>
      <div class="flex sm:flex-col sm:pt-2 sm:text-sm md:flex-col md:text-sm">
        <div class="flex sm:flex-col">
          <div><fa icon="dot-circle" class="text-red-500 sm:hidden" /></div>
          <div class="pl-4 sm:pl-0 md:pl-2">
            <p class="font-semibold">Brave Browser</p>
            <h3 class="text-gray-500">
              $0.69868
              <span class="text-red-500 font-semibold">-2.95%</span>
            </h3>
          </div>
        </div>
        <div class="md:pt-3">
          <p class="font-semibold sm:pt-1 ">$3.47</p>
          <h3 class="text-gray-500">5.20471BAT</h3>
        </div>
      </div>
    </div>
  </div>
</template>
