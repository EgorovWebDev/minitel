<template>
    <div class="chat__message-input">
      <b-row>     
        <b-col cols="9">
          <b-input ref="input" v-model="text" @keyup.enter="onSendCLick"></b-input>
        </b-col>
        <b-col cols="1" class="emoji-container">
          <button class="emoji"  @click="viewEmoji=!viewEmoji">😀</button>
          <VEmojiPicker v-if="viewEmoji" class="emoji-picker" :pack="pack" @select="selectEmoji" />
        </b-col>
        <b-col cols="1">
          <b-button @click="onSendCLick">send</b-button>
        </b-col>
      </b-row>
    </div>
</template>

<script>
  import VEmojiPicker from 'v-emoji-picker';
  import packData from 'v-emoji-picker/data/emojis.json';

  export default {
    components: {VEmojiPicker},

    data() {
      return {
        viewEmoji: false,
        pack: packData,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto, debitis dolore ',
        myText: ''
      }
    },

    methods : {

      selectEmoji(emoji) {
        let input = this.$refs.input
        let cursorPosition = input.selectionStart
        this.text = this.text.slice(0, cursorPosition) + emoji.emoji + this.text.slice(cursorPosition, this.text.length)
      },

      onSendCLick(event) {
        if (this.text) {
         this.viewEmoji = false
         this.$emit('onSendMessage', this.text)
         this.text = ''
        }
        else {
          alert("Пустое поле ввода")
        }
      },

      onInput(e){
        console.log(e)
      }

    }
      
  }
</script>
