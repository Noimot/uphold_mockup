<template>
  <div>
    <Currency
      v-for="currency in currencies"
      :key="currency.symbol"
      :currency="currency"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      currencies: [
        {
          iconName: "blockreward",
          currency: "Basic Attention Token",
          symbol: "BAT",
          price: "$0.684734",
          negPrice: "-2.95%",
          color: "red"
        },
        {
          iconName: "brave-browser",
          currency: "Bitcoin",
          symbol: "BTC",
          price: "$44.254",
          posPrice: "+1.58%",
          color: "lightgreen"
        },
        {
          iconName: "linqto",
          currency: "Ether",
          symbol: "ETH",
          price: "$3.049",
          negPrice: "-0.58%",
          color: "red"
        },
        {
          iconName: "ubdi",
          currency: "US Dollar",
          symbol: "USD"
        },
        {
          iconName: "vcoin",
          currency: "XRP",
          symbol: "XRP",
          price: "$0.79159",
          negPrice: "-0.58%",
          color: "lightgreen"
        }
      ]
    };
  }
};
</script>
