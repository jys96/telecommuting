<template>
  <div id="Why">
    <Danger></Danger>
    <System></System>
    <Explain></Explain>    
  </div>
</template>

<script>
import Danger from './why/Danger.vue'
import System from './why/Telecommuting-system.vue'
import Explain from './why/Explain.vue'

export default {
  components:{
    Danger,
    System,
    Explain,
  }
}
</script>

<style scoped>
#Why{
  position: relative;
}
</style>