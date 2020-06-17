<template>
    <div class="card">
        <img data-aos="fade-right" data-aos-duration="2000" :src="element.sub_sImage">
        <div  class="card__text">
            <div data-aos="fade-left" data-aos-duration="3000" class="text">
              <h1>{{ element.sub_sTitre }}</h1>
              <p>
                {{ element.sub_sDescriptif }}
              </p> 
            </div>
        </div>
    </div>
</template>

<script>

import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: "Card",
  props: ["element"],
  mounted(){
    AOS.init({
      startEvent: 'load'
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >

.card {
    display: flex;
    justify-content: flex-start;
    position: relative;
    height: 350px;
    width: 800px;
    margin: 5px 10px 10px 0px;
   
    img {
    left: 0;
    height: 100%;
    width: 50%;
  }
  &__text {
    position: absolute;
    display: flex;
    color: black;
    background: rgba(white, .9);
    top: 0;
    left: 0;
    height: 80%;
    width: 435px;
    align-items: center;
    justify-content: center;
    padding: 5px 40px;
    flex-wrap: wrap;
    transform: translate(65%,10%);

    h1 {
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 15px;
    }
    p {
      line-height: 24px;
    }
  }
  &:nth-child(even){
    justify-content: flex-end;
    .card__text {
      transform: translate(15%, 15%);
    }
  }
}
</style>