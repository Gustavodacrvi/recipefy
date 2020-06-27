<template>
  <div class="WineScoller flex-centralize">
    <div class="wrapper">
      <TextBox
        :value="res.pairingText || ''"
      />

      <Scroller
        :list='res.productMatches'
        v-slot='{item}'
      >
        <div class="wine-wrapper round-card">
          <div
            class="wine-img"
            :style="{
              backgroundImage: `url(${item.imageUrl})`,
            }"
          ></div>
          <div
            class="wine-title"
          >
            {{ item.title }}
          </div>
        </div>
      </Scroller>

    </div>
  </div>
</template>

<script>

import { WinePairingResponse } from "@/interfaces/index.ts"

import TextBox from "@/components/Ui/TransitionElements/TextBox.vue"
import Scroller from "@/components/Ui/Scroller.vue"

export default {
  components: {
    TextBox,
    Scroller,
  },
  props: ['res'],
  data() {
    return {
      selected: this.res.productMatches[0].id,
    }
  },
}

</script>

<style lang='sass' scoped>

.WineScoller
  color: white
  background-color: var(--purple)
  border-radius: 75px
  border-top-right-radius: 250px
  border-bottom-left-radius: 250px

.wrapper
  padding: 48px 0
  flex-basis: 950px

.Scroller
  margin-top: 40px

.wine-wrapper
  flex-basis: 300px
  padding: 24px
  margin: 0 35px
  background-color: white
  color: var(--txt-color)

.wine-img
  background-size: contain
  background-position: center
  background-repeat: no-repeat
  height: 150px

.wine-title
  margin-top: 24px
  font-family: "Quicksand Bold"
  font-size: 18px
  text-align: center

</style>
