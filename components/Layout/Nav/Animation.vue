<template>
  <div class="Animation parallax"
    :class="path"
    :style="{
      left, top, width,
      height: width,
    }"
  >
    <div class="wrapper">
      <Lottie
        :width='lottieWidth'
        :path="path"
      />
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'

import Lottie from '@/components/Lottie/index.vue'

export default Vue.extend({
  components: {
    Lottie,
  },
  props: ['path', 'left', 'top', 'width', 'x', 'y', 'plus'],
  computed: {
    lottieWidth() {
      return (parseInt(this.width, 10) + 50) + 'px'
    },
  },
})

</script>

<style lang='sass' scoped>

.Animation
  position: absolute
  border-radius: 24px
  border-top-right-radius: 80px
  border-bottom-left-radius: 80px

.wrapper
  position: relative
  height: 100%

</style>
