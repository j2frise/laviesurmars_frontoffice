<template>
<div class="city_dome3">
   <img id="bg" v-bind:src='imgBg' alt="">
   <div class="bg_img"></div>
   <div class="column-text">
        <div class="column-text__right">
        <p> La Russie a un temps eu un programme ambitieux d'implanter des centrales nucléaires sur Mars. Si le projet devait voir le jour avant 2030, il apparait quasi impossible de le mener à bien dans de tels délais. En revanche, l'idée est sérieusement étudiée afin d'alimenter en énergie les infrastructures sur place.</p>
        </div>
   </div>
    <div class="bg-nuclear">
       <img v-bind:src="imgN" alt="">
   </div>
</div>
</template>

<script>
import 'reset-css';
/*import { gsap } from "gsap";*/

export default {
  name: 'CityDome3',
  data() {
    return { 
        imgBg:require('../../assets/img/Bg-civil.png'),
        imgN:require('../../assets/img/Nuclear.png')
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

.city_dome3 {
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
.city_dome3__title {
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
.column-text {
    position:absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .column-text__right {
        display: flex;
        height: 100vh;
        width: 30%;
        background-color: rgba( #000000, 0.4);
        align-items: center;
        justify-content: center;
        z-index: 4;
     p {
        z-index: 3;
        color: white;
        text-align: left;
        width: 55%;
        font-size: 20px;
        opacity: 0.9;
        line-height: 30px;
        }
    }
}
.bg-nuclear {
    z-index: 5;
    width: 70vw;
    height: 100vh;
    margin-left: 75px;
 
    img {
        width: 100%;
        height: 100%;
    } 
}
   
</style>