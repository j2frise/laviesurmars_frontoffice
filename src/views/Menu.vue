<template>
  <div class="menu">
    <Header></Header>

    <h1> Menu </h1>

    <router-link v-for="i in 3" :key="i" :to='{name: "Subjects", params: {val: i}}'>Chapitre {{ i }} <br></router-link>
   
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/partials/Header.vue'
import Footer from '@/components/partials/Footer.vue'

export default {
  name: 'Menu',
  components: {
    Header,
    Footer
  }
}
</script>


