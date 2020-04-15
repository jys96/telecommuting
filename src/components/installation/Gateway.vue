<template>
  <div id="Gateway">
    <div>
      <ol>
        <li>회사 방화벽(firewall)에서 SPN Gateway 접속을 위한 포트를 설정(port-forwarding)을 합니다.</li>
        <li>관리자 PC에 VPN Server Manager (Windows/MacOS 지원)를 설치합니다.</li>
        <li>VPN Server Manager를 이용하여 SPN Gateway 설정을 진행합니다.</li>
        <li>재택근무자의 접속 요청 시 SPN Gateway는 SPN Tunnel을 생성합니다.</li>
      </ol>
    </div>
    <div class="imgbox">
      <img src="../../assets/img/installation/Gateway.png" alt="Gateway installation">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#Gateway{
  width: 100%;
}
#Gateway ol li{
  width: 600px;
  text-align: left;
  list-style-type: inherit;
  margin-left: 20px;
  line-height: 26px;
}
#Gateway .imgbox{
  margin-top: 25px;
}
#Gateway .imgbox img{
  width: 90%;
}
</style>