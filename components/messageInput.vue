<template>
    <div class="chat__message-input">
      <b-row>
        <b-col cols="11">
          <b-input v-model="text"></b-input>
        </b-col>
        <b-col>

          <b-button @click="onSendCLick">send</b-button>
        </b-col>
      </b-row>
    </div>
</template>

<script>

  export default {
    data() {
      return {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto, debitis dolore ',
      }
    },
    methods : {
      onSendCLick(event) {
        this.$emit('onSendMessage', this.text)
        this.text = ''
      }
    }
  }
</script>

<style scoped>

</style>
