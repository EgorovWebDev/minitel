<template>
    <div class="chat__messages">
     <div class="chat__messages__message" v-for="message of chatMessages" v-bind:key="message.id">
       <span>[{{message.body.date}}] from {{message.body.sender}}</span>
       <br>
       <span>{{message.body.text }}</span>
       <hr>
     </div>
    </div>
</template>

<script>

  export default {
    props: {
      messages: Array
    },

    computed: {
      chatMessages() {
        return this.messages.filter(m => m.type === 'chat_message')
      }
    }
  }
</script>

<style scoped>

</style>
