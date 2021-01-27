<template>
  <div>
    <page-header title="Dashboard" />
    <div class="grid grid-cols-12 gap-1">
      <panel title="Users" class="col-span-4" :with-header="false">
        <p>Hola</p>
      </panel>
      <panel title="Users" class="col-span-4" :with-header="false">
        <p>Hola</p>
      </panel>
      <panel title="Users" class="col-span-4" :with-header="false">
        <p>Hola</p>
      </panel>
    </div>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader.vue'
import Panel from './../components/Panel.vue'
export default {
  name: 'Dashboard',
  components: {
    Panel,
    PageHeader
  },
  methods: {
    saludar () {
      console.log('Hola Mundo!')
    }
  }
}
</script>
