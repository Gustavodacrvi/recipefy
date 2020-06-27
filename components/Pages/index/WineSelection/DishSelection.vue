<template>
  <div class="DishSelection flex-centralize">
    <div class="wrapper parallax-svg">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      <h3>Select Dish:</h3>
      <div class="dishes">
        <ImgComp v-for="item in dishes" :key="item.id"
          v-bind="item"
          :active="selected === item.id"
          @click.native="selected = item.id"
        />
      </div>
    </div>
  </div>
</template>

<script>

import ImgComp from './ImgComp.vue'

export default {
  props: ['value'],
  components: {
    ImgComp,
  },
  data() {
    return {
      selected: this.value || 1,
      dishes: [
        {
          id: 1,
          content: `1`,
          title: 'Cannoli',
          src: 'https://webknox.com/recipeImages/636910-556x370.jpg',
        },
        {
          id: 2,
          content: `2`,
          title: 'Chilled Cucumber Avocado Soup with Yogurt and Kefir',
          src: 'https://webknox.com/recipeImages/716437-556x370.jpg',
        },
        {
          id: 3,
          content: `3`,
          title: 'Pan Seared Salmon',
          src: 'https://webknox.com/recipeImages/654435-556x370.jpg',
        },
      ],
    }
  },
  watch: {
    selected() {
      this.$emit('input', this.selected)
    },
  },
}

</script>

<style lang="sass" scoped>

.DishSelection
  display: flex

.wrapper
  padding: 26px
  color: white
  font-family: "Quicksand"
  flex-basis: 900px
  border-top-left-radius: 50px
  border-top-right-radius: 150px

h3
  font-family: "Quicksand Bold"
  color: var(--main)

.dishes
  margin: 24px 40px
  display: flex
  justify-content: space-between

</style>
