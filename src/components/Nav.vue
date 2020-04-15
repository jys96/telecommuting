<template>
  <div id="nav">
    <ul class="floatleft">
      <a href="#Main"><li>2ip SPN</li></a>
      <a href="#Why"><li>특장점</li></a>
      <a href="#Installation"><li>설치방법</li></a>
      <a href="#Video"><li>시연영상</li></a>
      <a href="#Configuration"><li>제품구성</li></a>
      <a href="#Buy"><li>구매/문의</li></a>
    </ul>
    <div class="download_btn_wrap floatright" v-on:mouseover="dropbtn = true" v-on:mouseleave="dropbtn = false">
      <div class="download" v-bind:class="{color:'#ffcc00'}" >PDF 다운로드</div>
      <div class="droplist ">
        <transition name="dropmenu">
          <div v-bind:class="{active:dropbtn}" v-if="dropbtn">
            <ul>
              <li v-on:click="BrochureDownload">브로슈어</li>
              <li v-on:click="MenualDownload">메뉴얼</li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<script>
export default {
  data(){
    return{
      dropbtn: false,

      // PDF Downlad data code
      BrochureUrl:'../assets/Brochure_Ex.pdf',
      MenualUrl:'../assets/Menual_Ex.pdf'
    }
  },
  methods:{
    BrochureDownload(){
      axios({
        methods: 'get',
        url: this.BrochureUrl,
        responseType: 'blob'
      })
      .then(response => {
        const BrochureUrl = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = BrochureUrl
        link.setAttribute('download', '2ip_SPN_Telecommuting_Brochure.pdf') // download file name
        document.body.appendChild(link)
        link.click()
      })
      .catch(() => console.log('error ocuured'))
    },
    MenualDownload(){
      axios({
        methods: 'get',
        url: this.MenualUrl,
        responseType: 'blob'
      })
      .then(response => {
        const MenualUrl = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = MenualUrl
        link.setAttribute('download', '2ip_SPN_Telecommuting_Menual.pdf') // download file name
        document.body.appendChild(link)
        link.click()
      })
      .catch(() => console.log('error ocuured'))
    },
  }
}
</script>

<style scoped>
  #nav{
    width: 1000px;
    margin: 0 auto;
    position: relative;
  }
  li{
    float: left;
  }
  li, .download{
    color: #ffffff;
    padding: 12px 20px;
    cursor: pointer;
  }
  li:hover, .download:hover{
    color: #ffcc00;
  }
  #nav .download_btn_wrap{
    /* width: px; */
  }
  .dropmenu-enter-active, .dropmenu-leave-active{
    transition: all 1s;
  }
  .dropmenu-enter, .dropmenu-leave-to{
    opacity: 0;
    transform: translateY(30px);
  }
  #nav .droplist{
    width: 200px;
    position: absolute;
    top: 43px;
    right: -35px;
  }
  #nav .droplist ul li{
    float: none;
    color: #fff;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    background: #036047;
  }
  #nav .droplist ul li:hover{
    color: #ffcc00;
  }
</style>