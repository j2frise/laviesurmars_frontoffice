<template>
  <div class="containervideo">
    <video class="containervideo__vid" :src="myvideo" controls autoplay controlsList="nodownload" />
    <div :class="bottom"> 
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Video",
  props:["myvideo","bottom"],
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

  .bottom {
    position: fixed;
    left: 0;
    bottom: 100px; 
    width: 95%;
    display: flex;
    justify-content: flex-end ;
  }

  &__vid {
    width: 92%;
    height: 100%;
    display: block;
    float: right;
  }
}
</style>