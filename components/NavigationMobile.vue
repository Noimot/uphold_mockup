<template>
  <div
    class="bg-white border-r-2 border-gray-100 flex justify-between items-center text-3xl "
  >
    <div class="hidden">
      <nuxt-link to="/">
        <fa icon="parachute-box" class="text-green-300"
      /></nuxt-link>
    </div>
    <ul class="flex justify-between px-6 items-center">
      <li>
        <NuxtLink
          to="/transactionhighlight"
          class="flex flex-col justify-center items-center"
        >
          <svg-icon name="sidebar/outlet" class="w-8 h-10" />
          <span class="text-sm">Portfolio</span>
        </NuxtLink>
      </li>
      <li>
        <nuxt-link
          to="/markets"
          class="flex flex-col justify-center items-center"
        >
          <svg-icon name="sidebar/funds-line" class="w-8 h-10" />
          <span class="text-sm">Market</span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/activity"
          class="flex flex-col justify-center items-center"
        >
          <svg-icon name="sidebar/activity" class="w-8 h-10" />
          <span class="text-sm">Activity </span>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/integration"
          class="flex flex-col justify-center items-center"
        >
          <svg-icon name="sidebar/forbid" class="w-8 h-10" /><span
            class="text-sm"
            >Transaction</span
          >
        </nuxt-link>
      </li>
      <li>
        <button class="flex flex-col justify-center items-center">
          <svg-icon name="sidebar/pause-circle" class="w-8 h-10" />
          <span class="text-sm">Balance </span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // props: ["navigations"]
};
</script>
