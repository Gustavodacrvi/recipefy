<template functional>
  <div class="Wine round-card" :class="{active: props.active}">
    <div v-for="i in 3" :key="i"
      class="faded-card round-card b1"
      :style="props.active ? {
        transform: `translateY(${i * 12}px) scale(${1 - (i / 35)}, ${1 - (i / 35)})`,
        opacity: .6 / i,
      } : {
        transform: `translateY(0px) scale(1, 1)`,
        opacity: 0,
      }"
    ></div>

    <div class="content">
      <div
        class="wine-img"
        :style="{
          backgroundImage: `url(${props.imageUrl})`,
        }"
      ></div>
      <div
        class="wine-title"
      >
        {{ props.title }}
      </div>
    </div>

  </div>
</template>

<script>

export default {
  props: ['imageUrl', 'title', 'active'],
}

</script>

<style lang='sass' scoped>

.Wine, .faded-card
  transition-duration: .25s
  transition-timing-function: ease-in-out

.Wine
  position: relative
  width: 200px
  padding: 24px
  transform: translateY(0px) scale(1,1)
  color: var(--txt-color)

.Wine.active
  transform: translateY(-10px) scale(1.05,1.05)

.Wine, .faded-card
  background-color: white

.wine-img
  background-size: contain
  background-position: center
  background-repeat: no-repeat
  height: 150px

.wine-title
  margin-top: 24px
  font-family: "Quicksand Bold"
  font-size: 18px
  text-align: center

.content
  position: relative
  z-index: 2

.faded-card
  position: absolute
  top: 0
  left: 0
  z-index: 1
  width: 100%
  height: 100%
  background-color: white

</style>
