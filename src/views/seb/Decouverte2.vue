<template>
  <div class="decouverte2" @click="changeStep">
    <img class="decouverte2__img" alt="image d'une fusée qui va vers la terre" :src="imgdec2" />
    <div class="decouverte2__content">
      <p class="decouverte2__content--txt">2016 à la conquête de la planète rouge</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "decouverte2",
  data() {
    return {
      imgdec2: require("../../assets/imageMars/1_Decouvertes-recentes/2-Decouvertes-recentes/Conquest.png")
    };
  },
  methods: {
    changeStep() {
      const $p = document.querySelector(".decouverte2__content--txt");
      const $div = document.querySelector(".decouverte2__content");
      $div.style.width = "30%";
      $p.style.width = "380px";
      $p.style.fontSize = "22px";
      $p.style.lineHeight = "33px";
      $p.textContent =
        "Plus que jamais, Mars fait rêver. Plus que jamais, elle semble accessible à l'Homme. Les agences spatiales et entreprises privées ont entamé leur course vers la planète rouge et entendent bien la domestiquer durant ce siècle";
    }
  }
};
</script>

<style lang="scss" scoped>
.decouverte2 {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  cursor: pointer;

  &__img {
    width: 100%;
  }
  &__content {
    height: 100vh;
    width: 100vw;
    background: rgba(black, 0.4);
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    &--txt {
      font-size: 34px;
    }
  }
}
</style>