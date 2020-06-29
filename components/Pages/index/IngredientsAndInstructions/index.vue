<template>
  <div class="IngredientsAndInstructions landing-page-section">
    <div class="flex-centralize">
      <Header/>
    </div>

    <div class="flex-centralize">
      <div class="wrapper">
        <div></div>
        <div>
          <ListWrapper
            style="transform: translateX(-65px)"

            :value='list'
            title='Ingredients'
            v-slot="{ item }"
          >
            <Ingredient v-bind="item" @click="toggleItem"/>
          </ListWrapper>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import Header from './Header.vue'
import ListWrapper from "@/components/Ui/Lists/ListWrapper/index.vue"
import Ingredient from "@/components/Ui/Lists/ListWrapper/Ingredient.vue"
import mixin from "@/components/Ui/Lists/ListWrapper/mixin.js"

export default {
  mixins: [mixin('landing-page-ingredients')],
  components: {
    Header,
    ListWrapper,
    Ingredient,
  },
  data() {
    return {
      list: [
        {
          id: 1041009,
          name: "Grated cheese (I used romano)",
          unit: "tbsp",
          amount: 2,
        },
        {
          id: 104100,
          name: "Grated cheese (I used romano)",
          unit: "tbsp",
          amount: 2,
        },
        {
          id: 104103,
          name: "Grated cheese (I used romano)",
          unit: "tbsp",
          amount: 2,
        },
        {
          id: 105103,
          name: "Grated cheese (I used romano)",
          unit: "tbsp",
          amount: 2,
        },
        {
          id: 305103,
          name: "Grated cheese (I used romano)",
          unit: "tbsp",
          amount: 2,
        },
        {
          id: 305303,
          name: "Grated cheese (I used romano)",
          unit: "tbsp",
          amount: 2,
        },
        {
          id: 303,
          name: "Grated cheese (I used romano)",
          unit: "tbsp",
          amount: 2,
        },
      ]
    }
  },
}

</script>

<style lang="sass" scoped>

.wrapper
  flex-basis: 1200px
  margin-top: 45px
  display: flex

  > div
    flex-basis: 100%


</style>
