<template>
    <div class="card">
        <img src="https://vignette.wikia.nocookie.net/onepiece/images/8/8b/Marco_pleure.png/revision/latest?cb=20150926215930&path-prefix=fr">
        <div class="card__text">
            <p class="text">ezhuzhuzgeugff ugu ugiyt ytiutuu tutt tytiyt </p>
        </div>
    </div>
</template>

<script>
export default {
  name: "Card"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.card {
    display: flex;
    justify-content: flex-start;
    position: relative;
    height: 175px;
    width: 600px;
    margin: 5px 10px 10px 0px;
    img {
    left: 0;
    height: 100%;
    width: 50%;
  }
  &__text {
    position: absolute;
    display: flex;
    color: black;
    background: rgba(white, .9);
    top: 0;
    left: 0;
    height: 125px;
	  width: 300px;
    align-items: center;
    justify-content: center;
    padding: 5px;
    flex-wrap: wrap;
    transform: translate(80%,15%);
  }
  &:nth-child(even){
    justify-content: flex-end;
    .card__text {
      transform: translate(15%, 15%);
    }
  }
}
</style>