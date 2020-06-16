<template>
  <div class="container">
    <img :src="img" alt="Terre avec astronaute" />
    <div class="title_id5">
      <p class="title_independance5">2071 - 2500 : VERS UNE TERRAFORMATION DE MARS</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Independance5",
  data() {
    return {
      img: require("../../assets/img/ground_astronaut.png")
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
  .title_id5 {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: rgba(black, 0.5);
    .title_independance5 {
      font-family: Faune;
      font-style: normal;
      font-weight: 900;
      font-size: 34px;
      line-height: 45px;
    }
  }
}
</style>
