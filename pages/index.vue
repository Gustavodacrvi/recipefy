<template>
  <div class="LandingPage">
    <Header/>
    <FilterAnimations/>
    <WineSelection/>
    <IngredientsAndInstructions/>

    <p>asdf asdf asdf asdf asdf asdf</p>
    <p>asdf asdf asdf asdf asdf asdf</p>
    <p>asdf asdf asdf asdf asdf asdf</p>
    <p>asdf asdf asdf asdf asdf asdf</p>
    <p>asdf asdf asdf asdf asdf asdf</p>
    <p>asdf asdf asdf asdf asdf asdf</p>
    <p>asdf asdf asdf asdf asdf asdf</p>
    <p>asdf asdf asdf asdf asdf asdf</p>
    <p>asdf asdf asdf asdf asdf asdf</p>
    <p>asdf asdf asdf asdf asdf asdf</p>
    <p>asdf asdf asdf asdf asdf asdf</p>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'

import Header from '@/components/Pages/index/Header.vue'
import FilterAnimations from '@/components/Pages/index/FilterAnimations/index.vue'
import WineSelection from '@/components/Pages/index/WineSelection/index.vue'
import IngredientsAndInstructions from '@/components/Pages/index/IngredientsAndInstructions/index.vue'

export default Vue.extend({
  components: {
    Header,
    FilterAnimations,
    WineSelection,
    IngredientsAndInstructions,
  },
})

</script>

<style lang="sass">

.LandingPage
  font-size: 18px

  p
    line-height: 38px

  .landing-page-section
    margin-top: 100px

  h1, h2
    text-align: center

.landing-page-section
  margin: 50px 0

.flex-wrapper
  flex-basis: 1200px

</style>
