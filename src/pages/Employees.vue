<template>
  <div>
    <panel title="Employees">
      <template v-slot:tools>
        <btn variant="primary" text="Nuevo" icon="fas fa-plus" size="sm" type="outline" @action="showModal = true" />
      </template>
      <datatable :columns="columns" :data="dataset" with-actions>
        <template v-slot:actions="props">
          <btn class="mr-2" variant="primary" text="Editar" icon="fas fa-edit" @action="edit(props.row.id)" />
          <btn variant="danger" text="Eliminar" icon="fas fa-trash-alt" @action="del(props.row.id)" />
        </template>
      </datatable>
    </panel>
    <modal title="Nuevo empleado" @close="closeModal" v-if="showModal">
      mi modal
    </modal>
  </div>
</template>

<script>
import Panel from './../components/Panel.vue'
import Btn from './../components/Button.vue'
import Modal from './../components/Modal.vue'
import Datatable from './../components/Datatable.vue'
export default {
  name: 'Employees',
  components: {
    Panel,
    Btn,
    Modal,
    Datatable
  },
  data () {
    return {
      showModal: false,
      columns: [
        {
          name: 'id',
          field: 'id',
          label: '#',
          align: 'center'
        },
        {
          name: 'name',
          field: 'name',
          label: 'Nombre completo'
        },
        {
          name: 'address',
          field: 'address',
          label: 'Dirección'
        }
      ],
      dataset: [
        {
          id: 1,
          name: 'Roger Rojas',
          address: 'Av. Fernando Teran 184'
        },
        {
          id: 2,
          name: 'Yesenia Moraless',
          address: 'Av. Fernando Teran 184'
        }
      ]
    }
  },
  methods: {
    closeModal () {
      this.showModal = false
    },
    edit (id) {
      console.log(`Editar ${id}`)
    },
    del (id) {
      console.log(`Eliminar ${id}`)
    }
  }
}
</script>
