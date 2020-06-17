<template>
  <div class="colonisation2_1">
    <div class="opacity"></div>
    <img class="bg" v-bind:src= bg alt="Background Planete">
		<div class="title">
      <h1>2043 - Des organismes survivent à la surface du sol</h1>
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
    }
  }
}
</script>
<style scoped lang="scss">
.colonisation2_1 {
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
  .title {
    font-size: 34px;
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