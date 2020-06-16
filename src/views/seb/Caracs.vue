<template>
  <div class="caracs">
    <div class="caracs__menu">
      <img :src="menu__caracs" alt="menu caracs" />
    </div>
    <div class="container__lines">
      <img class="marsimg__strokeplanet" alt="planète mars" :src="marsstroke" />
      <img class="marsimg__stats" alt="planète mars" :src="marsStats" />
      <div class="stats__line">
        <section class="container__stats">
          <section class="border__stats"></section>
          <h3 class="text text__bold">6 792 km</h3>
          <h4 class="text text__mutted">Distance de la Terre</h4>
        </section>

        <section class="container__stats">
          <section class="border__stats"></section>
          <h3 class="text text__bold">- 63°</h3>
          <h4 class="text text__mutted">Température</h4>
        </section>
      </div>

      <div class="stats__line">
        <section class="container__stats">
          <section class="border__stats"></section>
          <h3 class="text text__bold">1,54 ua</h3>
          <h4 class="text text__mutted">Distance du Soleil</h4>
        </section>

        <section class="container__stats">
          <section class="border__stats"></section>
          <h3 class="text text__bold">2 satellites</h3>
          <h4 class="text text__mutted">Phobos et Déimos</h4>
        </section>
      </div>

      <div class="stats__line">
        <section class="container__stats">
          <section class="border__stats"></section>
          <h3 class="text text__bold">24 heures et 37 minutes</h3>
          <h4 class="text text__mutted">Rotation</h4>
        </section>

        <section class="container__stats">
          <section class="border__stats"></section>
          <h3 class="text text__bold">~ 76 millions de km</h3>
          <h4 class="text text__mutted">Distance de la terre</h4>
        </section>
      </div>
    </div>
    <div class="caracs__actions">
      <div class="actions__center">
        <div class="action__caracs--scroll">
          <div class="caracs__scroll--txt">
            <h3 class="caracs__scroll--h3">Scroll vers le bas</h3>
            <h5 class="caracs__scroll--h5">Pour passer la video</h5>
          </div>
          <img class="caracs__scroll--img" alt="scroll" :src="actionScrollImg" />
        </div>
        <div class="action__caracs--video">
          <div class="caracs__video--txt">
            <h3 class="caracs__video--h3">Lire la video explicative</h3>
            <h5 class="caracs__video--h5">sur les caractéristique</h5>
          </div>
          <img class="caracs__scroll--img" alt="watch video if you click" :src="actionVideoImg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Caracs",
  data() {
    return {
      menu__caracs: require("../../assets/seb/checkbox-multiple-line.svg"),
      marsStats: require("../../assets/img/mars_planet.png"),
      marsstroke: require("../../assets/seb/zonemars.png"),
      actionScrollImg: require("../../assets/seb/scroll.svg"),
      actionVideoImg: require("../../assets/seb/video-icon.svg")
    };
  }
};
</script>

<style lang="scss" scoped>
.caracs {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .caracs__menu {
    height: 60px;
    width: 100vw;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-bottom: 100px;

    img {
      padding: 0 16px;
    }
  }

  .container__lines {
    width: 95%;

    .marsimg__strokeplanet {
      position: absolute;
      left: 32%;
      top: 12%;
      height: 600px;
      width: 600px;
    }

    .marsimg__stats {
      height: 61%;
      width: 30%;
      position: absolute;
      left: 36%;
    }
  }

  .stats__line {
    position: relative;
    display: flex;
    justify-content: space-between;
    &:not(:last-child) {
      margin-bottom: 64px;
    }

    .container__stats {
      position: relative;
      padding: 15px;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      border-radius: 10px;
      justify-content: center;
      min-height: 80px;
      height: auto;

      .border__stats {
        position: absolute;
        left: 0;
        top: 0;
        right: unset;
        width: 4px;
        border-radius: 10px;
        height: 100%;
        background: rgb(224, 104, 34);
        background: linear-gradient(
          222deg,
          rgba(224, 104, 34, 1) 76%,
          rgba(156, 63, 45, 1) 100%
        );
      }

      &:nth-child(even) {
        text-align: right;

        .border__stats {
          left: unset;
          right: 0;
        }
      }
    }
  }
  .caracs__actions {
    height: 60px;
    min-height: 60px;
    width: 100vw;
    margin-top: 70px;
    display: flex;
    justify-content: center;

    .actions__center {
      width: 480px;
      display: flex;
      justify-content: space-between;

      .action__caracs--scroll {
        width: 190px;
        display: flex;

        .caracs__scroll--txt {
          width: 148px;
          height: 100%;

          .caracs__scroll--h3 {
            font-size: 16px;
            color: white;
          }

          .caracs__scroll--h5 {
            font-size: 11px;
            color: white;
          }
        }
      }

      .action__caracs--video {
        width: 250px;
        display: flex;
        justify-content: space-between;

        .caracs__video--txt {
          width: 200px;
          height: 100%;

          .caracs__video--h3 {
            font-size: 16px;
            color: white;
          }

          .caracs__video--h5 {
            font-size: 11px;
            color: white;
          }
        }
      }
    }
  }
}

h3 {
  font-size: 22px;
  line-height: 33px;
  height: 30px;
  font-family: "Faune", sans-serif;
}

h4 {
  font-size: 18px;
  font-family: "Faune";
}

.text {
  font-size: 12px;

  &__mutted {
    font-weight: 200;
    opacity: 0.4;
  }

  &__bold {
    font-weight: bold;
    font-size: 16px;
  }
}
</style>