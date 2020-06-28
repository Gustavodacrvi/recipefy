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
            :value='[1, 3, 5, 9, 10, 12, 15]'
            :isCompleted='isCompleted'
            title='Ingredients'
            v-slot="{ item }"
          >
            <span>{{ item }}</span>
          </ListWrapper>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import Header from './Header.vue'
import ListWrapper from "@/components/Ui/Lists/ListWrapper/index.vue"

export default {
  components: {
    Header,
    ListWrapper,
  },
  methods: {
    isCompleted(num) {
      return num % 2 === 0
    },
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
