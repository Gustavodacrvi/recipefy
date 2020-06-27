<template>
  <div class="WineScoller flex-centralize">
    <div class="wrapper">
      <TextBox
        :value="res.pairingText || ''"
      />

      <Scroller
        :class="{hasDescription: selectedItem.description}"
        :list='res.productMatches'
        v-slot='{item}'
      >
        <div class="wine-wrapper" @click="selected = item.id">
          <Wine
            v-bind="item"
            :active="selected === item.id"
          />
        </div>
      </Scroller>

      <TextBox
        :value="selectedItem.description || ''"
      />

    </div>
  </div>
</template>

<script>

import { WinePairingResponse } from "@/interfaces/index.ts"

import TextBox from "@/components/Ui/TransitionElements/TextBox.vue"
import Scroller from "@/components/Ui/Scroller.vue"

import Wine from './Wine.vue'

export default {
  components: {
    TextBox,
    Scroller,
    Wine,
  },
  props: ['res'],
  data() {
    return {
      selected: this.res.productMatches[0].id,
    }
  },
  computed: {
    selectedItem() {
      return this.res.productMatches.find(el => el.id === this.selected)
    },
  },
}

</script>

<style lang='sass' scoped>

.wine-wrapper
  margin: 0 35px
  flex: 0 0 200px

.WineScoller
  color: white
  background-color: var(--purple)
  border-radius: 50px
  border-top-right-radius: 185px
  border-bottom-left-radius: 185px

.wrapper
  position: relative
  padding: 48px 0
  flex-basis: 950px
  max-width: 950px

.Scroller
  margin-top: 40px
  bottom: 0
  transition-duration: .2s
  transition-timing-function: ease-in-out

.hasDescription
  margin-bottom: 45px

</style>
