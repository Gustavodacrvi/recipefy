<template>
  <div class="Ingredient" @click='click'>
    <div class="icon-wrapper">
      <div class='icon'>
        <div class='back'></div>
        <ToggleLottie class='lottie'
          path='circle-checkmark'
          width='30px'
          :isActive='!completed'
          :id='id'
        />
      </div>
    </div>
    <div class="content">
      {{ name }}
    </div>
  </div>
</template>

<script>

import ToggleLottie from '@/components/Ui/Lottie/ToggleLottie.vue'

export default {
  components: {
    ToggleLottie,
  },
  props: ['id', 'name', 'completed', 'unit'],
  methods: {
    click() {
      this.$emit('click', this.id)
    },
  },
}

</script>

<style lang='sass' scoped>

.Ingredient
  display: flex
  padding: 12px

.icon-wrapper
  flex-basis: 50px
  transform: translateY(-2px)
  display: flex
  justify-content: center
  align-items: center

.icon, .back
  transition-duration: .2s
  transition-timing-function: .35s

.icon
  position: relative
  height: 30px
  width: 30px

  .lottie
    position: relative
    z-index: 2

.back
  border-radius: 100px
  background-color: transparent
  position: absolute
  width: 100%
  height: 100%
  z-index: 1
  cursor: pointer

  &:hover
    background-color: rgba(161, 193, 129, .2)

</style>
