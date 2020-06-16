<template>
  <div class="PM5">
    <img class="PM5__bg" :src="img_bg" alt="bg" />
    <div class="PM5__div">
      <video controls class="PM5__video" :src="video"></video>
    </div>
  </div>
</template>

<script>
export default {
  name: "PM6",
  data() {
    return {
      img_bg: require("../Alx/Img/imageMars/3_Premiers-martien/3-/Bg-Fusee.png"),
      video: require("../Alx/Img/imageMars/3_Premiers-martien/3-/video/PM5__video.mp4")
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
  &__video {
    width: 719px;
    height: 442px;
    z-index: 5;
  }

  &__div {
    background: rgb(black, 0.8);
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
