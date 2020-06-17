<template>
  <div class="menu">
    <section>
        <router-view></router-view>
    </section>
    <Siderbar>
      <div>
        <menu-list :direction="direction" :list="list" data-aos="zoom-in" data-aos-duration="2000"></menu-list>
      </div>
    </Siderbar>
  </div>
</template>

<script>
// @ is an alias to /src
import Siderbar from '@/components/widgets/Siderbar.vue'
import MenuList from '@/components/widgets/MenuList.vue'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'Menu',
  components: {
    Siderbar,
    MenuList
  },
  data( ) {
    return {
      list: [
        {
          link: '/',
          item: 'Accueil',
          icon: 'ri-home-8-line'
        }
      ],
      direction: 'vertical',
      img: require('../assets/img/mars_planet.png'),
      mars: true
    }
  },
  mounted(){
    AOS.init({
      startEvent: 'load'
    })
  }
}
</script>

<style lang="scss" scoped>
  .menu {
    display: flex;
    justify-content: flex-end;
    section {
      width: 92%;
    }
  }
</style>

