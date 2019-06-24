<template>
  <iframe :src="getSrc" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</template>


<script>
export default {
  
  props: {
    text: String
  },

  computed: {
    getSrc(){
      return this.text.replace("watch?v=", "embed/")      
    }
  }
}
</script>
