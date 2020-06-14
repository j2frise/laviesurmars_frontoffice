<template>
  <div class="page">
    <img data-aos="zoom-in" alt="Vue logo" :src="img">
    <h1 data-aos="fade-up" data-aos-duration="2000">404 page non trouvée</h1>
    <div data-aos="fade-up" data-aos-duration="3000">
       <router-link to="/">
        <a class="btn btn-primary">
          <i class="ri-home-8-line"></i> Retour à l'accueil
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'NotFound',
  components: {
    
  },
  data() {
    return {
      img: require('../assets/img/logo_mars_blanc.svg')
    }
  },
  mounted(){
    AOS.init();
  }
}
</script>

<style lang="scss" scoped>
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
  .page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  img {
    width: 150px;
    display: block;
    margin-bottom: 30px;

    @include tablet() {
      width: 350px;
    }
  }

  h1 {
    text-align: center;
    font-size: 30px;
    margin-bottom: 50px;
  }

</style>