<template>
  <div class="Card LandingPageCard" :class="{right}">
    <Animation v-if="right"
      :visible="isActive"
      :right='right'
      :run='run'
      :animationName="animationName"
    />
    <Content v-bind="$props" :visible='isActive'/>
    <Animation v-if="!right"
      :visible="isActive"
      :right='right'
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
  props: ['icon', 'title', 'animationName', 'content', 'color', 'left', 'right',, 'isActive'],
  data() {
    return {
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
        if (!this.isActive) {
          const {top, bottom} = this.$el.getBoundingClientRect()
          const heightDivided = window.innerHeight / 2
          const offset = 300
          const min = heightDivided - offset
          const max = heightDivided + offset

          if ((top > 0) && (top > min && bottom < max))
            this.$emit('set-visibility')
          else if (this.run)
            this.run = false
        }
      }, 300)
    },
  },
  watch: {
    isActive(val) {
      const clear = () => {
        this.run = false
        if (this.runTimeout)
          clearTimeout(this.runTimeout)
      }

      if (val) {
        clear()
        this.runTimeout = setTimeout(() => this.run = true, 800)
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
  margin: 75px 0

.right
  justiy-content: flex-end

</style>
