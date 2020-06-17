<template>
  <div class="discover4">
    <img class="discover4__bg" alt="desert mars" :src="imgdisc" />
    <div class="discover4__content">
      <p class="discover4__content--txt">2018 LA NASA LANCE INSIGHT</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "decouverte4",
  data() {
    return {
      imgdisc: require("../../assets/imageMars/1_Decouvertes-recentes/3-Decouvertes-recentes/Desert-mars.png")
    };
  }
};
</script>

<style lang="scss" scoped>
.discover4 {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  cursor: pointer;

  &__bg {
    width: 100%;
  }

  &__content {
    background: rgba(black, 0.4);
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    &--txt {
      font-size: 34px;
    }
  }
}
</style>