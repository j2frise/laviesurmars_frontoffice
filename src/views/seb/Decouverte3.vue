<template>
  <div class="decouverte3">
    <img :src="dragon" class="decouverte3__dragon" />
    <p>
      La capsule Red Dragon de SpaceX devient le premier vaisseau privé, et le plus gros engin spatial, à fouler le sol martien.
      En collaboration avec la NASA, ce projet de 320M de dollars devrait être la première étape d'une « cargo-route » qui permettrait
      d'envoyer ensuite un véhicule tous les 26 mois dès le premier atterrissage réussi.
    </p>
  </div>
</template>

<script>
export default {
  name: "decouverte3",
  data() {
    return {
      dragon: require("../../assets/seb/dragon.png")
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
    transform: translate(-25%, 50%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, 50%);
  }
}

.decouverte3 {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  align-items: center;
  display: flex;
  &__dragon {
    animation: falcon 2s ease-out;
  }
  p {
    font-size: 22px;
    line-height: 33px;
    width: 387px;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-50%, 50%);
    animation: txt 2s ease-out;
  }
}
</style>