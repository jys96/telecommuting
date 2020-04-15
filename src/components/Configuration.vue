<template>
  <div id="Configuration">
    <h1 class="font36 Extrabold textgreen">제품 구성</h1>
    <p class="text">
      <b>2ip SPN 재택근무 솔루션</b>은 회사 망에 설치하는 SPN Gateway와
      <br>
      가정에서 사용하는 SPN Bridge 및 SPN Client로 구성되어 있습니다.
    </p>
    <div class="boxwrap">
      <div class="inline-block bgvanila home">
        <div class="font18 bold title">재택근무 사용자</div>
        <div class="client">
          <p class="textgreen bold spnclient">SPN Client</p>
          <img src="../assets/img/configuration/openVPN.png" alt="SPNClient">
          <p class="font12">
            <b>SPN Client</b> (only Windows)
            <br>
            (개별 PC 설치 S/W)
          </p>
        </div>
        <div class="bridge">
          <p class="textgreen bold spnbridge">SPN Bridge</p>
          <img src="../assets/img/configuration/mango.png" alt="SPNBridge">
          <p class="font12">
            <b>SPNBox-200</b>
            <br>
            (사용자 장치 2대 이상 처리)
          </p>
        </div>
      </div>
      <div class="inline-block bgvanila company">
        <div class="font18 bold title">회사 망</div>
        <p class="textgreen bold spngateway">SPN Gateway</p>
        <div class="spnbox3000">
          <img src="../assets/img/configuration/spnbox-3000-back.png" alt="SPNGateway-spnbox3000">
          <p class="font12"><b>SPNBox-3000</b> (SPN Tunnel 20~30개 처리)</p>
        </div>
        <div class="spnbox1400">
          <img src="../assets/img/configuration/spnbox-1400-back.png" alt="SPNGateway-spnbox1400">
          <p class="font12"><b>SPNBox-1400</b> (SPN Tunnel 10~20개 처리)</p>
        </div>
        <div class="spnbox900">
          <img src="../assets/img/configuration/spnbox-900-back.png" alt="SPNGateway-spnbox900">
          <p class="font12"><b>SPNBox-900</b> (SPN Tunnel 5~10개 처리)</p>
        </div>
      </div>
    </div>
    <p class="font10 bold notice">* 제품 관련 자세한 스펙 및 가격은 아래 연락처로 문의 바랍니다.</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#Configuration{
  width: 800px;
  margin: 0 auto;
  padding: 130px 0;
}
#Configuration h1{
  margin-bottom: 40px;
}
#Configuration .text{
  line-height: 26px;
  margin-bottom: 37px;
}
#Configuration .boxwrap{
  width: 100%;
}
#Configuration .boxwrap .home,
#Configuration .boxwrap .company{
  width: 370px;
  height: 435px;
  border: 2px solid #eadb75;
  border-radius: 10px;
  position: relative;
}
#Configuration .boxwrap .home{
  margin-right: 25px;
}
#Configuration .boxwrap .title{
  width: 160px;
  height: 30px;
  line-height: 30px;
  background-color: #ffffff;
  border: 2px solid #eadb75;
  border-radius: 10px;
  position: absolute;
  top: -17px;
  left: calc(50% - 80px);
}

#Configuration .boxwrap .home .client,
#Configuration .boxwrap .company .spngateway{
  margin-top: 40px;
}
#Configuration .boxwrap .home .client .spnclient,
#Configuration .boxwrap .home .bridge .spnbridge,
#Configuration .boxwrap .company .spngateway{
  margin-bottom: 12px;
}
#Configuration .boxwrap .home .client img{
  margin-bottom: 6px;
}
#Configuration .boxwrap .home .bridge{
  margin-top: 40px;
}
#Configuration .boxwrap .home .bridge img{
  width: 70px;
  margin: 4px 0 8px 0;
}
#Configuration .boxwrap .company{
  vertical-align: top;
}
#Configuration .boxwrap .company .spnbox3000,
#Configuration .boxwrap .company .spnbox1400,
#Configuration .boxwrap .company .spnbox900 {
  margin-bottom: 30px;
}

#Configuration .boxwrap .company .spnbox3000 p,
#Configuration .boxwrap .company .spnbox1400 p,
#Configuration .boxwrap .company .spnbox900 p{
  margin-top: 7px;
}
#Configuration .boxwrap .company .spnbox3000{
  margin-top: 30px;
}
#Configuration .boxwrap .company .spnbox3000 img{
  width: 300px;
}
#Configuration .boxwrap .spnbox1400 img{
  width: 195px;
}
#Configuration .boxwrap .spnbox900 img{
  width: 99px;
}
#Configuration .notice{
  text-align: left;
  margin: 10px 0 0 20px;
}
</style>