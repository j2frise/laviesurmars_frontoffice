<template>
  <div class="article">
    <div class="article-1" @click="change" v-if="active"> Voici l'article 1</div>
    <div class="article-2" @click="change" v-if="active"> Voici l'article 2</div>
    <div class="article-3" @click="change" v-if="active"> Voici l'article 3</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Articles',
  data() {
   return {
     active: true
     } 
  },
  methods: {
    change(e) {
      console.log(e.target)
      
    }
  }
}
</script>

<style lang="scss" scoped>



</style>
