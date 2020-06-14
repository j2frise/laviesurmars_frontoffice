<template>
  <div id="app">
    <Header />
    <router-view/>
    
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

</style>
