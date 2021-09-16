<template>
  <div>
    <div class="grid grid-cols-3 h-screen">
      <div class="col-span-1 flex">
        <TheSidebar />
        <DashboardItems />
      </div>
      <div class="bg-gray-100 col-span-2 flex justify-center">
        <Profile />
      </div>
    </div>
    <Navigation class="hidden md:block lg:block xl:block " />
  </div>
</template>
