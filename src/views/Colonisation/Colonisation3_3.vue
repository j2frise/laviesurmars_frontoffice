<template>
  <div class="colonisation3_3">
    <div class="opacity"></div>
    <img class="bg" v-bind:src= "bg" alt="Background">
    <div class="content">
      <div class="content__pizza">
        <img v-bind:src= "pizza" alt="Pizza">
      </div>
      <div class="content__text">
        <p>En dehors des fermes hydroponiques, les colons devront
trouver d'autres sources d'alimentation. La Nasa se penche
très sérieusement sur des aliments (des pizzas en l'occurrence)
imprimés en 3D. La viande artificielle, créée à partir de cellules
animales, pourrait également être importée sur Mars.</p>
      </div>
    </div>
  </div>
  
</template>

<script>
import 'reset-css'
export default {
  name: "Colonisation3",
  data() {
    return {
			bg: require("../../assets/img/4_Colonisation/3-Colonisation/Bg-carreaux.png"),
      pizza: require("../../assets/img/4_Colonisation/3-Colonisation/Pizza.png")
    }
  }
}
</script>
<style lang="scss" scoped>
.colonisation3_3 {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  .bg {
    z-index: -2;
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .content {
    display: flex;
    flex-direction: column;
    &__pizza {
      order: 1;
      border: 1px solid blue;
    }
    &__text {
      order: -1;
      width: 600px;
      font-size: 34px;
      border: 1px solid red;
    }
  }
  .opacity {
    z-index: -1;
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(#000000, 0.5);
  }
}
</style>