<template functional>
  <div
    class="Display"
    :class="{active: props.active}"
    :style="{
      width: props.width || '250px',
      height: props.height || '225px',
    }"
  >
    <div
      class="img"
      :style="{
        backgroundImage: `url(${props.src})`,
      }"
    ></div>
    <div class="content">
      <span>{{ props.title }}</span>
    </div>
  </div>
</template>

<script>

export default {
  props: ['src', 'width', 'height', 'title', 'active'],
}

</script>

<style lang="sass" scoped>

.content
  position: absolute
  width: 100%
  bottom: 12px
  font-size: 18px
  display: flex
  justify-content: center
  padding: 0 16px
  box-sizing: border-box
  aling-text: center
  opacity: 0
  transition-duration: .2s
  transition-timing-function: ease-in-out
  transform: translateY(8px)
  visibility: hidden

  span
    display: inline-block
    font-family: "Open Sans Bold"

.Display
  position: relative

  .img
    width: 100%
    height: 100%
    filter: brightness(1)
    transition: filter .2s ease-in-out 0s
    background-position: center
    background-origin: center
    background-size: cover

.active .img, .Display:hover .img
  filter: brightness(.4)

.active .content, .Display:hover .content
  transform: translateY(0px) !important
  opacity: 1 !important
  visibility: visible

</style>
