<template>
  <div class="PM2">
    <img class="PM2__bg" :src="img_body" alt="bg" />
    <img class="PM2__img" :src="img_mars" alt="mars" />
    <img class="PM2__astraunote" :src="img_astraunote" alt="mars" />
    <div class="PM2__text">
      <p class="PM2__p">
        Un petit groupe de 12 humains foule pour la première fois le sol martien.
        Une telle mission s'élèverait à plus de 12 millions de dollars. Elon Musk
        souhaite ainsi réduire drastiquement les coûts afin d'envoyer des groupes
        plus importants par la suite.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PM2",
  data() {
    return {
      img_mars: require("../Alx/Img/imageMars/3_Premiers-martien/1-/Mars-earth.png"),
      img_body: require("../Alx/Img/imageMars/3_Premiers-martien/1-/Bg-space.png"),
      img_astraunote: require("../Alx/Img/imageMars/3_Premiers-martien/1-/Astr.png")
    };
  }
};
</script>
<style lang='scss'>
* {
  margin: 0;
  padding: 0;
}

.PM2 {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  //__________ CLASS __________
  &__astraunote {
    overflow: hidden;
    position: absolute;
    width: 800px;
    height: 525px;
    left: 241px;
    top: 80px;
    z-index: 3;
  }
  &__img {
    position: absolute;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
  }
  &__bg {
    overflow: hidden;
    height: 100vh;
    width: 100vw;
  }
  &__text {
    width: 100vw;
    height: 300px;
    // __________ TIPOGRAPHIE ___________
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Faune";
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 27px;
    color: white;
    // __________ POSITION ___________
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
  &__p {
    width: 565px;
  }
}
</style>