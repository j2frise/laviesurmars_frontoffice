<template>
  <div class="container">
    <img :src="bc_stars" alt="Etoiles en background" />
    <img :src="img" alt="Planète Jupiter" />
    <div class="text_id4">
      <p class="text_colonization">
        L'Interplanetary Transport System n'entend pas s'arrêter à la colonisation
        de Mars. Une fois notre voisine domptée, pourquoi ne pas aller voir plus
        loin, vers Jupiter et ses satellites couvers d'eau liquide ou vers Vénus ?
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Independance4",
  data() {
    return {
      img: require("../../assets/img/jupiter.png"),
      bc_stars: require("../../assets/img/Etoile.png")
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  transform: rotate(0deg);
  img {
    position: absolute;
    top: -200px;
    left: 700px;
    height: 1313px;
    width: 1313px;
    transform: rotate(-30deg);
  }
  .text_id4 {
    position: absolute;
    top: 0;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 55%;
    background: url("../../assets/img/Etoile.png");
    .text_colonization {
      font-family: Faune;
      font-style: normal;
      font-weight: normal;
      font-size: 22px;
      line-height: 27px;
      width: 420px;
      padding-left: 50px;
    }
  }
}
</style>
