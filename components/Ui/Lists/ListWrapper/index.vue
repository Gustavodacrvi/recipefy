<template>
  <div class="ListWrapper parallax-center">
    <Header :value="getNumber">
      {{ title }}
    </Header>
    <slot v-for="item in value"
      v-bind:item="item"
    >
    </slot>
  </div>
</template>

<script>

import Header from './Header.vue'

export default {
  components: {
    Header,
  },
  props: ['value', 'isCompleted', 'title'],
  computed: {
    getNumber() {
      if (this.value.length === 0)
        return 0
      return this.value.reduce((tot, item) => this.isCompleted(item) ? tot + 1 : tot, 0) / this.value.length
    },
  },
}

</script>

<style lang="sass">

.ListWrapper
  position: relative
  background-image: url('~assets/svg/transparentBack.svg')
  padding: 30px
  padding-top: 53px
  border-radius: 30px

</style>
