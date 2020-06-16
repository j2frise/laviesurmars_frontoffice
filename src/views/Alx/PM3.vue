<template>
  <div class="PM3">
    <img class="PM3__bg" :src="img_bg" alt="bg" />
    <img class="PM3__mars" :src="img_mars" alt="mars" />
    <img class="PM3__terre" :src="img_terre" alt="terre" />
    <div class="PM3__text">
      <p>2034 - TOUJOURS PLUS DE NOUVEAUX ARRIVANTS</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PM1",
  data() {
    return {
      img_bg: require("../Alx/Img/imageMars/3_Premiers-martien/Etoile.png"),
      img_mars: require("../Alx/Img/imageMars/3_Premiers-martien/2-/Mars-planet.png"),
      img_terre: require("../Alx/Img/imageMars/3_Premiers-martien/2-/Earth-planet.png")
    };
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.PM3 {
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  &__bg {
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
  }
  &__mars {
    position: absolute;
    width: 750px;
    height: 400px;
    left: 1170px;
    top: 372px;
    z-index: 2;
  }
  &__terre {
    position: absolute;
    left: 400px;
    top: 300px;
    z-index: 3;
  }

  &__text {
    // __________ TIPOGRAPHIE ___________
    font-family: "Faune";
    font-style: normal;
    font-weight: 900;
    font-size: 34px;
    color: white;
    // __________ POSITION ___________
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 1;
  }
}
</style>
