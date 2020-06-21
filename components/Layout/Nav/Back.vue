<template>
  <div class="background parallax" :class="{notActive: !active, active}">
    <ToggleLottie class="back"
      width="100%"
      path='backClip'
      :isActive='active'
      ref='lottie'
    />
    <transition name="fade">
      <div v-if="active && finalToHomeTransition"
        class="content"
        :style="{height}"
      >
        <div class="animations-wrapper">

        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'

import ToggleLottie from "@/components/Lottie/ToggleLottie.vue"

let timeout: any = null

export default Vue.extend({
  props: ['active'],
  components: {
    ToggleLottie,
  },
  mounted() {
    this.calc()
    window.addEventListener('resize', this.listener)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.listener)
  },
  data() {
    return {
      height: '900px',
      finalToHomeTransition: this.active,
    }
  },
  methods: {
    listener() {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }

      timeout = setTimeout(this.calc, 300)
    },
    calc() {
      setTimeout(() => {
        const comp = this.$refs.lottie as Vue
        if (comp) {
          this.height = comp.$el.getBoundingClientRect().height + 'px'
        }
      }, 150)
    },
  },
  watch: {
    active() {
      if (!this.active)
        this.finalToHomeTransition = false
      else
        setTimeout(() => this.finalToHomeTransition = true, 350)
    },
  },
})

</script>

<style lang="sass" scoped>

.background
  position: relative
  height: 810px
  background-image: url('~assets/svg/backHome.svg')
  transition-duration: .5s
  transition-timing-function: ease-in-out

.back, .background
  position: absolute
  width: 100%
  z-index: -1

.back
  transform: translateY(12px)
  left: 0px
  bottom: 0
  transition-duration: .2s

.notActive
  height: 175px !important

.content
  position: absolute
  bottom: 0
  transform: translateY(12px)
  background-color: red
  z-index: -2
  width: 100%

.animations-wrapper
  position: relative
  height: 100%
  width: 100%

@media (min-width: 1500px)
  .background
    height: 1050px

</style>
