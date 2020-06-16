<template>
<div class="city_dome2">
   <img id="bg" v-bind:src='imgBg' alt="">
   <div class="bg_img"></div>
     <div class="city_dome2__title">
        <div class="city_dome2__title--h2">
              <h2>2053 - LES VILLES MARTIENNES</h2>
        </div>
    </div>
</div>
</template>

<script>
import 'reset-css';
/*import { gsap } from "gsap";*/

export default {
  name: 'CityDome2',
  data() {
    return { 
        imgBg:require('../../assets/img/Villes-martiennes.png'),
    }
  },
   mounted: function() {
      this.startAnimation()
   },
     
    methods: {
    /*startAnimation: function() {
        gsap.to("#anim", {x: "500", duration: 3})
        gsap.to("#anim", {x: "0", duration: 5, delay: 4})  
        }*/
    }
}
</script>

<style scoped lang="scss">

.city_dome2 {
    box-sizing: border-box;
    display: flex;
}
#bg {
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 1;
}
.bg_img {
    background-color: rgba( #000000, 0.2);
    width: 100vw;
    height: 100vh;
    z-index: 2;
    position: absolute;
}
.city_dome2__title {
    text-transform: uppercase;
    z-index: 3;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
}
</style>