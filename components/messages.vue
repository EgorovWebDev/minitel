<template> 
    <div class="chat__messages">
     <div class="chat__messages__message" v-for="message of chatMessages" v-bind:key="message.id" v-bind:class="{'bot':message.body.sender.name=='bot'}">
       <div class="info">
         <div class="avatar"><img :src="message.body.sender.avatarSrc"></div>
         <div class="date">[{{message.body.date}}]</div> 
       </div>
      <component v-bind:is="getMessageComponent(message)" :text="message.body.text"></component>   
     </div>
    </div>
</template>

<script>
  import linkMessage from '~/components/linkMessage.vue'
  import imageMessage from '~/components/imageMessage.vue'
  import textMessage from '~/components/textMessage.vue'
  import videoMessage from '~/components/videoMessage.vue'

  const components = {
    image: 'imageMessage',
    video: 'videoMessage',
    text: 'textMessage',
    link: 'linkMessage'
  }

  export default {
    components: {linkMessage,imageMessage,textMessage,videoMessage},

    props: {
      messages: Array
    },

    computed: {
      chatMessages() {
         return this.messages
      }
    },

    data(){
      return {}
    },
    
    methods:{

      getMessageComponent(message){
        return components[this.getTypeMessage(message.body.text)]
      },

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
      },

      scrollToEnd(){ 
        setTimeout(() => {
          this.$el.scrollIntoView(false)
        }, 200)
      }
    },

    watch:{
    messages(){
          this.scrollToEnd()
      }
    }
  }
</script>
