<template>
  <div class="bg-white rounded-md pt-6 px-4">
    <h1 class="text-center font-bold">Markets</h1>
    <div class="w-full relative text-gray-500 mt-4">
      <fa icon="search" class="absolute top-3 left-2" /><input
        type="text"
        placeholder="Search"
        class="w-full pl-8 bg-green-50 rounded-md bg-opacity-75 font-semibold"
      />
    </div>
    <div>
      <ul
        class="flex mt-4 justify-between font-semibold text-black text-opacity-75"
      >
        <li class="px-1 py-1 rounded-full bg-green-300 text-white">
          Following <span class="text-gray-300">5</span>
        </li>
        <li class="bg-gray-100 px-1 py-1 rounded-full">
          Cryptocurrencies <span class="text-gray-300">46</span>
        </li>
        <li class="bg-gray-100 px-1 py-1 rounded-full">
          Equities <span class="text-gray-300">50</span>
        </li>
      </ul>
    </div>
    <div class="mt-4">
      <p class="mt-4 text-gray-500 text-sm font-semibold">
        FOLLOWING
      </p>
      <Currencies />
    </div>
    <div class="mt-4">
      <p class="mt-4 text-gray-500 text-sm font-semibold">CRYPTOCURRENCIES</p>
      <CryptoCurrency />
    </div>
  </div>
</template>
