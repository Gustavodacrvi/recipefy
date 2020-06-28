<template functional>
  <div class="Header flex-wrapper">
    <div>
      <img class="img" width="700px" src='~/assets/svg/ingredients.svg'>
    </div>
    <div>
      <h2>Ingredients and Instructions!</h2>

      <p>Don't know how to make it? Don't worry about it! Most recipes provide instructions together with ingredients. You can also easily check them out and come back later to complete it.</p>
    </div>
  </div>
</template>

<script>

export default {}

</script>

<style lang="sass" scoped>

.Header
  display: flex
  font-family: "Open Sans Semibold"
  position: relative

  > div
    flex-basis: 50%

h2
  text-align: left !important

.img
  position: absolute
  left: -200px

</style>
