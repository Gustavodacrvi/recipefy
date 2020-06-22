<template>
  <div class="Card LandingPageCard" :class="{right}">
    <Animation v-if="right"
      :visible="visible"
      :right='right'
      :run='run'
      :animationName="animationName"
    />
    <Content v-bind="$props" :visible='visible'/>
    <Animation v-if="!right"
      :visible="visible"
      :right='k'
      :run='run'
      :animationName="animationName"
    />
  </div>
</template>

<script>

import Content from './Content.vue'
import Animation from './Animation.vue'

export default {
  components: {
    Content,
    Animation,
  },
  props: ['icon', 'title', 'animationName', 'content', 'color', 'left', 'right'],
  data() {
    return {
      visible: false,
      timeout: null,
      runTimeout: null,
      run: false,
    }
  },
  mounted() {
    this.isScrolledIntoView()
    window.addEventListener('scroll', this.isScrolledIntoView, {passive: true})
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.isScrolledIntoView, {passive: true})
  },
  methods: {
    isScrolledIntoView() {
      if (this.timeout) {
        this.timeout = null
        clearTimeout(this.timeout)
      }

      this.timeout = setTimeout(() => {
        const rect = this.$el.getBoundingClientRect()
        const elemTop = rect.top
        const elemBottom = rect.bottom

        const visible = (elemTop >= 0) && (elemBottom <= window.innerHeight)
        this.visible = visible
      }, 200)
    },
  },
  watch: {
    visible(val) {
      const clear = () => {
        this.run = false
        if (this.runTimeout)
          clearTimeout(this.runTimeout)
      }

      if (val) {
        clear()
        this.runTimeout = setTimeout(() => this.run = true, 680)
      } else {
        clear()
      }
    },
  },
}

</script>

<style lang="sass" scoped>

.Card
  display: flex
  margin: 14px 0

.right
  justiy-content: flex-end

</style>
