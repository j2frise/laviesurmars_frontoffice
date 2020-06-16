<template>
  <div class="container">
    <img :src="img" alt="Planète Jupiter" />
    <div class="title_id3">
      <p class="title_independance3">2200 - ET ENSUITE, JUPITER ?</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Independance3",
  data() {
    return {
      img: require("../../assets/img/jupiter.png")
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
    position: absolute;
    top: -680px;
    left: -600px;
    height: 1313px;
    width: 1313px;
  }
  .title_id3 {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    .title_independance3 {
      font-family: Faune;
      font-style: normal;
      font-weight: 900;
      font-size: 34px;
      line-height: 45px;
      color: white;
    }
  }
}
</style>
