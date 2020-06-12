<template>
  <div class="chapitre">
    <header-app></header-app>
    <h2>Chapitre {{ val }}</h2>
    <router-view :val='"1"'></router-view>
   <footer-app></footer-app>
  </div>
  
</template>

<script>
// @ is an alias to /src
import HeaderApp from '@/components/partials/HeaderApp.vue'
import FooterApp from '@/components/partials/FooterApp.vue'

export default {
  name: "Subjects",
  components: {
    FooterApp,
    HeaderApp
  },
  props: {
    val: Number
  }
}
</script>
