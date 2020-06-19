<template>
  <div class="chapitre">
    <Header> 
      <h1>Chapitre {{ num }} : {{ myData.sub_sTitre }}</h1>
    </Header>
    <router-view :list="articles[0]"></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/partials/Header.vue'
import api from '../api'

export default {
  name: "Subjects",
  props: ["id","num","page"],
  components: {
    Header
  },
  data( ) {
    return {
      myData: {},
      articles: [],
      nb: 0,
      nextPage: this.page
    }
  },
  methods: {
    getSubjects() {
      api
        .request('get', '/get/index.php?subject&id=' + this.id)
        .then(response => {
          var data = response.data
          if (!data.error) {
            this.myData = data.return
          } else {
            console.log(data.error)
            return
          }
        })
        .catch(error => {
          console.log(error)
          console.log('Serveur inactif')
        })
    },
    getArticles() {
      api
        .request('get', '/list/index.php?q=article' + '&j=' + this.id + '&page=' + this.page)
        .then(response => {
          var data = response.data
          if (!data.error) {
            this.articles = data.return
            this.nb = data.nb
          } else {
            console.log(data.error)
            return
          }
        })
        .catch(error => {
          console.log(error)
          console.log('Serveur inactif')
        })
    },
  },
  mounted() {
    this.getSubjects()
    this.getArticles()
  },
  watch:{ 
    nextPage(){
      this.getArticles()
    }
  }
}
</script>
