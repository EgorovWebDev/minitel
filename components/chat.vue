<template>
    <div class="chat">
      <messages :messages="messages"></messages>
      <messageInput @onSendMessage="onSendMessage"></messageInput>
    </div>
</template>

<script>
  import messages from '~/components/messages.vue'
  import messageInput from '~/components/messageInput.vue'

  export default {
    components: {messageInput, messages},
    data() {
      return {
        subscription: null,
        messages: []
      }
    },
    mounted() {
     this.subscription = this.$bus.subscribe('/common', this.onReceiveMessage)
    },
    destroyed() {
      this.$bus.unsubscribe(this.subscription)
    },
    methods: {
      onReceiveMessage(message) {
        this.messages.push(message)
      },
      onSendMessage(event) {
        const date = new Date();
        this.$bus.send('/common', {
          id: date.getTime(),
          type: 'chat_message',
          body: {
            sender: 'user',
            date: date.toGMTString(),
            text: event
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
