<template>
  <div class="Header">
    <span>{{ displayNumber }}%</span>
    <slot></slot>
  </div>
</template>

<script>

export default {
  props: ['value'],
  data() {
    return {
      displayNumber: 0,
      interval: null,
    }
  },
  created() {
    this.displayNumber = this.number ? this.number : 0
  },
  computed: {
    number() {
      return Math.trunc(this.value * 100)
    },
  },
  watch: {
    number() {
      clearInterval(this.interval)
      if (this.number === this.displayNumber) {
        return;
      }

      this.interval = setInterval(() => {
        if (this.displayNumber !== this.number) {
          let change = (this.number - this.displayNumber) / 10
          change = change >= 0 ? Math.ceil(change) : Math.floor(change)
          this.displayNumber = this.displayNumber + change
        }
      }, 60)
    },
  },
}

</script>

<style lang='sass' scoped>

.Header
  left: 50%
  transform: translateX(-50%)
  top: -29px
  font-size: 25px
  background-color: var(--green)
  padding: 14px 48px
  color: white
  font-family: 'Quicksand Bold'
  white-space: nowrap
  border-radius: 30px
  position: absolute

</style>
