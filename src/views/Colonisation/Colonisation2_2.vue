<template>
  <div class="colonisation2_2">
    <div class="opacity"></div>
    <img class="bg" v-bind:src= bg alt="Background Planete">
    <div class="content">
      <div class="content__mush">
        <img v-bind:src= mush alt="Mush">
      </div>
      <div class="content__text">
        <p>Alors que l'on désepérait de trouver de la vie sur Mars, la NASA et l'Esa
  pensent avoir trouvé le moyen d'en créer sur place. Comme nous l'évoquions
  sur Nom de Zeus, des champignons pourraient survivre à l'exposition des
  rayons solaires et à l'atmosphère martienne, saturée en CO2 et d'une pression
  extrêment elevée. Ils pourraient alors implanter directement de la vie dans le sol martien.</p>
      </div>
    </div>
  </div>
  
</template>

<script>
import 'reset-css'
export default {
  name: "Colonisation2",
  data() {
    return {
			bg: require("../../assets/img/4_Colonisation/2-Colonisation/Bg-desert.png"),
			mush: require("../../assets/img/4_Colonisation/2-Colonisation/rock.png")
    }
  }
}
</script>
<style lang="scss" scoped>
.colonisation2_2 {
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
    //border: 1px solid green;
    &__mush {
      order: -1;
      //border: 1px solid blue;
    }
    &__text {
      order: 1;
      width: 600px;
      font-size: 18px;
      //border: 1px solid red;
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