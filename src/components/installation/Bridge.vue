<template>
  <div id="Bridge">
    <div>
      <ol>
        <li>PC에 관리 툴은 VPN Server Manager (Windows/MacOS 지원)를 설치합니다.</li>
        <li>PC와 SPN Bridge를 LAN 케이블을 연결합니다. (Wi-Fi 접속을 통해 연결도 가능합니다.)</li>
        <li>VPN Server Manger를 이용하여 회사에서 제공받은 공인 IP 주소/포트 및 사용자 계정 정보를 입력합니다.</li>
        <li>SPN Bridge를 통해 연결된 장치들이 마치 회사 내에 있는 것처럼 사내 망의 시스템을 자유롭게 사용하실 수 있습니다.</li>
      </ol>
      <p class="font10">※ 2ip SPN의 연결 여부는 PC의 IP 주소를 통해 확인할 수 있습니다. 2ip SPN이 정상적으로 연결되었다면 PC는 회사 내부 망의 IP 주소 대역의 IP 주소를 할당 받게 됩니다.</p>
    </div>
    <div class="imgbox">
      <img src="../../assets/img/installation/Client.png" alt="Client installation">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#Bridge{
  width: 100%;
}
#Bridge ol li{
  text-align: left;
  list-style-type: inherit;
  margin-left: 20px;
  line-height: 26px;
}
#Bridge .imgbox{
  margin-top: 25px;
}
#Bridge .imgbox img{
  width: 80%;
}
</style>