<template>
  <div class="container">
    <img :src="img" alt="Terre avec astronaute" />
    <div class="text_id6">
      <p class="text_terraforming">
        À plus long terme, la terraformation de Mars a plusieurs fois été évoquée.
        Il s'agit de rendre la planète habitable, de la même manière que la Terre,
        par des méthodes de géoingénierie. Elon Musk a d'ailleurs plusieurs fois
        lancé l'idée de bombarder les pôles martiens avec des bombes
        thermonucléaires pour réchauffer le planète. Radical. Mais plausible
        scientifiquement. Il faudrait simplement s'assurer que les humains ne sont
        plus sur place et... être patient, le processus prendrait plusieurs
        siècles.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Independance6",
  data() {
    return {
      img: require("../../assets/img/ground_astronaut.png"),
      img2: require("../../assets/img/houses_mars.png")
    };
  }
};
</script>

<style lang="scss">
.container {
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
  .text_id6 {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: rgba(black, 0.5);
    .text_terraforming {
      font-family: Faune;
      font-style: normal;
      font-weight: normal;
      font-size: 22px;
      line-height: 27px;
    }
  }
}
</style>
