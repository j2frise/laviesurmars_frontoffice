<template>
  <div class="decouverte">
    <img class="decouverte__planets" alt="planets" :src="planetsDecouv" />
    <div class="decouverte__content">
      <h1
        class="decouverte__content--h1"
      >Mars aurait été complètement remodelée il y a 3 milliards d’années</h1>
      <img class="decouverte__content--img" alt="player" :src="player" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DecouverteRecente1a",
  data() {
    return {
      planetsDecouv: require("../../assets/seb/planetInfra.png"),
      player: require("../../assets/seb/circleplayer.svg")
    };
  }
};
</script>

<style lang="scss" scoped>
.decouverte {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    &--h1 {
      width: 500px;
    }
  }
}
</style>