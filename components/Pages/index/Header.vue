<template functional>
  <div class="Header flex-centralize">
    <div class="wrapper">
      <div>
        <h1>The best<br>Recipe<br>Aggregator</h1>
        <p>
          The biggest database with ingredients<br> and nutritional information of more<br> than 360k recipes!
        </p>
        <nuxt-link class="button" to="/recipes">
          Explore
        </nuxt-link>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>

export default {

}

</script>

<style lang="sass" scoped>

.wrapper
  flex-basis: 1300px
  margin: 0 140px
  margin-top: 12px
  display: flex

h1
  font-size: 60px

p
  color: white
  font-size: 22px
  line-height: 35px
  font-family: "Quicksand Bold"

a
  text-decoration: none
  margin-top: 25px
  display: inline-block

</style>
