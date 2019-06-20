<template>
    <div class="chat__messages">
     <div class="chat__messages__message" v-for="message of chatMessages" v-bind:key="message.id" v-bind:class="{'bot':message.body.sender.name=='bot'}">
       <div class="info">
         <div class="avatar"><img :src="message.body.sender.avatarSrc"></div>
         <div class="date">[{{message.body.date}}]</div> 
       </div>
       <img class="chatImage" v-if="message.body.type=='image'" :src="message.body.text" alt="image">
       <a v-if="message.body.type=='link'" :href="message.body.text">{{message.body.text}}</a>
       <iframe v-if="message.body.type=='video'"  :src="message.body.text" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       <div v-if="message.body.type=='text'">{{message.body.text }}</div>
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
    },
    methods:{
      getTypeMessage(message){
        if ( /^[^\s]+(?:\.(com|ru|net|org))[^\s]*/.test(message)){
          if ( /^[^\s]+(?:\.(com|ru|net|org))[^\s]*\.(png|jpg|jpeg)/.test(message)){
            return 'image'
          }
          if ( /^https\:\/\/www\.youtube\.com\/watch\?v\=[a-zA-Z0-9_]+/.test(message)){
            return 'video'
          } 
          return 'link'
        }
        return 'text'
      }
    },
    watch:{
      messages(){
        if (this.messages.length>0){
          let lastMessage = this.messages[this.messages.length-1]
          lastMessage.body.type = this.getTypeMessage(lastMessage.body.text)
          if (lastMessage.body.type=='video'){
           lastMessage.body.text = lastMessage.body.text.replace("watch?v=", "embed/")
          }
          this.messages[this.messages.length-1] = lastMessage
        }
      }
    }
  }
</script>

<style scoped>

</style>
