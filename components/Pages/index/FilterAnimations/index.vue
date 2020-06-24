<template>
  <div class="FilterAnimations flex-centralize landing-page-section">
    <div class="wrapper">
      <h1>All you'll ever need</h1>

      <Card
        title='Diets'
        color='var(--orange)'
        icon='diets'
        animationName='peso'
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        :isActive='active === 0'
        @set-visibility='num => active = 0'
      />
      <Card
        title='Cuisines'
        color='var(--purple)'
        icon='cuisines'
        animationName='globe'
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        :right='true'
        :num='1'
        :isActive='active === 1'
        @set-visibility='num => active = 1'
      />
      <Card
        title='Intolerances'
        color='var(--red)'
        icon='intolerances'
        animationName='milk'
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        :num='2'
        :isActive='active === 2'
        @set-visibility='num => active = 2'
      />
      <Card
        title='Meal Types'
        color='var(--yellow)'
        icon='meal-types'
        animationName='plates'
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        :right='true'
        :num='3'
        :isActive='active === 3'
        @set-visibility='num => active = 3'
      />
      <Card
        title='Ingredients'
        color='var(--dark-red)'
        icon='ingredients'
        animationName='ingredients'
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        :num='4'
        :isActive='active === 4'
        @set-visibility='num => active = 4'
      />
      <Card
        title='Equipment'
        color='var(--light-purple)'
        icon='equipment'
        animationName='fire'
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        :right='true'
        :num='5'
        :isActive='active === 5'
        @set-visibility='num => active = 5'
      />

    </div>
  </div>
</template>

<script>

import Card from "./Card.vue"

export default {
  components: {
    Card,
  },
  data() {
    return {
      active: undefined,
    }
  },
}

</script>

<style lang='sass' scoped>

.wrapper
  flex-basis: 1200px

  h1
    text-align: center

.left, .right
  display: flex

.right
  justify-content: flex-end

</style>
