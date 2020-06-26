<template>
  <div class="LandingPage">
    <Header/>
    <FilterAnimations/>
    <WineSelection/>

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

export default Vue.extend({
  components: {
    Header,
    FilterAnimations,
    WineSelection,
  },
})

</script>

<style lang="sass">

.LandingPage
  .landing-page-section
    margin-top: 100px

  h1, h2
    text-align: center

</style>
