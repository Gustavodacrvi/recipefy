<template>
  <div class="Scroller">
    <slot v-for="item in list"
      v-bind:item="item"
    ></slot>
  </div>
</template>

<script>

export default {
  props: ['list'],
}

</script>
