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
        <div>
          {{ item.title }}
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
  border-radius: 100px
  border-top-right-radius: 500px
  border-bottom-left-radius: 500px

.wrapper
  padding: 40px 0
  flex-basis: 950px

</style>
