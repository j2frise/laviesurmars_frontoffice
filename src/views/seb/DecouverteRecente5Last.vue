<template>
  <div class="dec5last">
    <img class="dec5last__bg" :src="bgdec5" alt="cratère de Gale" />
    <div class="dec5last__container">
      <p
        class="dec5last__container--txt"
      >Des minéraux logés dans le cratère de Gale pourraient s'être formés dans un ancien lac glacé. Pour la période glaciaire, 2 possibilités s'offre à nous : Elle s'est passée entre 2 phases extrêmement chaudes ou soit lorsque les 3/4 de l'atmosphère s'est perdue dans l'espace. Cela repose sur des extraits de dioxyde de carbone et d'oxygène prélevés par le rover.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DecouverteRecente5Last",
  data() {
    return {
      bgdec5: require("../../assets/seb/crater.png")
    };
  }
};
</script>

<style lang="scss">
.dec5last {
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  &__bg {
    width: 100%;
  }
  &__container {
    height: 100%;
    width: 30%;
    background: rgba(black, 0.7);
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    &--txt {
      line-height: 27px;
      width: 242px;
    }
  }
}
</style>