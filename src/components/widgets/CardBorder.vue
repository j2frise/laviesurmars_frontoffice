<template>
    <section class="container__stats">
        <article class="border__stats"></article>
        <h3 class="text text__bold">6 792 dssdsddssdqssqsdd dsqssdqskm</h3>
        <h4 class="text text__mutted">Distance de la Terre</h4>
    </section>
</template>

<script>
export default {
  name: "CardBorder"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.container__stats {
  position: relative;
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 10px;
  justify-content: center;
  min-height: 80px;
  height: auto;
  
  .border__stats {
  position: absolute;
  left: 0;
  top: 0;
  right: unset;
  width: 4px;
  border-radius: 10px;
  height: 100%;
  background: rgb(224,104,34);
  background: linear-gradient(222deg,
              rgba(224,104,34,1) 76%,
              rgba(156,63,45,1) 100%);
  }
  
  &:nth-child(even) {
    text-align: right;
    
    .border__stats {
      left: unset;
      right: 0;
    }
    
  }
  
    
  h3 {
    font-size: 17px;
    line-height: 33px;
    height: 30px;
  }

  h4 {
    font-size: 13.5px;
  }
  
  .text {
    font-size: 12px;

    &__mutted {
      font-weight: 200;
      opacity: 0.4;
    }

    &__bold {
      font-weight: bold;
      font-size: 16px;
    }
  }
}

</style>