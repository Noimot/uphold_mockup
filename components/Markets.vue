<template>
  <div>
    <div class="bg-gray-100 h-screen box-border flex">
      <TheSidebar class="md:hidden lg:hidden xl:hidden" />
      <div
        class="w-95% grid grid-cols-3 gap-8 p-6 lg:block xl:block md:block lg:p-0 xl:p-0 md:p-0 xl:w-full lg:w-full md:w-full"
      >
        <Market class="height overflow-scroll" />
        <Balance class="md:hidden lg:hidden xl:hidden" />
        <TransactionPreview class="md:hidden lg:hidden xl:hidden" />
      </div>
    </div>
    <Navigation class="hidden md:block lg:block xl:block " />
  </div>
</template>
