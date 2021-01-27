<template>
  <main id="main-content" class="col-span-10">
    <header id="main-top" class="mt-6 flex flex-row-reverse pr-6 text-sm">
      <div id="toolbar" class="flex">
        <a class="ml-10 flex items-center" href="#">
          <i class="mr-2 fas fa-bullhorn"></i> Notificaciones
        </a>
        <div id="avatar" class="flex items-center">
          <a class="ml-10 flex items-center" href="#">
            Bienvenido, Roger Rojas
            <svg class="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </a>
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div> <!-- end of #avatar -->
      </div> <!-- end of #toolbar -->
    </header> <!-- end of #main-top -->
    <section id="content" class="p-8">
      <slot />
    </section> <!-- end of #content -->
  </main> <!-- end of #main-content -->
</template>

<script>
export default {
  name: 'MainContent'
}
</script>
