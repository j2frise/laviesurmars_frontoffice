<template>
  <div class="containervideo">
    <video class="containervideo__vid" :src="video" />
    <div class="containervideo__player" v-show="iamshow">
      <img
        class="containervideo__player--btn"
        alt="player button"
        :src="playVideo"
        @click="goVideo()"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Video",
  data() {
    return {
      video: require("../../assets/video/itw.mp4"),
      playVideo: require("../../assets/seb/video-icon.svg"),
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

  &__vid {
    width: 100vw;
    height: 100vh;
  }

  &__player {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    &--btn {
      width: 100px;
      height: 100px;
    }
  }
}
</style>