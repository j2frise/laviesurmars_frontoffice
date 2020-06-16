<template>
<div class="city_dome">
    <img id="bg" v-bind:src='imgBg' alt="machine on mars">
    <div class="column">
        <p id="anim"> Elon Musk, devant la Royal Aeronautic Society de Londres, le 16 novembre 2012. Il avait évoqué pour la première fois la construction de villes martiennes sous dômes transparents. Grâce aux matériaux apportés par les premiers pionniers, ces villes voient le jour au milieu des années 2050.</p>
    </div>
    <div class="city_dome__title">
        <div class="city_dome__title--h2">
              <h2> </h2>
        </div>
    </div>
    <div class="img-eM">
        <img v-bind:src= imgeM alt="Elon Musk">
    </div>
</div>
</template>

<script>
import 'reset-css';
import { gsap } from "gsap";

export default {
  name: 'CityDome1',
  data() {
    return { 
        imgBg:require('../../assets/img/Villes-martiennes.png'),
        imgeM:require('../../assets/img/Elon-musk.png'),
        words: '"Sur Mars, vous pouvez commencer une civilisation auto-suffisante et la transformer en quelque chose de vraiment gros"'
    }
  },
   mounted() {
      this.startAnimate()
   },
    methods: {
    startAnimate: function() {
         var textH2 = document.querySelector("h2");
         var textSplit = this.splitText(this.words, textH2);
         return gsap.from(textSplit, { duration:0.8, visibility:"hidden", stagger: 0.08} );
      },
      splitText(word, parent) {
        const letters = word.split('')
        const spanArr = [];
        letters.forEach(letter => {
        const spanEl = document.createElement('span');
        parent.appendChild(spanEl);
        spanEl.innerHTML = letter;
        spanArr.push(spanEl);
      })
      return spanArr;
    }
       
    }
}
</script>

<style scoped lang="scss">
.city_dome {
    box-sizing: border-box;
    display: flex;

    .column {
        display: flex;
        height: 100vh;
        width: 30%;
        background-color: rgba( #000000, 0.4);
        align-items: center;
        justify-content: center;
        z-index: 2;
    }
    p {
        z-index: 3;
        color: white;
        text-align: left;
        width: 55%;
        font-size: 20px;
        opacity: 0.9;
        line-height: 30px;
    }
    #bg {
        position: absolute;
        width:100vw;
        height: 100vh;
        z-index: 1;
    }
    .img-eM {
        z-index: 4;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        position: absolute;
        bottom: 0;
        right: 0;
        img {
            width: 70%;
            height: 70%;
        }
    }
    .city_dome__title {
        z-index: 5;
        font-size: 24px;
        display: flex;
        text-align: center;
        height: 10%;
        margin-top: 150px;
        width: 50%;
        margin-left: 100px;
        transform: rotate(-8deg);
    }
}
</style>
