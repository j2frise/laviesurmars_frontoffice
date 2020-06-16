<template>
  <div class="container">
    <img :src="img" alt="Drapeau de la planète mars" />
    <div class="title_id1">
      <p class="title_independance1">2061 - QUI GOUVERNE MARS ?</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Independance1",
  data() {
    return {
      img: require("../../assets/img/flag_mars.png")
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
  .title_id1 {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background: rgba(black, 0.5);
    .title_independance1 {
      font-family: Faune;
      font-style: normal;
      font-weight: 900;
      font-size: 34px;
      line-height: 45px;
    }
  }
}
</style>
