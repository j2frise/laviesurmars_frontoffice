<template>
  <div class="decouverte2b">
    <img :src="falcon" class="decouverte2b__falcon" />
    <p>À Guadalajara, Elon Musk, le patron de SpaceX annonce son Interplanetary Transport System et lance son ambitieux plan de colonisation martienne devant un parterre de scientifiques qui oscille entre l'admiration, le doute et la sidération. Les délais ne seront sûrement pas tenus, mais la machine est lancée.</p>
  </div>
</template>

<script>
export default {
  name: "decouverte2b",
  data() {
    return {
      falcon: require("../../assets/seb/falcon9.png")
    };
  }
};
</script>

<style lang="scss" scoped>
@keyframes falcon {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes txt {
  0% {
    opacity: 0;
    transform: translate(-25%, 50%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, 50%);
  }
}

.decouverte3 {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  &__falcon {
    animation: falcon 2s ease-out;
  }
  p {
    font-size: 22px;
    line-height: 33px;
    width: 387px;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-50%, 50%);
    animation: txt 2s ease-out;
  }
}
</style>