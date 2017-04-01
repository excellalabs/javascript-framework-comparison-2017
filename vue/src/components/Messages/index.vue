<template>
  <div>
    Messages
    <messages v-bind:messages="messages"></messages>
    <message-form v-on:message="postMessage"></message-form>
  </div>
</template>

<script>
import MessagesList from './messagesList'
import MessageForm from './messageForm'
import { MessageService } from '../../services/messages'

export default {
  data () {
    MessageService.getAll().subscribe((messages) => {
      this.messages = messages
    })
    return {
      messages: []
    }
  },
  components: {
    'message-form': MessageForm,
    'messages': MessagesList
  },
  methods: {
    postMessage (message) {
      MessageService.post(message).subscribe()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
