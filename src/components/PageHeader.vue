<template>
  <header id="page-header" class="mb-6">
    <h2 class="text-2xl font-semibold">{{ title }}</h2>
  </header> <!-- end of #page-header -->
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: { type: String }
  }
}
</script>
