<template>
  <div class="decouverte4b">
    <img :src="decouv4b" class="decouverte4b__bg" alt="desert mars" />
    <img :src="littlerobot" class="decouverte4b__bot" alt="bot mars" />
    <audio :src="spacesong" class="decouverte4b__spacesong" alt="song space" controls />

    <div class="decouverte4b__content">
      <p
        class="decouverte4b__content--txt"
      >En 2018, la sonde InSight fit son atterrissage sur la planète rouge, pour une étude interne sur la géologie de Mars. Quelque temps plus tard, la sonde délivra certaines informations comme un enregistrement sonore des tremblements sur Mars. En une année Martienne, InSight a détecté 174 tremblements, parmi eux 150 avaient une haute fréquence, similaire à celle sur la Lune, les 24 autres tremblements sont à plus basse fréquence similaire à celle sur la Terre qui a permit le mouvement des plaques tectoniques.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "decouverte4b",
  data() {
    return {
      decouv4b: require("../../assets/imageMars/1_Decouvertes-recentes/3-Decouvertes-recentes/Desert-mars.png"),
      littlerobot: require("../../assets/imageMars/1_Decouvertes-recentes/3-Decouvertes-recentes/Insight-mars.png"),
      spacesong: require("../../assets/audio/space.mp3")
    };
  }
};
</script>

<style lang="scss" scoped>
@keyframes drone {
  0% {
    top: 80px;
    left: -200px;
  }
  100% {
    top: 450px;
    left: 216px;
  }
}

@keyframes audio {
  0% {
    top: 120px;
    left: -200px;
  }
  100% {
    top: 500px;
    left: 180px;
  }
}

.decouverte4b {
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  &__bg {
    width: 100%;
  }

  &__bot {
    position: absolute;
    left: 216px;
    top: 450px;
    animation: drone 3s ease-out;
  }

  &__spacesong {
    position: absolute;
    top: 500px;
    left: 180px;
    z-index: 5;
    animation: audio 3s ease-out;
  }

  &__content {
    width: 30%;
    height: 100%;
    background: rgba(black, 0.4);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;

    &--txt {
      width: 380px;
      font-size: 18px;
      line-height: 27px;
    }
  }
}
</style>