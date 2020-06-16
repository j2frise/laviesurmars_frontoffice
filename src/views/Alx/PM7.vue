<template>
  <div class="univers__star" @click="isShow = !isShow">
    <div class="container">
      <img class="container__planet" :src="img_mars" alt="mars" />
    </div>
    <transition name="slide-fade" :duration="3000">
      <div class="content" v-show="content">
        <h2>2038 - LES PREMIÈRES FERMES MARTIENNES</h2>
      </div>
    </transition>

    <transition name="list">
      <p v-show="isShow">
        Les premiers colons devront apprendre à être aussi des fermiers.
        La Nasa estime qu'il est parfaitement possible de faire pousser de la
        nourriture sous serre sur notre planète voisine. Comme Matt Damon
        dans Seul sur Mars (photo).
      </p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "PM7",
  data() {
    return {
      img_mars: require("../Alx/Img/imageMars/3_Premiers-martien/4-/Planete.png"),
      isShow: false,
      content: true
    };
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

$assets: "~@/views/Alx/Img/imageMars/3_Premiers-martien/";

.univers__star {
  color: white;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: url($assets+"Etoile.png");
  width: 100%;
  height: 100%;

  p {
    margin-top: 100px;
    width: 450px;
  }
}
.content {
  position: absolute;
  z-index: 2;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
