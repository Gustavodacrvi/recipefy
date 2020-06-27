<template>
  <div class="Lottie"
    :style="{width}"
  ></div>
</template>

<script lang='ts'>

import Vue from 'vue'
import lottie from 'lottie-web'

const animations: any = [
  'chicken',
  'wine',
  'peso',
  'japanese',
  'pan',
  'backClip',
  'fire',
  'globe',
  'ingredients',
  'milk',
  'plates',
  'gear',
  'wine',
].reduce((obj, key) => ({...obj, [key]: () => import(/* webpackChunkName: "animation" */ `@/assets/animations/${key}.json`)}), {})

export default Vue.extend({
  props: {
    path: {
      type: String,
      default: 'chicken'
    },
    width: {
      type: String,
      default: '100px',
    },
    container: {
      type: String,
    },
  },
  data() {
    return {
      item: null as any,
    }
  },
  async mounted() {
    this.load()
  },
  beforeDestroy() {
    this.destroy()
  },
  methods: {
    async load() {
      if (!animations[this.path])
        throw `${this.path} animation doesn't exit`
      this.item = lottie.loadAnimation({
        renderer: 'svg',
        ...this.$attrs as any,
        container: this.getContainer,
        name: this.path,
        animationData: (await animations[this.path]()).default,
      })
      this.$emit('loaded', this.item)
    },
    play() {
      lottie.play(this.path)
    },
    goForward(isFirstTime = false) {
      if (!isFirstTime)
        this.setDirection(1)
      this.play()
    },
    goBack() {
      this.setDirection(-1)
      this.play()
    },
    stop() {
      lottie.play(this.path)
    },
    setDirection(num: -1 | 1) {
      this.item.setDirection(num, this.path)
    },
    destroy() {
      lottie.play(this.path)
    },
    getDuration(): any {
      return this.item ? this.item.getDuration(true) : null
    },
    toggleOn(reverseDirection = true) {
      if (reverseDirection)
        this.setDirection(-1)
      this.play()
    },
    toggleOff() {
      this.setDirection(1)
      this.play()
    },
  },
  computed: {
    getContainer(): HTMLElement {
      if (this.container) {
        const target = document.getElementById(this.container)
        if (!target)
          throw `${this.container} target container not found`
        return target as any
      }
      return this.$el as any
    },
  },
  watch: {
    path() {
      this.load()
    },
  },
})

</script>

<style lang='sass' scoped>

.Lottie
  position: relative

</style>
