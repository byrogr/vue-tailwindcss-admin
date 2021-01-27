<template>
  <layout>
    <router-view />
  </layout>
</template>

<script>
import Layout from './layouts/Layout.vue'
export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
