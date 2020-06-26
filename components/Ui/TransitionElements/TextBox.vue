<template>
  <span class="TextBox" :style="{height}">{{ value }}</span>
</template>

<script>

export default {
  props: ['value'],
  data() {
    return {
      str: this.value,
      height: null,
    }
  },
  methods: {
    get() {
      return this.$el.getBoundingClientRect().height + 'px'
    },
  },
  watch: {
    value(val) {
      const oldHeight = this.height || this.get()
      this.str = val
      this.height = 'auto'
      requestAnimationFrame(() => {
        const newHeight = this.get()
        this.height = oldHeight
        requestAnimationFrame(() => {
          this.height = newHeight
        })
      })
    },
  },
}

</script>

<style lang="sass" scoped>

.TextBox
  display: block
  transition-duration: .25s
  transition-timing-function: ease-in-out
  overflow: visible

</style>
