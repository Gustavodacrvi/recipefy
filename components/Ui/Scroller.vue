<template>
  <div class="Scroller">
    <transition name="fade">
      <div v-show="leftToggle"
        class="toggle left round-card-reversed"
        @click="v => go(false)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="svg" width="16" viewBox="0 0 75.135 121.984">
          <path d="M-10471.735-6466.147l46.85,46.85-46.85,46.85" transform="translate(10485.878 6480.29)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"/>
        </svg>
      </div>
    </transition>
    <div class="wrapper" ref="wrapper">
      <slot v-for="item in list"
        v-bind:item="item"
      ></slot>
    </div>
    <transition name="fade">
      <div v-show="rightToggle"
        class="toggle right round-card-reversed"
        @click="v => go(true)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="svg" width="16" viewBox="0 0 75.135 121.984">
          <path d="M-10471.735-6466.147l46.85,46.85-46.85,46.85" transform="translate(10485.878 6480.29)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="20"/>
        </svg>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  props: {
    list: {
      default: () => [],
    },
  },
  data() {
    return {
      rightToggle: false,
      leftToggle: false,
    }
  },
  mounted() {
    this.calc({})
  },
  methods: {
    calc({
      newScroll = this.getNewScroll(),
      scrollLeft = this.scroller().scrollLeft
    }) {
      this.rightToggle = newScroll < this.scroller().scrollWidth
      this.leftToggle = (0 < scrollLeft)
    },
    go(dire) {
      const scroller = this.scroller()


      if (dire) {
        const newScroll = this.getNewScroll()
        scroller.scrollLeft = newScroll
        this.calc({
          newScroll: scroller.clientWidth + newScroll,
          scrollLeft: newScroll,
        })
      } else {
        const scrollLeft = (scroller.scrollLeft - scroller.clientWidth)
        scroller.scrollLeft = scrollLeft
        this.calc({
          newScroll: scrollLeft + scroller.clientWidth,
          scrollLeft,
        })
      }
    },
    scroller() {
      return this.$refs.wrapper
    },
    getNewScroll() {
      const scroller = this.scroller()
      return Math.floor(scroller.clientWidth + scroller.scrollLeft)
    },
  },
  watch: {
    list() {
      this.$nextTick(() => {
        this.calc({})
      })
    },
  },
}

</script>

<style lang='sass' scoped>

.Scroller
  position: relative
  overflow-y: visible
  display: flex
  justify-content: center

.wrapper
  max-width: 100%
  display: flex !important
  margin-top: -50px
  margin-bottom: -50px
  padding-top: 50px
  padding-bottom: 50px
  flex-wrap: nowrap
  scroll-behavior: smooth
  overflow-x: hidden
  -webkit-overflow-scrolling: touch
  -ms-overflow-style: -ms-autohiding-scrollbar

.toggle
  position: absolute
  top: 50%
  z-index: 3
  background-color: white
  padding: 13px 20px
  transform: translateY(-50%)
  cursor: pointer
  color: var(--txt-color)
  transition-duration: .2s
  transition-timing-function: ease-in-out

  &:hover
    color: white

.svg
  transform: translateY(3px)

.toggle:hover
  background-color: var(--blue)

.right
  right: -70px

.left
  left: -70px

  .svg
    transform: scale(-1, 1)

</style>
