<template>
  <WrapperPage>
    <!-- <UserDashboard /> -->
    <!-- <Portfolio :navigation="navigation" /> -->
    <Portfolio />

    <p>{{ navigation }}</p>
  </WrapperPage>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const navigation = await $content("home/navigation").fetch();
    return { navigation };
  }
};
</script>
