<template>
  <div id="Home">
    <nav>
      <vueNav></vueNav>
    </nav>
    <div class="wrap">
      <Main></Main>
      <Why></Why>
      <Installation></Installation>
      <Video></Video>
      <Configuration></Configuration>
      <Buy></Buy>
    </div>
    <footer>
      <vueFooter></vueFooter>
    </footer>
  </div>  
</template>

<script>
import vueNav from './Nav.vue'
import Main from './Main.vue'
import Why from './Why.vue'
import Installation from './Installation.vue'
import Video from './Video.vue'
import Configuration from './Configuration.vue'
import Buy from './Buy.vue'
import vueFooter from './Footer.vue'

export default {
  components:{
    vueNav,
    Main,
    Why,
    Installation,
    Video,
    Configuration,
    Buy,
    vueFooter,
  }

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body, ul, ol, li, table{
  font-family: 'Nanum Gothic', sans-serif;
  color: #5a5a5a;
  font-size: 16px;
  text-align: center;
}
ul, li{
  list-style: none;
}

.font36{font-size: 36px;}
.font24{font-size: 24px;}
.font18{font-size: 18px;}
.font12{font-size: 12px;}
.font10{font-size: 10px;}

.Extrabold{font-weight: 900;}
.bold{font-weight: 600;}

.textgreen{color: #036047;}

.bgmint{background-color: #e4f4e9;}
.bgvanila{background-color: #fffed2;}

.floatleft{ float: left; }
.floatright{ float: right;}
.inline-block{display: inline-block;}

#Home{
  width: 100%;
  position: relative;
}
nav{
  width: 100%;
  background-color: #036047;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
#Home .wrap{
  width: 100%;
  margin: 0 auto;
  position: relative;
}
footer{
  width: 100%;
  height: 120px;
  background-color: #5a5a5a;
  padding-top: 30px;
}
</style>