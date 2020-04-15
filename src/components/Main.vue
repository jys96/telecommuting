<template>
  <div id="Main">
    <div class="main1">
      <img src="../assets/img/2ipSPNlogo.png" alt="2ipSPNlogo" width="550px">
      <h1 class="font36">편리하고 안전한 연결</h1>
      <p>
        <b>2ip SPN 재택근무 솔루션</b>은 비상 상황에서 보다
        <br>
        효과적인 재택근무가 이루어질 수 있도록 도와주는 안전한 가상 사설망 솔루션 입니다.
      </p>
    </div>

    <div class="bgmint">
      <div class="main2">
        <div class="inline-block imgbox">
          <img src="../assets/img/2ipSPNtelecommuting.png" alt="2ipSPNtelecommuting">
        </div>
        <div class="inline-block textbox">
          <b>2ip SPN 재택근무 솔루션</b>은
          <p>실제로는 집에 있지만 마치 회사에 있는 것처럼 회사 망에 자유롭게 접근하도록 만들어 줍니다.</p>
          <p>다양한 인증 방식과 암호 알고리즘을 적용하여 회사 망에 안전하게 접근하도록 만들어 줍니다.</p>
          <p class="bold">이제 편하게 집에 앉아서 자유롭고 안전하게 사내망에 접근할 수 있는 재택근무 환경을 경헙하실 수 있습니다.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#Main{
  margin-top: 44px;
}
#Main .main1, .main2{
  width: 800px;
  margin: 0 auto;
}
#Main b{
  font-weight: 900;
}
#Main .main1{
  padding: 130px 0;
}
#Main .main1 h1{
  margin: 27px 0;
}
#Main .main1 p{
  line-height: 26px;
}

#Main .main2{
  padding: 80px 0;
}
#Main .main2 .textbox{
  width: 370px;
  text-align: left;
  margin-left: 35px;
  margin-top: 70px;
  vertical-align: top;
}
#Main .main2 .textbox p{
  margin: 30px 0;
  line-height: 26px;
}
#Main .main2 .textbox p:nth-child(2),
#Main .main2 .textbox p:nth-child(3){
  width: 320px;
}
#Main .main2 .textbox p:last-child{
  margin-bottom: 0;
}
</style>