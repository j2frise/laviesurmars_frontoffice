<template>
  <div class="decouverte5">
    <img :src="planetpurple" class="decouverte5__planetpurple" />
    <p>
      Curiosity a trouvé des indices d’une ancienne période glacée sur Mars Selon des scientifiques,
      il y a pu avoir une période glaciaire sur Mars grâce à des indices trouvés par le rover Curiosity.
      La Nasa a décidé de le partager le 19 mai 2020 dans une étude de la revue "Nature Astronomy".
      Des appareils envoyés en orbite avaient déjà repérés des molécules organiques.
      Le problème c'est qu'on ne sait pas encore si l'ancienne atmosphère de l'astre a pu être suffisamment
      chaude et suffisamment longtemps pour affirmer "la vie existe !".
    </p>
  </div>
</template>

<script>
export default {
  name: "decouverte5",
  data() {
    return {
      planetpurple: require("../../assets/seb/marspurp.png")
    };
  }
};
</script>

<style lang="scss" scoped>
@keyframes falcon {
  0% {
    transform: translateX(-200px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes txt {
  0% {
    opacity: 0;
    transform: translate(-25%, 0);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

.decouverte5 {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  align-items: center;
  justify-content: space-around;
  display: flex;
  &__planetpurple {
    animation: falcon 2s ease-out;
  }
  p {
    font-size: 22px;
    line-height: 33px;
    width: 450px;
    animation: txt 2s ease-out;
  }
}
</style>