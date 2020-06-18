<template>
  <div id="app">
    <Header />
    <transition name="slither" v-if="$route.path === '/menu'">
      <router-view/>
    </transition>
    <transition v-else>
      <router-view/>
    </transition>
    
  </div>
</template>

<script>
import 'reset-css' 
import 'remixicon/fonts/remixicon.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
 
  mounted() {
    AOS.init()
  }
}
</script>

<style lang="scss"> 
$assets: '~@/assets/';
@import 'node_modules/aos/src/sass/aos.scss';

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


body::-webkit-scrollbar {
  width: 12px;
}
body {
  scrollbar-width: thin;
  scrollbar-color: red #CFD8DC;
}
body::-webkit-scrollbar-track {
  background: #CFD8DC;
}
body::-webkit-scrollbar-thumb {
  background-color: red ;
  border-radius: 6px;
  border: 4px solid #CFD8DC;
}


html {
  cursor: url($assets + 'cursor.png') 4 10, auto;
}

body {
  background: #080808;
  font-family: 'faune-text-regular', sans-serif;
  color: #ffffff;
  letter-spacing: 1.3px;
  font-size: 16px;
   @include tablet() {
      font-size: .95em;
    }
  // background: url($assets + '/logo.png  ') no-repeat center center fixed; 
}

a {
  color: #ffffff;
  text-decoration: none;
  transition: 1s;

  &:hover, &:active, &:link {
    color: red;
  }
}


h1 {
  font-family: 'nebula-regular';
  text-transform: uppercase;
}

h2, h3, h4, h5, h6 {
  font-size: 18px;
}

h1 {
  font-family: 'nebula-regular';
  text-transform: uppercase;
  &.troke {
    font-family: 'nebula-hollow';
    font-weight: normal;
  }
}

#app {
  
}

.btn {
  display: inline-block;
  text-align: center;
  border-radius: 50px;
  line-height: 30px;
  padding: 0 18px;
  cursor: pointer;
  transition: 1s;
  &-primary {
    background-color: transparent;
    color : #ffffff;
    border: 0.5px solid white;
      &:hover {
    background-color: #ffffff;
    color:#080808;
    }
  }
}

.aliens {
  position: absolute;
  width: 85%;
  bottom: 0;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 30px;
   @include tablet(){
    line-height: 25px;
  }

  i {
    font-size: 28px;
    padding-bottom: 3px;
    @include tablet(){
      font-size: 22px;
      padding: 0;
    }
  }
} 

.title {
  /* Abs positioning makes it not take up vert space */
  position: absolute;
  bottom: 190px;
  left: 25%;
  background: none;
  transform-origin: 0 0;
  transform: rotate(-90deg);
  padding: 5px 10px;
  margin: 0 0 10px 0;
  line-height: 24px;
  border-left: 1px solid #ffffff ;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 250px;
  @include tablet(){
    bottom: 140px;
  }

  h1 {
    font-size: 35px;
  }
}

.video {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* Les animations d'entrée (« enter ») et de sortie (« leave »)  */
/* peuvent utiliser différentes fonctions de durée et de temps.  */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.slither-enter-active, .slither-leave-active {
  transition: transform 1s;
}

.slither-enter, .slither-leave-to {
  transform: translateX(-100%);
}

.slither-enter-to, .slither-leave {
  transform: translateX(0);
}

.drain-enter-active, .drain-leave-active {
  transition: transform 1s;
}

.drain-enter, .drain-leave-to {
  transform: translateY(100%);
}

.drain-enter-to, .drain-leave {
  transform: translateY(0);
}


.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
