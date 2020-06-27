<template>
  <div
    class="ImgComp"
    :class="{active}"
  >
    <div class="color white round-card"></div>
    <div class="color purple round-card"></div>
    <div class="wrapper round-card">
      <Display
        v-bind="$attrs"
        :active='active'
      />
    </div>
  </div>
</template>

<script>

import Display from '@/components/Ui/Images/Display.vue'

export default {
  props: ['active'],
  components: {
    Display,
  },
}

</script>

<style lang="sass" scoped>

.color
  transform: translate(0px, 0px)
  transition: transform .2s ease-in-out 0s

.ImgComp
  position: relative

  .wrapper
    overflow: hidden
    background-color: red

  > .color
    position: absolute
    width: 100%
    height: 100%

.white
  background-color: white

.purple
  background-color: var(--purple)

.active
  .white
    transform: translate(-28px, 28px)
  .purple
    transform: translate(-14px, 14px)

</style>
