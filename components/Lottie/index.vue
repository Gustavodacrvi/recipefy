<template>
  <div class="Lottie"
    :style="{width, height}"
  ></div>
</template>

<script lang='ts'>

import Vue from 'vue'
import lottie from 'lottie-web'

const animations: any = [
  'chicken',
].reduce((obj, key) => ({...obj, [key]: () => import(/* webpackChunkName: "animation" */ `@/assets/animations/${key}.json`)}), {})

export default Vue.extend({
  props: {
    path: {
      type: String,
      default: 'chicken'
    },
    width: {
      type: String,
      default: '175px',
    },
    height: {
      type: String,
      default: '175px',
    },
    name: {
      type: String,
    },
  },
  async mounted() {
    this.load()
  },
  beforeDestroy() {
    this.destroy()
  },
  methods: {
    async load() {
      lottie.loadAnimation({
        container: this.$el,
        renderer: 'svg',
        ...this.$attrs as any,
        name: this.name,
        animationData: (await animations[this.path]()).default,
      })
    },
    play() {
      lottie.play(this.name)
    },
    stop() {
      lottie.play(this.name)
    },
    destroy() {
      lottie.play(this.name)
    },
  },
  watch: {
    path() {
      this.load()
    },
  },
})

</script>

<style>

</style>
