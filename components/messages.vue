<template>
    <div class="chat__messages">
     <div class="chat__messages__message" v-for="message of chatMessages" v-bind:key="message.id">
       <span>[{{message.body.date}}] from {{message.body.sender}}</span>
       <br>
       <img v-if="message.type=='image' " :src="message.body.text" alt="image">
       <a v-if="message.type=='link'" :href="message.body.text">{{message.body.text}}</a>
       <iframe v-if="message.type=='video'"  :src="message.body.text" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       <span v-if="message.type=='text'">{{message.body.text }}</span>
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
        // return this.messages.filter(m => m.type === 'chat_message')
         return this.messages
      }
    }
  }
</script>

<style scoped>

</style>
