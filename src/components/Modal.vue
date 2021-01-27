<template>
  <transition name="modal-fade">
    <div class="modal-overlay fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center bg-gray-700 bg-opacity-30">
      <div
        class="modal-container bg-white overflow-x-auto shadow-md flex flex-col w-1/2 h-1/2 rounded-sm"
        role="dialog"
        aria-labelledby="modal-title"
        aria-describedby="modal-content"
      >
        <div id="modal-title" class="modal-header border-b border-gray-300 px-8 py-6" v-show="withHeader">
          <slot name="header">
            <h2 class="text-xl">{{ title }}</h2>
          </slot>
        </div> <!-- end of .modal-header -->
        <div id="modal-content" class="modal-body relative overflow-visible px-8 py-6 h-full">
          <slot />
        </div> <!-- end of .modal-body -->
        <div class="modal-footer flex px-8 py-6">
          <slot name="footer">
            <btn variant="dark" text="Cerrar" @action="close" icon="fas fa-times" />
          </slot>
        </div> <!-- end of .modal-footer -->
      </div> <!-- end of .modal-container -->
    </div> <!-- end of .modal-overlay -->
  </transition> <!-- end of transition -->
</template>

<script>
import Btn from './Button.vue'
export default {
  name: 'Modal',
  props: {
    title: { type: String, default: '' },
    withHeader: { type: Boolean, default: true }
  },
  components: {
    Btn
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }
</style>
