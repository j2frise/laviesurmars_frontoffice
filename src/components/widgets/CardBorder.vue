<template>
    <div :class="'container__stats container__stats--'+myclass">
        <article class="border__stats"></article>
        <h3 class="text text__bold">{{ title }}</h3>
        <h4 class="text text__mutted">{{ text}}</h4>
    </div>
</template>

<script>
export default {
  name: "CardBorder",
  props: ["title", "text", "myclass"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

@mixin desktop {
    @media (min-width: 1025px) {
      @content;
    }
}

@mixin tablet {
    @media (min-width: 768px) {
      @content;
    }
}

.container__stats {
  position: relative;
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 10px;
  justify-content: center;
  min-height: 60px;
  margin: 25px 20px;
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
  
  &--right {
    @include tablet{
      text-align: right;
      
      .border__stats {
        left: unset;
        right: 0;
      }
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