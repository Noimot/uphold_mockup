<template>
  <div>
    <div
      class="flex mt-2"
      v-for="crypto in cryptocurrencies"
      :key="crypto.symbol"
    >
      <div class="flex">
        <svg-icon name="sidebar/outlet" class="w-8 h-10" />
        <div class="pl-3 font-semibold">
          <h1>{{ crypto.currency }}</h1>
          <p class="text-gray-500 text-sm">{{ crypto.symbol }}</p>
        </div>
      </div>
      <div class="text-right font-semibold">
        <p>{{ crypto.price }}</p>
        <p :style="{ color: crypto.color }">
          {{ crypto.negPrice ? crypto.negPrice : crypto.posPrice }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cryptocurrencies: [
        {
          iconName: "blockreward",
          currency: "0x",
          symbol: "ZRX",
          price: "$0.93852",
          posPrice: "+4.15%",
          color: "lightgreen"
        },
        {
          iconName: "brave-browser",
          currency: "Aave",
          symbol: "AAVE",
          price: "$364.92",
          negPrice: "-3.83%",
          color: "lightgreen"
        },
        {
          iconName: "linqto",
          currency: "Balancer",
          symbol: "BAL",
          price: "$24.59",
          negPrice: "-2.79%",
          color: "red"
        },
        {
          iconName: "ubdi",
          currency: "Bitcoin",
          symbol: "BTC",
          price: "$44.254",
          posPrice: "+1.68%",
          color: "lightgreen"
        },
        {
          iconName: "vcoin",
          currency: "Bitcoin Cash",
          symbol: "BTC C",
          price: "$565.3",
          posPrice: "+1..58%",
          color: "lightgreen"
        }
      ]
    };
  }
};
</script>
