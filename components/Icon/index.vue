<template>
  <div class="Icon">
    <component v-if="component"
      :is="component"
      v-bind="$attrs"
    />
  </div>
</template>

<script>

export default {
  props: ['icon'],
  data() {
    return {
      component: null,
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    async load() {
      this.component = null
      try {
        this.component = (await import(`./icons/${this.icon}.vue`)).default
      } catch (err) {
        throw err
      }
    },
  },
  watch: {
    icon() {
      this.load()
    },
  },
}

</script>
