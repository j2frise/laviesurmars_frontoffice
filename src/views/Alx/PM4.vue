<template>
  <div class="PM4">
    <img class="PM4__bg" :src="img_bg" alt="bg" />
    <div class="PM4__text">
      <p>2035 - UN NOUVEAU MOTEUR RÉVOLUTIONNE VOYAGE SPATIAL</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PM4",
  data() {
    return {
      img_bg: require("../Alx/Img/imageMars/3_Premiers-martien/3-/Bg-Fusee.png")
    };
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.PM4 {
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
    background: rgba(black, 0.8);
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
  p {
    text-align: center;
    width: 700px;
  }
}
</style>
