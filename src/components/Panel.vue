<template>
  <div class="panel bg-white border border-gray-300 rounded-sm">
    <div class="panel-header p-4 border-b border-gray-300 flex items-center justify-between" v-show="withHeader">
      <h2 class="text-xl font-medium">{{ title }}</h2>
      <div class="panel-tools">
        <slot name="tools" />
      </div> <!-- end of .panel-tools -->
    </div> <!-- end of .panel-header -->
    <div class="panel-body p-4">
      <slot />
    </div> <!-- end of .pane-body -->
  </div> <!-- end of .panel -->
</template>

<script>
export default {
  name: 'Panel',
  props: {
    title: { type: String, default: 'Panel' },
    withHeader: { type: Boolean, default: true }
  }
}
</script>
