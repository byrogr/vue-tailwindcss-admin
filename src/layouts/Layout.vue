<template>
  <div id="wrapper" class="grid grid-cols-12">
    <!-- SIDEBAR START -->
    <sidebar />
    <!-- SIDEBAR END -->

    <!-- MAIN CONTENT START -->
    <main-content>
      <slot></slot>
    </main-content>
    <!-- MAIN CONTENT END -->
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import MainContent from './MainContent.vue'
export default {
  name: 'Layout',
  components: {
    Sidebar,
    MainContent
  }
}
</script>
