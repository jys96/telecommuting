<template>
  <div id="Installation">
    <h1 class="font36 Extrabold textgreen">설치방법</h1>
    <div class="ins-wrap">
      <ul>
        <li v-on:click="show1()" v-bind:class="{menuactive:gbtn}">Gateway</li>
        <li v-on:click="show2()" v-bind:class="{menuactive:bbtn}">Bridge</li>
        <li v-on:click="show3()" v-bind:class="{menuactive:cbtn}">Client</li>
      </ul>
      <div class="ins-box bgvanila">
        <Gateway v-bind:class="{display:gateway}"></Gateway>
        <Bridge v-bind:class="{display:bridge}"></Bridge>
        <Client v-bind:class="{display:client}"></Client>
      </div>  
    </div>
  </div>
</template>

<script>
import Gateway from './installation/Gateway.vue'
import Bridge from './installation/Bridge.vue'
import Client from './installation/Client.vue'

export default {
  data(){
    return{
      gateway:false,
      bridge:true,
      client:true,

      gbtn:true,
      bbtn:false,
      cbtn:false,
    }
  },
  components:{
    Gateway,
    Bridge,
    Client
  },
  methods:{
    show1(){
      this.gateway = false;
      this.bridge = true;
      this.client = true; 

      this.gbtn = true;
      this.bbtn = false;
      this.cbtn = false;
    },
    show2(){
      this.gateway = true;
      this.bridge = false;  
      this.client = true;  

      this.gbtn = false;
      this.bbtn = true;
      this.cbtn = false;
    },
    show3(){
      this.gateway = true;
      this.bridge = true;
      this.client = false;

      this.gbtn = false;
      this.bbtn = false;
      this.cbtn = true;
    }
  }
}
</script>

<style scoped>
#Installation{
  width: 800px;
  padding-top: 100px;
  margin: 0 auto;
}
#Installation h1{
  margin-bottom: 40px;
}
#Installation .ins-wrap{
  width: 800px;
  margin: 0 auto;
}
#Installation ul{
  width: 800px;
  height: 33px;
}
#Installation ul li{
  font-size: 18px;
  float: left;
  padding: 6px 12px;
  border: 2px solid #eadb75;
  border-bottom: 0;
  border-radius: 10px 10px 0 0;
  cursor: pointer;
  margin-right: 4px;
}
#Installation ul li:hover{
  background-color: #fffed2;
  /* font-weight: bold; */
}
#Installation .ins-box{
  width: 736px;
  border: 2px solid #eadb75;
  padding: 25px 30px 40px 30px;
}
.display{
  display: none;
}
.menuactive{
  background-color: #fffed2;
}
</style>