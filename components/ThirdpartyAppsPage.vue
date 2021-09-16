<template>
  <div class="bg-white rounded-md pt-6 px-4">
    <p class="text-center font-bold mb-6">Integrations</p>
    <p class="text-gray-500 mb-4 sm:text-sm">
      You can choose to link your wallet with any of the third party apps below
    </p>
    <ThirdPartyApp v-for="data in info" :key="data.app" :data="data" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: [
        {
          img: `<fa icon='stop-circle' />`,
          app: "Brave Browser",
          btn: "CONNECTED",
          color: "lightgreen"
        },
        {
          img: "<fa icon='minus-circle' />",
          app: "VCOIN",
          btn: "NEW",
          color: "blue",
          paragraph:
            "VCOIN is the first digital currency made for the Mateverse"
        },
        {
          img: "<fa icon='dot-circle' />",
          app: "Blockreward",
          paragraph: "Earn crypto by trying new apps, surveys and more"
        },
        {
          img: "<fa icon='info-circle' />",
          app: "Linqto",
          paragraph: "Private investing in Pre-IPO companies"
        },
        {
          img: "<fa icon='stop-circle' />",
          app: "UBDI",
          paragraph: "Privately use yur digital data to earn crypto rewards"
        },
        {
          img: "<fa icon='pause-circle' />",
          app: "SkillGaming",
          paragraph:
            "SkillGaming.com is the first unique skills-based gaming network where games play free or with real money"
        }
      ]
    };
  }
};
</script>
