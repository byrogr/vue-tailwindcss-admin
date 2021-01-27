<template>
  <aside id="main-sidebar" class="bg-white col-span-2 h-screen flex flex-col border-r border-gray-300">
    <div id="logotipo" class="flex justify-center">
      <img src="./../assets/logo.png" alt="Logotipo" width="160">
    </div> <!-- end of #logotipo -->
    <nav id="main-menu" class="mt-4">
      <ul class="flex flex-col m-0 p-0 text-sm">
        <li class="item-nav">
          <router-link class="item" :to="{ name: 'dashboard' }">
            <!-- <svg class="mr-4 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> -->
            <i class="fas fa-tachometer-alt mr-4"></i> Dashboard
          </router-link>
        </li>
        <li class="item-nav">
          <router-link class="item" :to="{ name: 'employee' }">
            <i class="fas fa-user-tie mr-4"></i> Employees
          </router-link>
        </li>
        <li class="item-nav">
          <a class="item" href="#">
            <i class="fas fa-key mr-4"></i> Security
          </a>
        </li>
      </ul>
    </nav> <!-- end of #main-menu -->
  </aside> <!-- end of #main-sidebar -->
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
  #main-menu ul li.item-nav {
    @apply leading-9;
    @apply h-9;
    @apply flex;
    @apply items-center
  }

  #main-menu ul li.item-nav a.item {
    @apply h-4;
    @apply w-full;
    @apply h-full;
    @apply flex;
    @apply items-center;
    @apply px-4;
    @apply border-l-4;
    @apply hover:border-blue-600;
    @apply hover:text-blue-600;
  }

  .active {
    @apply text-blue-600;
    @apply border-l-4;
    @apply border-blue-600;
    @apply bg-gray-100;
  }
</style>
