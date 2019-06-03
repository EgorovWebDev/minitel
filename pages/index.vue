<template>
  <div class="index">
    <chat></chat>
  </div>
</template>

<script>

import chat from '~/components/chat.vue'
import chatPanel from '~/components/chatPanel.vue'
export default {

  data(){
    return {
      subscribeChanel: false
    } 
  },
  components: {
    chatPanel,
    chat,
  },
  methods: {
    subscribe(){
      this.subscribeChanel = !this.subscribeChanel
    }
  }
}

</script>

<style >
 
</style>

