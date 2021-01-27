<template>
  <table class="border border-gray-300 rounded-sm w-full border-collapse table-fixed">
    <thead class="align-middle bg-gray-100">
      <tr>
        <th
          v-for="column in columns" :key="column.name"
          class="uppercase whitespace-nowrap font-bold p-6 text-sm text-gray-400 tracking-wider"
          :class="[getAlignClass(column.align)]"
          :style="column.headerStyle">
          {{ column.label }}
        </th>
        <th v-if="withActions" class="uppercase whitespace-nowrap font-bold p-6 text-sm text-gray-400 tracking-wider text-center">
          Acciones
        </th>
      </tr>
    </thead> <!-- end of thead -->
    <tbody>
      <tr
        v-for="(item, index) in data" :key="index"
        class="border-t border-b border-gray-300"
      >
        <td
          v-for="(column, index) in columns" :key="index"
          :class="[getAlignClass(column.align)]"
          class="p-6 text-sm"
        >
          {{ item[column.field] }}
        </td>
        <td v-if="withActions" class="flex items-center justify-center p-6">
          <slot name="actions" :row="item"></slot>
        </td>
      </tr>
    </tbody> <!-- end of tbody -->
  </table> <!-- end of table -->
</template>

<script>
export default {
  name: 'Datatable',
  props: {
    columns: { type: Array, required: true },
    data: { type: Array, requried: true },
    withActions: { type: Boolean, default: false }
  },
  methods: {
    getAlignClass (align) {
      let alignClass
      switch (align) {
        case 'center':
          alignClass = 'text-center'
          break
        case 'right':
          alignClass = 'text-right'
          break
        default:
          alignClass = 'text-left'
      }
      return alignClass
    }
  }
}
</script>
