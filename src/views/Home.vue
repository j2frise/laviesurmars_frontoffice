<template>
  <div class="home">
    <Header></Header>
    <h1> Page d'introduction</h1>
    <router-link to="/menu">Menu</router-link>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/partials/Header.vue'
import Footer from '@/components/partials/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  }
}
</script>
