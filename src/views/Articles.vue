<template>
  <div class="article">
    <Carousel v-for="(element, index) in $parent.articles" :key="index">
      <div class="article-1">{{element.art_sTitre}}</div>
    </Carousel>

    <button @click.prevent="prev">Précédent</button>
    <button @click.prevent="next">Suivant</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel.vue";
export default {
  name: "Articles",
  props: ["list"],
  components: {
    Carousel
  },
  data() {
    return {
      index: 0,
      slide: 0
    };
  },
  methods: {
    next() {
      this.$parent.nextPage++;
      if (this.$parent.nextPage > this.$parent.nb) {
        this.$router.push("/menu");
        return
      }
      this.$router.push("/chapitre/"+ this.$parent.id + "/" + this.$parent.num + '/'+ this.$parent.nextPage);
    },
    prev() {
      this.$parent.nextPage--;
      if (this.$parent.nextPage === 0) {
        this.$router.push("/menu");
        return
      }
      this.$router.push("/chapitre/"+ this.$parent.id + "/" + this.$parent.num + '/'+ this.$parent.nextPage);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
