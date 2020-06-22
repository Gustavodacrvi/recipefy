<template>
  <div class="Animation" :class="{visible, right, run}">
    <div class="wrapper">

    </div>
  </div>
</template>

<script>

export default {
  props: ['animationName', 'run', 'visible', 'right'],
}

</script>

<style lang="sass" scoped>

.Animation, .wrapper
  transition-duration: .35s
  transition-timing-function: ease-in-out

.Animation
  position: relative
  z-index: -1
  display: flex
  align-items: center
  flex-basis: 300px
  height: 240px
  transform: translateX(-300px)

.wrapper
  height: 0
  border-top-right-radius: 30px
  border-bottom-right-radius: 30px
  width: 100%
  transition: height .05s ease-in-out .35s
  background-color: var(--dark-green)

.right
  transform: translateX(300px) !important

  .wrapper
    border-radius: 0
    border-top-left-radius: 30px
    border-bottom-left-radius: 30px

.visible
  transform: translateX(-60px)
  transition: transform .35s ease-in-out .68s

  .wrapper
    height: 240px
    transition: height .35s ease-in-out .35s

.right.visible
  transform: translateX(60px) !important

</style>
