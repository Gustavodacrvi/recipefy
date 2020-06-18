<template>
  <div class="Nav flex-centralize" :class="{notHome: !isHome}">
    <div class="background parallax"></div>
    <ToggleLottie class="back"
      width="100%"
      path='backClip'
      :isActive='isHome'
    />
    <div class="wrapper">
      <div class="side logo">
        <span>Recipefy</span>
      </div>
      <div class="middle flex-centralize">
        <div class="backBtn card-radius"
          :style="{width, height, left}"
        ></div>
        <El v-for="el in links"
          :key="el.route"
          :route='el.route'
          :active='activeRoute === el.route'
        >
          {{ el.value }}
        </El>
      </div>
      <div class="side">

      </div>
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'

import El from "./El.vue"
import ToggleLottie from "@/components/Lottie/ToggleLottie.vue"

export default Vue.extend({
  components: {
    El,
    ToggleLottie,
  },
  data() {
    return {
      width: '0px',
      height: '0px',
      left: '0px',
      links: [
        {
          value: 'Home',
          route: '/',
        },
        {
          value: 'Recipes',
          route: '/recipes',
        },
        {
          value: 'Menu Items',
          route: '/menu-items',
        },
        {
          value: 'Products',
          route: '/products',
        },
      ],
    }
  },
  mounted() {
    this.setWidth()
  },
  methods: {
    setWidth() {
      const el = document.getElementById(`nav-${this.activeRoute}`)
      if (el) {
        this.left = el.offsetLeft + 'px'
        this.width = el.offsetWidth + 'px'
        this.height = el.offsetHeight + 'px'
      }
    },
  } as any,
  computed: {
    activeRoute() {
      return this.$route.path
    },
    isHome() {
      return this.activeRoute === '/'
    },
  },
  watch: {
    activeRoute() {
      this.setWidth()
    },
  },
})

</script>

<style lang="sass" scoped>

.wrapper
  display: flex
  margin: 0 80px
  flex-basis: 1200px
  margin-top: 40px
  transition-duration: .2s

  .side
    flex-basis: 25%

  .middle
    position: relative
    flex-basis: 50%

.notHome
  .wrapper
    margin-top: 26px

  .back
    top: 88px

.logo
  font-family: "Open Sans Bold"
  font-size: 25px
  color: var(--main)

.backBtn
  background-color: var(--main)
  left: 0
  top: 0
  position: absolute
  height: 100%
  transition-duration: .2s

.back, .background
  position: absolute
  width: 100%
  z-index: -1

.back
  top: 118px
  left: 0px
  transition-duration: .2s

.background
  height: 800px
  background-image: url('~assets/svg/backHome.svg')

</style>
