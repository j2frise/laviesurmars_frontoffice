<template>
  <div class="decouvrir1d" @click="changeContent">
    <img class="decouvrir1d__img" alt="planet" :src="planetBlue" />
    <p>
      En redressant la planète de 20-25°, on obtient des rivières correspondant à la zone tropicale sud de Mars.
      Par exemple, on observe toujours un bourrelet, ayant une altitude plus élevée que celle des pôles, dans la zone équatoriale d'une planète.
      Un basculement découle un nouveau visage de la planète.
      Reste que la découverte d'un événement aussi déterminant dans son histoire est susceptible de lever des obstacles à la compréhension d'une planète actuellement au cœur de toutes les attentions.
    </p>
  </div>
</template>

<script>
export default {
  name: "decouverte1d",
  data() {
    return {
      planetBlue: require("../../assets/imageMars/1_Decouvertes-recentes/1-Decouvertes-recentes/Mars-eau.png")
    };
  },
  methods: {
    changeContent() {
      let $p = document.querySelector("p");
      $p.textContent = ` « Quand vous les placez sur
un planisphère, elles ont l'air d'être dispersées un peu partout,
mais, si vous remettez la carte en forme, elles se situent nettement
dans une bande circulaire » Sylvain Bouley`;
    }
  }
};
</script>

<style lang="scss" scoped>
.decouvrir1d {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;

  &__img {
    margin-left: 80px;
  }
  p {
    font-size: 22px;
    line-height: 33px;
    width: 515px;
  }
}
</style>