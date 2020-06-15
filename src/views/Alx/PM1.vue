<template>
  <div class="PM1">
    <p class="PM1__text">2031 - LES PREMIERS HOMMES FROLENT LE SOL MARTIEN</p>
    <img class="PM1__bg" :src="img_body" alt="bg" />
    <img class="PM1__img" :src="img_mars" alt="mars" />
  </div>
</template>

<script>
export default {
  name: "pm1",
  data() {
    return {
      img_mars: require("../Alx/Img/imageMars/3_Premiers-martien/1-/Mars-earth.png"),
      img_body: require("../Alx/Img/imageMars/3_Premiers-martien/1-/Bg-space.png")
    };
  }
};
</script>
<style lang='scss'>
* {
  font-family: "Faune";
  margin: 0;
  padding: 0;
}
.PM1 {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  &__img {
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    position: absolute;
  }
  &__bg {
    height: 100vh;
    width: 100vw;
  }
  &__text {
    // __________ TIPOGRAPHIE ___________
    font-style: normal;
    font-weight: 900;
    font-size: 34px;
    line-height: 45px;
    color: white;
    font-size: 50px;
    // __________ POSITION ___________
    position: absolute;
    left: 272px;
    top: 368px;
    z-index: 1;
  }
}
</style>