<template>
  <div class="home">
    <audio loop controls autoplay v-if='audio'>
        <source :src="son" type="audio/mpeg">
        Your browser does not support the audio tag.
    </audio>
    <div v-if="home">
      <section class="top">
        <router-link to="/menu">
          <a class="btn btn-primary">Explorer</a>
        </router-link>
      </section>
      
      <section class="content">
        <a href="" @click.prevent='introduction' v-if="mars">
          <svg data-aos="fade-down" data-aos-duration="3000" width="38" height="60" viewBox="0 0 38 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="first" d="M18.9598 34.8333H18.9993C25.1094 34.8333 30.0827 29.8617 30.0827 23.75V14.25C30.0827 8.16842 25.1316 3.20784 19.0294 3.16667H18.9344C12.8544 3.20151 7.91602 8.16526 7.91602 14.25V23.75C7.91602 29.8617 12.8703 34.8333 18.9598 34.8333ZM11.0827 14.25C11.0856 12.1554 11.9173 10.147 13.3962 8.66367C14.8751 7.18032 16.881 6.34254 18.9756 6.33334C23.3535 6.34284 26.916 9.89426 26.916 14.25V23.75C26.916 28.1153 23.3646 31.6667 18.9993 31.6667H18.9598C14.5438 31.6667 11.0827 28.1897 11.0827 23.75V14.25Z"/>
            <path class="first" d="M17.416 11.0833C17.416 10.2089 18.1249 9.5 18.9993 9.5C19.8738 9.5 20.5827 10.2089 20.5827 11.0833V17.4167C20.5827 18.2911 19.8738 19 18.9993 19C18.1249 19 17.416 18.2911 17.416 17.4167V11.0833Z"/>
            <path class="second" d="M11 40L19 48L27 40" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path class="second" d="M11 50L19 58L27 50" stroke-opacity="0.6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <h1 data-aos="fade-right" data-aos-duration="3000" v-if="mars">Mars</h1>
        <transition name="fade">
          <div class="circTxt" id="test" v-if="mars"></div>
        </transition>
        <img id="mars_planet" alt="Vue logo" :src="img">
      </section>
      <Siderbar>
        <div>
          <menu-list :direction="direction" :list="list" data-aos="zoom-in" data-aos-duration="2000"></menu-list>
          <div class="title">
            <p>Team 7</p>
            <h1 class="troke">Mars</h1>
          </div>
          <div class="aliens">
            <i class="ri-aliens-fill"></i>
            <i class="ri-aliens-fill" ></i>
            <i class="ri-aliens-fill"></i>
            <i class="ri-aliens-fill"></i>
            <i class="ri-aliens-line"></i>
            <i class="ri-aliens-fill"></i>
          </div>
        </div>
      </Siderbar>
    </div>
    <transition name="fade">
      <div class="intro" v-if="intro">
        <div class="action">
            <img data-aos="zoom-in" alt="Vue logo" :src="logo">
            <a class="btn btn-primary" @click.prevent="passed()">
              <i class="ri-skip-forward-line"></i> Passer
            </a>
        </div>
        <h3 class="msg-intro">
          
        </h3>
      </div>
    </transition>
      <video autoplay muted loop class="myVideo" v-if="intro">
        <source :src="myvideo" type="video/mp4"/>
      </video>
  </div>
</template>

<script>
// @ is an alias to /src
import Siderbar from '@/components/widgets/Siderbar.vue'
import MenuList from '@/components/widgets/MenuList.vue'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from "gsap";

export default {
  name: 'Home',
  components: {
    Siderbar,
    MenuList
  },
  data( ) {
    return {
      list: [
        {
          link: '/menu',
          item: 'Découvrir',
          icon: 'ri-checkbox-multiple-blank-line'
        }
      ],
      direction: 'vertical',
      mars: true,
      myvideo: require("../assets/video/curiosity.mp4"),
      son: require("../assets/audio/home.mp3"),
      audio: false,
      intro: true,
      home: false,
      img: require('@/assets/img/mars_planet.png'),
      logo: require('../assets/img/logo_mars_blanc.svg'),
      words: '"Il Y a deux ans, la Nasa faisait savoir que le rover Curiosity, qui roule depuis le mois d\'août 2012 sur les couches sédimentaires à l\'intérieur d\'un cratère martien dénommé Gale, avait détecté des molécules organiques dans des blocs de mubstone. La vie est-elle possible sur Mars ? Parcourez ce webdoc pour en savoir plus"'
    }
  },
  methods: {
    passed (){
      this.audio = !this.audio
      this.intro = !this.intro
      this.home = !this.home
      this.rotate()
      this.circularText(" A la conquête de mars, plongez au coeur de ce webdoc qui relate les ambitions les plus folles de l'humanité.   ", 100);
    },
    rotate (){
      setTimeout(()=>{
        document.querySelector("#mars_planet").classList.add('rotate')
      },2800);
    },
    circularText (txt) {
      txt = txt.split("")
      var classIndex = document.querySelector(".circTxt")

      var deg = 360 / txt.length,
        origin = 0

      txt.forEach((ea) => {
        ea = `<p class='circle' style='transform:rotate(${origin}deg) scale(1.2);animation:all 30s infinite linear; animation:all 30s infinite linear;'>${ea}</p>`
        classIndex.innerHTML += ea
        origin += deg
      })
    },
    scrollDetect(e){
      if(e.wheelDeltaY === -1){
        this.introduction()
      }
    },
    eventPress(e) {
      if (e.code === "ArrowDown") {
        this.introduction()
      }
    },
    introduction(){
      this.mars = false
      document.querySelector("#mars_planet").classList.add('transform')
      setTimeout(() => {
        this.$router.push('/caracteristiques')
      }, 2600);
    },
    startAnimate: function() {
        var textH2 = document.querySelector(".msg-intro");
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
  },
  created () {
    //window.addEventListener("keydown", this.eventPress);
    //document.addEventListener('mousewheel', this.scrollDetect);
  },
  destroyed () {
    //window.removeEventListener("keydown", this.eventPress);
    //document.removeEventListener('mousewheel', this.scrollDetect);
  },
  mounted(){
    AOS.init({
      startEvent: 'load'
    })
    this.startAnimate()

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@mixin desktop {
    @media (min-width: 1025px) {
      @content;
    }
}

@mixin tablet {
    @media (min-width: 768px) {
      @content;
    }
}

$assets: '~@/assets/';

audio {
  position: absolute;
  top: -1200px
}

.home {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.intro {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.6);
  z-index: 10001;
  display: flex;
  justify-content: center;
  align-items: center;

  .action {  
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    .btn {
      margin-left: 14px;
    }
    img {
      width: 70px;
    }
  }

  h3 {
    text-align: center;
    padding: 20px;
    text-transform: uppercase;
    line-height: 25px;
    letter-spacing: 2px;

    @include tablet{
      width: 50%;
      padding: 0;
      font-size: 130%;
    }
  }
}

.myVideo {
  min-height: 100%;
  min-width: 100%;
  position: fixed;
  width: auto;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000 ;
}

.top {
  width: 95%;
  display: flex;
  justify-content: flex-end;
  margin: 20px 20px 0 0;
}

.content {
  position: relative;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  img {
    width: 400px;
    position: absolute;
    bottom: -30px;
    right: -150px;
    z-index: -1;
    @include tablet(){
      width: 53%;
      right: 23%;
      bottom: -43%;
    }

    &.rotate {
      -webkit-animation: rotation 30s infinite linear;
      animation: rotation 30s infinite linear;
      
         @include tablet(){
           -webkit-animation: rotation 50s infinite linear;
            animation: rotation 50s infinite linear;
        }
    }

    &.transform{
      animation: animate-img 3s;
      @include tablet(){  
       animation: animate-img-tablet 3s;
      }
    }
  }

  h1 {
    font-size: 45px;
    margin: 32vh 0 0 32vw;
    color: #D9CBAC;
    @include tablet(){
      margin: 38vh 0 0 0;
      font-size: 100px;
    }
  }

  svg {
     margin: 25vh 0 0 0 ;
    @include tablet(){
      margin: 10vh 20px 0 0;
    }

    .first {
      fill: white;
      transition: 1s;
    }

    .second {
      stroke: white;
      transition: 1s;
    }
  }

  a {
     &:hover {
      .first {
        fill: red;
      }

      .second {
        stroke: red;
      }
    }
  }
}

.circTxt {
  display: inline-block;
  color: #D9CBAC;
  &.rotate {
      -webkit-animation: rotation 30s infinite linear;
      animation: rotation 30s infinite linear;
  }

  .circle {
    position:absolute;
    bottom: 178px ;
    left: 260px;
    height:30vh;
    transform-origin:0 100%;
    @include tablet(){
      position:absolute;
      bottom: 25px ;
      height:60vh;
      left: unset;
      transform-origin:0 100%;
    }
  }
}


@-webkit-keyframes rotation {
		from {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
		}
		to {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
		}
}
@keyframes rotation {
		from {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
		}
		to {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
		}
}

@keyframes animate-img {
  0% {
    
  }
  /* Adding a step in the middle */
  50% {
    
  }
  100% {
    width: 70%;
    bottom: 40%;
    right: 13%;
  }
}

@keyframes animate-img-tablet {
  0% {
    
  }
  /* Adding a step in the middle */
  50% {
    
  }
  100% {   
    width: 20%;
    bottom: 35%;
    right: 40%; 
  }
}
</style>

