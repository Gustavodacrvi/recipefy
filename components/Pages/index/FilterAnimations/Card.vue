<template>
  <div class="Card">
    <div class="wrapper">
      {{ isVisible }}
      {{ title }}
      <Icon
        :icon='icon'
      />
    </div>
  </div>
</template>

<script>

import Icon from '@/components/Icon/index.vue'

export default {
  components: {
    Icon,
  },
  props: ['icon', 'title', 'animationName', 'content', 'color'],
  data() {
    return {
      isVisible: false,
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
      const rect = this.$el.getBoundingClientRect()
      const elemTop = rect.top
      const elemBottom = rect.bottom

      const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight)
      this.isVisible = isVisible
    },
  },
}

</script>

<style lang="sass" scoped>

.Card
  height: 260px
  display: flex
  align-items: center

</style>
