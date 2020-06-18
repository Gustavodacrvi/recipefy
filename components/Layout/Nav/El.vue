<template functional>
  <div class="El" :id="`nav-${props.route}`">
    <router-link :to='props.route'>
      <slot></slot>
    </router-link>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'

export default Vue.extend({
  props: ['route']
})

</script>

<style lang="sass" scoped>

.El
  position: relative
  padding: 8px 26px
  z-index: 2

.El + .El
  margin-left: 14px

a
  text-decoration: none
  outline: none
  color: var(--txt-color)

</style>
