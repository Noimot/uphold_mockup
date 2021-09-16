<template>
  <div class="bg-white rounded-md pt-6 px-4">
    <div class="flex justify-between mb-4 items-center">
      <span></span>
      <p class="font-bold">Activity</p>
      <span class="w-8 h-8 bg-gray-100 rounded-full relative"
        ><fa icon="calculator" class="absolute top-2 right-2"
      /></span>
    </div>
    <div class="flex justify-center gap-4">
      <div class="rounded-full shadow py-2 px-8">
        <span><fa icon="sync-alt" class="text-green-300"/></span
        ><span class="font-bold px-2">Repeat</span>0
      </div>
      <div class="rounded-full shadow py-2 px-8">
        <span><fa icon="pause-circle" class="text-green-300"/></span
        ><span class="font-bold px-2">Limit</span>0
      </div>
    </div>
    <div>
      <p class="font-bold my-6">Past transactions</p>
      <div>
        <TransactionHistory
          v-for="transaction in transactions"
          :key="transaction.date"
          :transaction="transaction"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
        },
        {
          date: "Jun 09, 2021",
          received: "Recieved BAT",
          note: "from Brave Software international",
          price: "0.58500BAT",
          rate: "$1.36"
        },
        {
          date: "May 10, 2021",
          received: "Recieved BAT",
          note: "from Brave Software international",
          price: "0.6800BAT",
          rate: "$0.96"
        },
        {
          date: "Apr 07, 2021",
          received: "Withdraw BAT",
          note: "to Kabolobari Benakole",
          price: "5.00BAT",
          rate: "$6.02"
        },
        {
          received: "Recieved BAT",
          note: "from Brave Software international",
          price: "1.5600BAT",
          rate: "$1.92"
        }
      ]
    };
  }
};
</script>
