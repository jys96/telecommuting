<template>
  <div id="Explain" class="bgmint">
    <div>
      <h2 class="font24 textgreen">1. 간단한 설정</h2>
      <p>
        2ip SPN은 회사 망에 접속하기 위한 설정이 간단합니다.
        <br>
        사용자는 회사 망에 접속하기 위한 IP 정보(주소와 포트)와 사용자 계정 정보만 입력하면 됩니다.
      </p>
      <img src="../../assets/img/explain/1easy.png" alt="Simple Settings">
    </div>
    <div>
      <h2 class="font24 textgreen">2. 안전한 접속</h2>
      <p>
        2ip SPN은 사용자 관리와 암호화로 안전한 접속 환경을 구성합니다.
        <br>
        다양한 인증 방식과 암호 알고리즘을 적용하여 사용자 접속과 전송 데이터를 안전하게 관리합니다.
      </p>
      <img src="../../assets/img/explain/2safe.png" alt="Secure access">
    </div>
    <div>
      <h2 class="font24 textgreen">3. 폭넓은 운용 환경</h2>
      <p>
        2ip SPN은 다양한 VPN 프로토콜의 접속을 허용할 수 있습니다.
        <br>
        OpenVPN과 L2TP/IPSec을 통해 다양한 운영 체계에서도 회사 망 접속이 가능합니다.
      </p>
      <img src="../../assets/img/explain/3operation.png" alt="Wide range of operating environments">
    </div>
    <div>
      <h2 class="font24 textgreen">4. 다양한 운용 모드</h2>
      <p>
        2ip SPN의 Standalone 모드를 사용하면 간단하게 재택 근무 환경을 구성할 수 있습니다.
        <br>
        Gateway 모드로 운용 시 회사 망의 구성 정보 변경이 필요합니다. Standalone 모드로 운용하면
        <br>
        회사 망의 구성 정보 변경없이 간단하게 재택근무 환경을 구성할 수 있습니다.
      </p>
      <img src="../../assets/img/explain/4operationmode.png" alt="Various operating modes">
    </div>
    <div>
      <h2 class="font24 textgreen">5. 손쉬운 확장성</h2>
      <p>
        2ip SPN은 여러 개의 SPN Gateway를 연결하여 대용량 SPN Gateway를 구성할 수 있습니다.
        <br>
        재택 근무 확대 시 SPN Gateway를 추가하여 Clustering을 적용하면 접속을 효율적으로 분산할 수 있습니다
        <br>
        대용량 장비에 대한 비용 절감과 SPN Gateway 장애에 대해 안정적인 운용이 가능합니다.
      </p>
      <img src="../../assets/img/explain/5Expansion.png" alt="Easily Scalability">
    </div>
    <div>
      <h2 class="font24 textgreen">6. 빠른 속도와 안정성</h2>
      <p>
        2ip SPN은 다른 상용 VPN보다 빠른 속도와 안정성을 제공합니다.
        <br>
        독자적인 알고리즘을 통해 전송 데이터 분할 문제를 해결하여 빠른 전송 성능을 보장합니다.
        <br>
        하나의 VPN 터널은 다수의 연결(connection)으로 구성되어 장애 발생 시 신속한 전환으로 안정성을 보장합니다.
      </p>
      <img src="../../assets/img/explain/6fast.png" alt="Fast and reliable">
    </div>
    <div>
      <h2 class="font24 textgreen">7. 합리적인 가격</h2>
      <p>
        2ip SPN은 기업 규모에 맞는 합리적인 가격을 보장합니다.
        <br>
        다양한 SPN Gateway제품 군은 기업 규모에 최적화된 재택근무 환경을 구축하도록 도와줍니다.
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#Explain{
  padding: 80px 0;
}
#Explain div{
  width: 800px;
  margin: 0 auto;
  margin-bottom: 80px;
}
#Explain div:last-child, #Explain div:last-child p{
  margin-bottom: 0;
}
#Explain h2{
  margin-bottom: 20px;
}
#Explain p{
  line-height: 26px;
  margin-bottom: 30px;
}
#Explain img{
  width: 700px;
}
</style>