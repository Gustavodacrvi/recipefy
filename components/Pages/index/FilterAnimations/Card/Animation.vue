<template>
  <div class="Animation" :class="{visible, run}">
    <div class="wrapper">
      <div class="content">
        <Lottie class="lottie" :style="{left}"
          :autoplay='false'
          :width='width + "px"'
          :path='animationName'
          :loop='false'
          ref='lottie'
          @loaded='ins => item = ins'
        />
      </div>
    </div>
  </div>
</template>

<script>

import Lottie from "@/components/Lottie/index.vue"

export default {
  components: {
    Lottie,
  },
  props: ['animationName', 'run', 'visible', 'width', 'autoTranslate', 'left'],
  data() {
    return {
      item: null,
      firstTime: true,
    }
  },
  computed: {
    lottie() {
      return this.$refs.lottie
    },
  },
  watch: {
    run(val) {
      if (val) {
        this.lottie.goForward(this.firstTime)
      } else {
        this.lottie.goBack()
      }
      this.firstTime = false
    },
  },
}

</script>

<style lang="sass" scoped>

.Animation, .wrapper, .content
  transition-duration: .35s
  transition-timing-function: ease-in-out

.Animation
  position: relative
  z-index: -1
  display: flex
  align-items: center
  flex-basis: 250px
  height: 240px
  transform: translateX(-300px)

.content, .wrapper
  border-top-right-radius: 30px
  border-bottom-right-radius: 30px

.wrapper
  height: 0
  width: 100%
  transition: height .05s ease-in-out .35s
  background-color: var(--dark-green)

.content
  height: 0
  display: flex
  position: relative
  left: 0
  width: 300px
  flex-direction: column
  justify-content: flex-end
  overflow: hidden
  transition-delay: 0

.lottie
  transform: translateX(-150px)

.visible
  transform: translateX(-60px)
  transition: transform .35s ease-in-out .68s

  .wrapper
    height: 240px
    transition: height .35s ease-in-out .35s

    .content
      height: 240px
      transition-delay: .35s

// .autoTranslate .lottie
//   transform: translateX(20px) !important

</style>
