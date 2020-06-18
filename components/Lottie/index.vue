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
  'japanese',
  'pan',
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
    name: {
      type: String,
    },
    container: {
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
      if (!animations[this.path])
        throw `${this.path} animation doesnt exit`
      lottie.loadAnimation({
        renderer: 'svg',
        ...this.$attrs as any,
        container: this.getContainer,
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

<style>

</style>
