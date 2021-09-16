<template>
  <div class="height overflow-scroll">
    <div class="bg-white rounded-md py-2 mb-4">
      <slot name="highlight"></slot>
    </div>
    <div class="bg-white rounded-md py-2 mb-4">
      <h1 class="text-center font-bold pt-4">Watchlist</h1>
      <slot name="watchlist"></slot>
    </div>
    <div class="bg-white rounded-md py-2">
      <h1 class="text-center font-bold pt-4">Recent activity</h1>
      <slot name="recentact"> </slot>
    </div>
  </div>
</template>
