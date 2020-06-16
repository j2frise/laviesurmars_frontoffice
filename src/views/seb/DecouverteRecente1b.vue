<template>
  <div class="decouvrirb">
    <img class="decouvrirb__bg" alt="robot in desert ?" :src="bgrobot" />
    <img class="decouvrirb__bot" alt="bot on mars" :src="botmars" />
    <div class="decouvrirb__content">
      <p>
        La planète est parcourue par les robots Curiosity et Opportunity,
        mais elle est différente de l'époque où la vie pouvait être apparue.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DecouverteRecente1b",
  data() {
    return {
      bgrobot: require("../../assets/imageMars/1_Decouvertes-recentes/1-Decouvertes-recentes/FAVPNG-mars-sol.png"),
      botmars: require("../../assets/imageMars/1_Decouvertes-recentes/1-Decouvertes-recentes/Exploreur.png")
    };
  }
};
</script>

<style lang="scss" scoped>
.decouvrirb {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;

  &__bg {
    width: 100%;
  }
  &__bot {
    position: absolute;
    bottom: 32px;
    left: 0;
    transform: rotate(5deg);
  }
  &__content {
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    margin-left: 240px;
    height: 300px;

    p {
      text-align: center;
      padding: 0 16px;
    }
  }
}
</style>