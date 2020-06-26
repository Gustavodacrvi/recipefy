<template>
  <div class="background parallax" :class="{notActive: !active, active}">
    <ToggleLottie class="back"
      width="100%"
      path='backClip'
      :isActive='active'
      ref='lottie'
      @loaded='calc'
    />
    <div
      class="content"
      :style="{height: height + 'px'}"
    >
      <div class="animations-wrapper">
        <transition-group name='transform'>
          <Animation v-if="active && finalToHomeTransition"
            key='1'
            :width='ratio(338)'
            :left="ratio(1230)"
            :top="ratio(24)"
            path='pan'
          />
          <Animation v-if="active && finalToHomeTransition"
            key='2'
            :width='ratio(200)'
            :left="ratio(850)"
            :top="ratio(420)"
            path='japanese'
          />
          <Animation v-if="active && finalToHomeTransition"
            key='3'
            :width='ratio(280)'
            :left="ratio(1144)"
            :top="ratio(462)"
            path='chicken'
          />
          <Animation v-if="active && finalToHomeTransition"
            key='4'
            :width='ratio(220)'
            :left="ratio(1557)"
            :top="ratio(556)"
            path='wine'
          />
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'

import ToggleLottie from "@/components/Ui/Lottie/ToggleLottie.vue"
import Animation from "./Animation.vue"

let timeout: any = null

export default Vue.extend({
  props: ['active'],
  components: {
    ToggleLottie,
    Animation,
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
      height: 900,
      width: 1920,
      finalToHomeTransition: this.active,
    }
  },
  methods: {
    ratio(oldNum: number): string {
      return ((oldNum * this.width) / 1920) + 'px'
    },
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
          this.height = comp.$el.getBoundingClientRect().height
          this.width = window.innerWidth
        }
      }, 150)
    },
  },
  watch: {
    active() {
      if (!this.active)
        this.finalToHomeTransition = false
      else
        setTimeout(() => this.finalToHomeTransition = true, 250)
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
  height: 165px !important

.content
  position: absolute
  bottom: 0
  transform: translateY(12px)
  width: 100%

.animations-wrapper
  position: relative
  height: 100%
  width: 100%

.to-mask
  position: absolute
  left: 0
  top: 0
  width: 100%
  background-image: url('~assets/svg/backHome.svg')
  height: 810px


@media (min-width: 1500px)
  .background
    height: 1050px

</style>
