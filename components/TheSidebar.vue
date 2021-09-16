<template>
  <ul
    class="bg-white border-r-2 border-gray-100 flex flex-col justify-between items-center text-3xl sm:hidden md:text-xl"
  >
    <li class="mt-2">
      <nuxt-link to="/">
        <fa icon="parachute-box" class="text-green-300"
      /></nuxt-link>
    </li>
    <div class="">
      <div class="mb-2">
        <nuxt-link to="/">
          <svg-icon name="sidebar/outlet" class="w-8 h-10" />
        </nuxt-link>
      </div>
      <div class="mb-2">
        <nuxt-link to="/markets">
          <svg-icon name="sidebar/funds-line" class="w-8 h-10" />
        </nuxt-link>
      </div>
      <div class="mb-2">
        <nuxt-link to="/activity">
          <svg-icon name="sidebar/activity" class="w-8 h-10"
        /></nuxt-link>
      </div>
      <div class="mb-2">
        <nuxt-link to="/integration">
          <svg-icon name="sidebar/forbid" class="w-8 h-10"
        /></nuxt-link>
      </div>
      <div class="mb-2">
        <nuxt-link to="/more">
          <svg-icon name="sidebar/pause-circle" class="w-8 h-10"
        /></nuxt-link>
      </div>
    </div>
    <!-- <div>{{ settings }}</div> -->
  </ul>
</template>

<script>
// import { mapState } from "vuex";
// export default {
//   computed: { ...mapState(["settings"]) }
// };
</script>
