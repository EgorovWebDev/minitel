<template>
  <div class="chatPanel">
      <input v-model="textMessage" type="text">
      <VueEmoji @input="onInput" :value="myText" />
      <button @click="sendMessage">Send</button>
      <!-- showMessage для теста -->
      <div class="showMessage">
        <div v-for="(message, key) in messages" :key="key">{{message.content}}</div>
      </div>
  </div>
  
</template>


<script>
  import VueEmoji from 'emoji-vue'

export default {
  components: {VueEmoji},
  name: 'chatPanel',
    data(){
    return {
      messages: [
        {
          author: '',
          content: '',
          date: '',
          type: '',
        }
      ],
      textMessage: '',
      subscriptionId: -1,
      chanel: '/chanel1'
    } 
  },
  mounted(){
    this.subscriptionId = this.$bus.subscribe(this.chanel, (m) => {
      // this.messages.push(m)
      return m
    })
    this.$bus.send(this.chanel, 'Новый пользователь вошёл')
  },

  destroyed() {
    this.$bus.send(this.chanel, 'Новый пользователь вышел')
    this.$bus.unsubscribe(this.subscriptionId)
  },
  methods: {
    typeMessage(){

    },
    sendMessage(){
      this.$bus.send(this.chanel, this.showMessage)
    }
  },
  watch: {
    "$bus": function(){
      this.messages = this.$bus.getMessages(this.chanel)
    }
  }

}
</script>
<style >
</style>