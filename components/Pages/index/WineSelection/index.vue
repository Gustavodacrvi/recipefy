<template>
  <div class="WineSelection">
    <h2>Wine Pairing</h2>

    <DishSelection
      v-model="selected"
    />
    <WineScroller/>
  </div>
</template>

<script>

import DishSelection from './DishSelection.vue'
import WineScroller from "@/components/Ui/Wine/WineScroller.vue"

export default {
  components: {
    DishSelection,
    WineScroller,
  },
  data() {
    return {
      selected: 1,
    }
  },
}

</script>
