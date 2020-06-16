<template>
  <div class="PM5">
    <img class="PM5__bg" :src="img_bg" alt="bg" />
    <div class="PM5__div">
      <img class="PM5__schema" :src="img_schema" alt="schema" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PM5",
  data() {
    return {
      img_bg: require("../Alx/Img/imageMars/3_Premiers-martien/3-/Bg-Fusee.png"),
      img_schema: require("../Alx/Img/imageMars/3_Premiers-martien/3-/Schema.png")
    };
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.PM5 {
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  &__bg {
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
  }
  &__mars {
    position: absolute;
    width: 750px;
    height: 400px;
    left: 1170px;
    top: 372px;
    z-index: 2;
  }

  &__div {
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
