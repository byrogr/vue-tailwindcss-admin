<template>
  <button
    type="button"
    :class="[btnClass, colorsVariant]"
    :disabled="disabled"
    @click="action"
  >
    <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <i :class="[icon, iconClass]" v-if="icon !== ''"></i> <span v-if="text !== ''">{{ dinamicText }}</span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: { type: String, default: '' },
    icon: { type: String, default: ''},
    variant: { type: String, default: 'default'},
    type: { type: String, default: 'normal' },
    size: { type: String, default: 'normal' },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  methods: {
    action () {
      this.$emit('action')
    }
  },
  computed: {
    dinamicText () {
      return this.loading == true ? 'Procesando...' : this.text
    },
    btnClass () {
      return {
        "cursor-not-allowed opacity-50": this.loading == true || this.disabled == true,
        "px-4 py-2": this.size == "normal",
        "px-2 py-1": this.size == "sm",
        "rounded-sm max-w-max flex items-center transition duration-300 ease-in-out text-white text-sm": true
      }
    },
    iconClass () {
      return {
        "mr-2": this.text !== '',
      }
    },
    colorsVariant () {
      let _variant
      switch (this.variant) {
        case 'primary':
          if (this.type === 'outline') {
            _variant = "text-blue-500 border border-blue-500 hover:text-white hover:bg-blue-500"
          } else {
            _variant = "bg-blue-500 hover:bg-blue-600"
          }
          break
        case 'secondary':
          if (this.type === 'outline') {
            _variant = "text-gray-500 border border-gray-500 hover:text-white hover:bg-gray-500"
          } else {
            _variant = "bg-gray-500 hover:bg-gray-600"
          }
          break
        case 'success':
          if (this.type === 'outline') {
            _variant = "text-green-500 border border-green-500 hover:text-white hover:bg-green-500"
          } else {
            _variant = "bg-green-500 hover:bg-green-600"
          }
          break
        case 'danger':
          if (this.type === 'outline') {
            _variant = "text-red-500 border border-red-500 hover:text-white hover:bg-red-500"
          } else {
            _variant = "bg-red-500 hover:bg-red-600"
          }
          break
        case 'info':
          if (this.type === 'outline') {
            _variant = "text-blue-300 border border-blue-300 hover:text-black hover:bg-blue-300"
          } else {
            _variant = "text-black bg-blue-300 hover:bg-blue-400"
          }
          break
        case 'warning':
          if (this.type === 'outline') {
            _variant = "text-yellow-500 border border-yellow-500 hover:text-black hover:bg-yellow-500"
          } else {
            _variant = "text-black bg-yellow-500 hover:bg-yellow-600"
          }
          break
        case 'dark':
          if (this.type === 'outline') {
            _variant = "text-gray-900 border border-black hover:text-white hover:bg-black"
          } else {
            _variant = "bg-gray-900 hover:bg-black"
          }
          break
      }
      return _variant
    }
  }
}
</script>
