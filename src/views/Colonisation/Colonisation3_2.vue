<template>
  <div class="colonisation3_2">
    <div class="opacity"></div>
    <img class="bg" v-bind:src= bg alt="Background">
		<div class="meet">
			<img v-bind:src= meet alt="Viande">
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
      meet: require("../../assets/img/4_Colonisation/3-Colonisation/Meet.png"),
    }
  }
}
</script>
<style scoped lang="scss">
.colonisation3_2 {
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
  .meet {
    transform: scale(1.4,1.4)
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