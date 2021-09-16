<template>
  <div class="h-screen">
    <div>
      <template>
        <div class="bg-gray-100  box-border flex md:h-full lg:h-full xl:h-full">
          <!-- <NuxtLink :navigation="navigation" /> -->
          <TheSidebar class="md:hidden lg:hidden xl:hidden" />
          <div
            class="w-95% grid grid-cols-3 gap-8 p-6 lg:block xl:block md:block lg:p-0 xl:p-0 md:p-0 xl:w-full lg:w-full md:w-full"
          >
            <TransactionWrapper>
              <template v-slot:highlight
                ><div
                  v-for="data in highlight"
                  :key="data.rate"
                  class="font-semibold inline-block pl-4 text-sm"
                >
                  <div>
                    <span
                      ><fa icon="circle" :style="{ color: data.color }"/></span
                    >{{ data.title }}
                  </div>
                  <div>
                    {{ data.amount
                    }}<span class="text-red-500">{{ data.rate }}</span>
                  </div>
                </div></template
              >
              <template v-slot:watchlist><Currencies class="p-5"/></template>
              <template v-slot:recentact
                ><div
                  v-for="transaction in transactions"
                  :key="transaction.symbol"
                  class="px-5"
                >
                  <p class="my-4 text-gray-500">{{ transaction.date }}</p>
                  <div class="flex">
                    <div class="flex">
                      <span class="relative w-8 h-8 rounded-full bg-gray-100"
                        ><fa
                          icon="long-arrow-alt-down"
                          class="transform rotate-45 absolute top-2 left-3 text-gray-500"
                      /></span>
                      <div class="pl-3">
                        <h1 class="font-semibold">
                          {{ transaction.received }}
                        </h1>
                        <p class="text-gray-500">{{ transaction.note }}</p>
                      </div>
                    </div>

                    <div>
                      <p class="font-semibold">{{ transaction.price }}</p>
                      <p class="text-gray-500">{{ transaction.rate }}</p>
                    </div>
                  </div>
                </div></template
              >
            </TransactionWrapper>
            <Balance class="md:hidden lg:hidden xl:hidden" />
            <TransactionPreview class="md:hidden lg:hidden xl:hidden" />
          </div>
        </div>
      </template>
    </div>
    <Navigation class="hidden md:block lg:block xl:block" />
  </div>
</template>
<script>
export default {
  // props: ["navigation"],
  data() {
    return {
      highlight: [
        {
          color: "navyblue",
          title: "COMP",
          amount: "$476.33",
          rate: "-0.98%"
        },
        {
          color: "black",
          title: "ATOM",
          amount: "$13.38",
          rate: "-2.99%"
        },
        {
          color: "skyblue",
          title: "DASH",
          amount: "$166.59",
          rate: "-1.7%"
        },
        {
          color: "lightgreen",
          title: "DO",
          amount: "$147"
        }
      ],
      transactions: [
        {
          date: "Aug 08, 2021",
          received: "Recieved BAT",
          note: "from Brave Software international",
          price: "1.8800BAT",
          rate: "$1.36"
        },
        {
          date: "Jul 08, 2021",
          received: "Recieved BAT",
          note: "from Brave Software international",
          price: "0.69250BAT",
          rate: "$0.41"
        }
      ]
    };
  }
};
</script>
