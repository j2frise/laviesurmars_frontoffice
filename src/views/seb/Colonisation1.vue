<template>
  <div class="colo1">
    <img class="colo1__bg" :src="colobg" alt="space" />
    <img class="limousine4" :src="limou4" alt="limousine" />
    <img class="limousine1" :src="limou1" alt="limousine" />
    <img class="limousine2" :src="limou2" alt="limousine" />
    <img class="limousine3" :src="limou3" alt="limousine" />
    <div class="planetmars">
      <img class="planetmars__img" alt="planète mars" :src="mars" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Colonisation1",
  data() {
    return {
      colobg: require("../../assets/seb/espace.png"),
      mars: require("../../assets/seb/planetmars.png"),
      limou4: require("../../assets/seb/limousine4.png"),
      limou1: require("../../assets/seb/limousine1.png"),
      limou2: require("../../assets/seb/limousine2.png"),
      limou3: require("../../assets/seb/limousine3.png")
    };
  }
};
</script>

<style lang="scss" scoped>
@keyframes animeLimousine4 {
  0% {
    top: 316px;
    right: 2500px;
    transform: rotate(-50deg);
  }
  5% {
    transform: rotate(-40deg);
  }
  10% {
    transform: rotate(-30deg);
  }
  15% {
    transform: rotate(-20deg);
  }
  20% {
    transform: rotate(-10deg);
    top: 300px;
  }
  25% {
    transform: rotate(-50deg);
  }
  30% {
    transform: rotate(-60deg);
  }
  35% {
    top: 260px;
  }
  45% {
    top: 220px;
  }
  55% {
    top: 160px;
    transform: rotate(-35deg);
  }
  65% {
    top: 90px;
  }
  75% {
    top: 55px;
  }
  80% {
    transform: rotate(-10deg);
    top: 30px;
  }
  85% {
    top: 25px;
  }
  100% {
    top: 150px;
    right: 8px;
  }
}

@keyframes animeLimousine1 {
  0% {
    top: 50px;
    right: 1700px;
    transform: rotate(52deg);
  }
  50% {
    top: 200px;
  }
  100% {
    right: 348px;
    top: 150px;
  }
}

@keyframes animeLimousine2 {
  0% {
    top: 320px;
    right: 1900px;
    transform: rotate(260deg);
  }
  20% {
    top: 450px;
  }

  100% {
    right: 348px;
    top: 380px;
  }
}

@keyframes animeLimousine3 {
  0% {
    top: 500px;
    right: 1600px;
    transform: rotate(60deg);
  }
  20% {
    top: 570px;
    transform: rotate(10deg);
  }
  60% {
    top: 620px;
  }
  100% {
    right: 80px;
    top: 532px;
  }
}

.colo1 {
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  &__bg {
    width: 100%;
  }

  &__car1 {
    position: absolute;
    top: 160px;
    left: 160px;
  }

  .limousine4 {
    position: absolute;
    right: 8px;
    top: 150px;
    z-index: 1;
    transform: rotate(35deg);
    animation: animeLimousine4 4s ease-out;
  }

  .limousine1 {
    position: absolute;
    right: 348px;
    top: 150px;
    z-index: 2;
    transform: rotate(-60deg);
    //  animation: animeLimousine1 6s ease-out;
  }

  .limousine2 {
    position: absolute;
    right: 348px;
    top: 380px;
    z-index: 2;
    transform: rotate(-120deg);
    animation: animeLimousine2 5s ease-in-out;
  }

  .limousine3 {
    position: absolute;
    right: 80px;
    top: 532px;
    z-index: 2;
    transform: rotate(-210deg);
    animation: animeLimousine3 3s ease-out;
  }

  .planetmars {
    height: 100%;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 80px;
  }
}
</style>