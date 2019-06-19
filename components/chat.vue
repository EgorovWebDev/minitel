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
    components: {messageInput, messages,},
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
        const type = this.getTypeMessage(event);
        this.$bus.send('/common', {
          id: date.getTime(),
          type: type,
          body: {
            sender: 'user',
            date: date.toUTCString(),
            text: event
          }
        })
        const answer = [
          'Привет, как у тебя дела?',
          'https://www.google.ru/',
          'https://www.ebay.com/',
          'https://ru.aliexpress.com',
          'https://trinixy.ru/pics3/20080124/podb/6/krasota_01.jpg',
          'https://pp.userapi.com/c639419/v639419834/49f2b/_IhYYjUstAY.jpg?ava=1',
          'Я проверка не бот ',
          'lorem ipsum set emmet ',
          'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          'https://www.youtube.com/watch?v=ZhIsAZO5gl0',
          'https://www.youtube.com/watch?v=n4RjJKxsamQ',
          'https://www.youtube.com/watch?v=hTWKbfoikeg',
          'Text 2',
          'Text 3',
          'Text 4',
        ]
        setTimeout(() => {
          const dateBot = new Date();
          const messageBot = answer[Math.floor(Math.random()*answer.length)]
          const typeBot = this.getTypeMessage(messageBot);
          this.$bus.send('/common', {
            id: dateBot.getTime(),
            type: typeBot,
            body: {
              sender: 'bot',
              date: dateBot.toUTCString(),
              text: messageBot
            }
          })
          }, 300) 
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
      }
    }
  }
</script>

<style scoped>

</style>
