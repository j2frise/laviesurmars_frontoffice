<template>
<div class="city_dome4">
   <img id="bg" v-bind:src='imgBg' alt="">
   <div class="bg_img"></div>
     <div class="city_dome4__title">
        <div class="city_dome4__title--h2">
              <h2>2051 - DES CENTRALES NUCLéAIRES SUR MARS</h2>
        </div>
    </div>
</div>
</template>

<script>
import 'reset-css';
/*import { gsap } from "gsap";*/

export default {
  name: 'CityDome4',
  data() {
    return { 
        imgBg:require('../../assets/img/Bg-civil.png')
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

.city_dome4 {
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
.city_dome4__title {
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