<template>
  <div class="hello" v-show="visible">
    article {{ index }}
    Visible ? {{ visible }}
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Carousel",

  props: {
    msg: String
  },
  data() {
    return {
      index: 0
    };
  },
  computed: {
    visible() {
      return this.index === this.$parent.index;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  padding: 40px 0 0;
}
</style>