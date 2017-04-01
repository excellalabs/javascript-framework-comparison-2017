<template>
  <form v-on:submit="postMessage">
    <input v-model="text" />
    <button type="submit">Post</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  methods: {
    postMessage (ev) {
      ev.preventDefault()
      this.$emit('message', { text: this.text })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
