<template>
  <iframe :src="text" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</template>


<script>
export default {
  props: {
    text: String
  }
}
</script>
