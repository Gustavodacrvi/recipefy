<template>
  <div class="CardContent">
    <div class="wrapper" :class="{visible}">
      <div class="color-wrapp"
        :style="{backgroundColor: color}"
      >
        <div class="parallax-svg"></div>
      </div>
      <div
        class="title"
        :style="{
          color: `${visible ? 'white' : color} !important`,
        }"
      >
        <div
          class="tag"
          :style="{
            backgroundColor: visible ? color : '',
          }"
        >
          <Icon
            :icon='icon'
            color='currentColor'
          />
          <span class="label">{{ title }}</span>
        </div>
      </div>
      <div class="content">
        <transition name="cont">
          <p v-show="visible">
            {{ content }}
          </p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

import Icon from '@/components/Icon/index.vue'

export default {
  props: ['icon', 'title', 'visible', 'content', 'color'],
  components: {
    Icon,
  },
}

</script>

<style lang="sass">

.LandingPageCard .color-wrapp,
.LandingPageCard .wrapper,
.LandingPageCard .parallax-svg,
.LandingPageCard path,
.LandingPageCard .label,
.LandingPageCard p,
.LandingPageCard .tag,
  transition-duration: .35s
  transition-timing-function: ease-in-out

</style>

<style lang="sass" scoped>

.CardContent
  min-height: 240px
  flex-basis: 700px

.tag, .content, .CardContent
  display: flex
  align-items: center

.wrapper, .color-wrapp, .tag
  border-radius: 30px

.parallax-svg
  opacity: 0
  height: 100%
  width: 100%

.wrapper
  display: flex
  flex-shrink: 0
  flex-direction: column
  background-color: var(--faded-gray)
  padding: 40px
  height: 121px
  box-sizing: border-box
  width: 100%
  position: relative
  overflow: hidden
  transition-delay: .3s

.color-wrapp
  position: absolute
  left: 0
  top: 50%
  overflow: hidden
  transform: translateY(-50%)
  width: 100%
  opacity: .3
  height: 100%
  transition-delay: .35s
  z-index: 1
  clip-path: circle(35px at 70px 60px)

.title, .content
  position: relative
  z-index: 2

.content
  flex-basis: 100%
  color: white
  margin: 16px 30px

  p
    font-size: 20px
    line-height: 33px
    font-family: "Open Sans Semibold"
    margin: 0

.tag
  padding: 0
  display: inline-flex

  .label
    font-size: 30px
    margin-left: 30px
    font-family: "Open Sans Bold"

  .Icon
    transform: translateY(3px)
    margin-left: 12px

.visible
  height: 240px
  padding: 12px

  .parallax-svg
    opacity: 1 !important

  .color-wrapp
    clip-path: circle(650px at 70px 135px)
    transition-delay: 0s
    opacity: 1

  .tag
    padding: 6px 26px

    .label
      font-size: 25px
      margin-left: 14px
      font-family: "Open Sans Bold"

    .Icon
      margin-left: 0

.cont-enter, .cont-leave-to
  opacity: 0

.cont-enter-to
  transition-delay: .68s
  opacity: 1

.cont-leave
  transition-delay: 0
  opacity: 1

</style>

