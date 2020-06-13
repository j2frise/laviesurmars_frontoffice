<template>
  <div class="article">
    <Carousel>
      <div class="article-1">Dans la montagne de la mer de l'eau qui pleure</div>
    </Carousel>
    <Carousel>
      <div class="article-2">Le soleil s'enflamme et danse comme un dindon</div>
    </Carousel>
    <Carousel>
      <div class="article-3">L'espace innexploré</div>
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
  components: {
    Carousel
  },
  data() {
    return {
      index: 0,
      slide: []
    };
  },
  methods: {
    next() {
      this.index++;
      if (this.index >= this.slideCount) {
        this.$router.push("/menu");
      }
    },
    prev() {
      this.index--;
      if (this.index < 0) {
        this.$router.push("/menu");
      }
    }
  },
  mounted() {
    this.slide = this.$children;
    this.slide.forEach((slid, i) => {
      slid.index = i;
    });
  },
  computed: {
    slideCount() {
      return this.slide.length;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
