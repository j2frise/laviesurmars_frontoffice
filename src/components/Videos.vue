<template>
  <div class="containervideo">
    <video class="containervideo__vid" :src="myvideo" controls autoplay controlsList="nodownload" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Video",
  props:["myvideo"],
  data() {
    return {
      playVideo: require("../assets/video-icon.svg"),
      iamshow: true
    };
  },
  methods: {
    goVideo() {
      this.iamshow = false;
      const $video = document.querySelector(".containervideo__vid");
      $video.controls = true;
      $video.play();
    }
  }
};
</script>

<style lang="scss">
.containervideo {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: black;

  &__vid {
    width: 92%;
    height: 100%;
    display: block;
    float: right;
  }
}
</style>