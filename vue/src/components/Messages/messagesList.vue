<template>
  <ul>
    <li v-for="message in messages">
        {{message.time.toLocaleString()}} -- {{message.text}}
    </li>
  </ul>
</template>

<script>
export default {
  props: ['messages']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
