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
      />
      <Card
        title='Cuisines'
        color='var(--purple)'
        icon='cuisines'
        animationName='globe'
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        :right='true'
      />
      <Card
        title='Intolerances'
        color='var(--red)'
        icon='intolerances'
        animationName='milk'
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      />
      <Card
        title='Meal Types'
        color='var(--yellow)'
        icon='meal-types'
        animationName='plates'
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        :right='true'
      />
      <Card
        title='Meal Types'
        color='var(--yellow)'
        icon='meal-types'
        animationName='plates'
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      />
      <Card
        title='Ingredients'
        color='var(--dark-red)'
        icon='ingredients'
        animationName='ingredients'
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        :right='true'
      />
      <Card
        title='Equipment'
        color='var(--light-purple)'
        icon='equipment'
        animationName='fire'
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
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
