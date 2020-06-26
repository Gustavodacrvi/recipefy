<template>
  <Lottie class="back"
    v-bind="$attrs"

    path='backClip'
    :autoplay='false'
    :loop='false'
    ref='lottie'
    @loaded='firstActivation'
  />
</template>

<script lang="ts">

import Vue from 'vue'

import Lottie from './index.vue'

export default Vue.extend({
  props: ['isActive'],
  components: {
    Lottie,
  },
  data() {
    return {
      lastFrame: null,
      item: null,
    }
  },
  methods: {
    firstActivation(item: any) {
      this.$emit('loaded', item)
      this.item = item
      this.lastFrame = this.lottie.getDuration()
      if (!this.isActive) {
        item.goToAndStop(this.lastFrame, true)
      }
    },
    activate() {
      if (this.isActive)
        return this.lottie.toggleOn()
      return this.lottie.toggleOff()
    },
  } as any,
  computed: {
    lottie() {
      return this.$refs.lottie
    },
  },
  watch: {
    isActive() {
      this.activate()
    },
  },
})

</script>
