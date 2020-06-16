<template>
  <div class="container">
    <img :src="img" alt="Drapeau de la planète mars" />
    <div class="container_earth_mars">
      <img class="earth_mars" :src="img2" alt="Planète Terre et Mars" />
    </div>
    <div class="text_id2">
      <p class="text_government">
        À ce stade de la colonisation de la planète, les “martiens” sont dans
        l'obligation de créer une forme de gouvernance de la planète. Pour Elon
        Musk, cela ne pourra être qu'une "démocratie directe". Il faudra également
        réflechir à la relation à la Terre. Le gouvernement sera-t-il inféodé à
        notre planète ou s'agira-t-il d'une nation indépendante, comme le
        souhaitent les Asgardiens ?
      </p>
    </div>
  </div>
</template>


<script>
export default {
  name: "Independance2",
  data() {
    return {
      img: require("../../assets/img/flag_mars.png"),
      img2: require("../../assets/img/earth_mars.png")
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
  .container_earth_mars {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 464px;
    z-index: 2;
    height: 100vh;
    width: 70%;
  }
  .earth_mars {
    width: 600px;
    height: 430px;
  }
  .text_id2 {
    position: absolute;
    top: 0;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 33.3vw;
    background: rgba(black, 0.5);
    .text_government {
      margin-left: 30px;
      font-family: Faune;
      font-style: normal;
      font-weight: normal;
      font-size: 22px;
      line-height: 27px;
    }
  }
}
</style>

