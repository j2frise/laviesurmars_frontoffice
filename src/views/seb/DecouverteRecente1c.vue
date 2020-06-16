<template>
  <div class="decouverte1c">
    <img class="decouverte1c__img" alt="sol mars" :src="solMars" />
    <div class="decouverte1c__container">
      <p>
        Un édifice volcanique “dôme de Tharsis” correspond à un plateau
        de 5000km de diamètre, 12km d’épaisseur et + d’1 milliard de
        tonnes. Si l'on s'attache à la localisation des pôles, ils ne
        correspondent plus à la même zone qu'avant ce basculement.
        Un peu comme si vous aviez fait pivoter la chair d'un abricot autour de son noyau.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "decouverterecente1c",
  data() {
    return {
      solMars: require("../../assets/imageMars/1_Decouvertes-recentes/1-Decouvertes-recentes/Mars-nom.png")
    };
  }
};
</script>

<style lang="scss" scope>
.decouverte1c {
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  &__img {
    width: 100%;
  }

  &__container {
    height: 100vh;
    width: 30%;
    background: rgba(black, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      line-height: 33px;
      font-size: 22px;
      width: 400px;
    }
  }
}
</style>