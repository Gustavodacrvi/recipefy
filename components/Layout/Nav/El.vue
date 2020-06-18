<template functional>
  <div class="El" :class="{notActive: !props.active}" :id="`nav-${props.route}`">
    <router-link :to='props.route'>
      <slot></slot>
    </router-link>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'

export default Vue.extend({
  props: ['route', 'active']
})

</script>

<style lang="sass" scoped>

.El
  position: relative
  padding: 8px 26px
  z-index: 2
  font-size: 17px
  font-family: "Open Sans Bold"
  transform: scale(1,1)
  transition-duration: .2s

  &:active
    transform: scale(.91,.91)

.El + .El
  margin-left: 14px

a
  text-decoration: none
  outline: none
  color: white
  transition-duration: .2s

.notActive a:hover
  color: var(--main)

</style>
