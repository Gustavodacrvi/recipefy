<template>
  <div class="WineSelection">
    <h2>Wine Pairing</h2>

    <DishSelection/>
  </div>
</template>

<script>

import DishSelection from './DishSelection.vue'

export default {
  components: {
    DishSelection,
  },
}

</script>
