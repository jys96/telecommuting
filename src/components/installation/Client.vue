<template>
  <div id="Client">
    <div>
      <ol>
        <li>PC에 VPN Client (Windows만 지원)를 설치합니다.</li>
        <li>VPN Client를 실행하여 회사에서 제공받은 공인 IP 주소/포트 및 사용자 계정 정보를 입력하고, 회사 망의 SPN Gateway에 접속을 시도합니다.</li>
        <li>해당 PC는 마치 회사 내에 있는 것처럼 사내 망의 시스템을 자유롭게 사용하실 수 있습니다.</li>
      </ol>
      <p class="font10">
        ※ OpenVPN이나 L2TP/IPSec을 이용해도 SPN Gateway 접속이 가능합니다. (단, SPN Gateway에서 OpenVPN과 L2TP/IPSec의 접속 설정 필요)
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#Client{
  width: 100%;
}
#Client ol li{
  width: 640px;
  text-align: left;
  list-style-type: inherit;
  margin-left: 20px;
  line-height: 26px;
}
#Client p{
  line-height: 15px;
  text-align: left;
  margin-top: 7px;
  margin-left: 20px;
}
</style>