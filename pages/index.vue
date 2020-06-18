<template>
  <div class="container">
    <Lottie
      path='chicken'
    />
    <Lottie
      path='wine'
    />
    <Lottie
      path='japanese'
    />
    <Lottie
      path='pan'
    />
  </div>
</template>

<script lang="ts">

import Vue from 'vue'

import Lottie from '@/components/Lottie/index.vue'

export default Vue.extend({
  components: {
    Lottie,
  },
})

</script>

