<template>
  <div class="sub_menu">
      <!--<Carousel v-for="(item, index) in elements" :key="index">
          <article>
              <card :element="item"></card>
          </article>
      </Carousel>-->
      <h1 class="main-title">Est-il possible de vivre sur mars ?</h1>

      <div class="container" data-aos="fade-up" data-aos-duration="3000" v-for="(item, index) in elements" :key="index">
        <h3 class="title-sub">Chapitre {{ index+1 }}</h3>
        <div class="content-sub">
          <router-link :to="'/chapitre/' + item.sub_id + '/' +parseInt(index+1) + '/'+ 1">
          <a>
            <div class="content-overlay"></div>
            <img class="content-image" :src="item.sub_sImage">
            <div class="content-details fadeIn-bottom">
              <h3 class="content-title">{{ item.sub_sTitre }}</h3>
              <p class="content-text">{{ item.sub_sDescriptif }}</p>
            </div>
          </a>
          </router-link>
        </div>
      </div>

  </div>
</template>

<script>
// @ is an alias to /src

import api from '../api';

export default {
  name: "Articles",
  data() {
    return {
      index: 0,
      elements: {}
    };
  },
  methods: {
    getSubjects() {
      api
        .request('get', '/list/index.php?q=subject&sta=1')
        .then(response => {
          var data = response.data
          if (!data.error) {
            this.elements = data.return
          } else {
            console.log(data.error)
            return
          }
        })
        .catch(error => {
          console.log(error)
          console.log('Serveur inactif')
        })
    }
  },
  mounted() {
    this.getSubjects()
  }
};
</script>

<style lang="scss" scoped>
.sub_menu {
  text-align: center;
  width: 90%;
  margin: auto;
  padding-bottom: 50px;
}

.main-title{
  padding: 1.2em 0 1.2em 20px;
  font-size: 25px;   
}

.container{
  padding: 1em 0 1em 40px;
  float: left;
  width: 100%;
}
@media screen and (max-width: 640px){
  .container{
    padding: 1em 0;
    display: block;
  }
}

@media screen and (min-width: 900px){
  .container{
    width: 33.33333%;
  }
}

.container .title-sub{
  text-align: center;
  margin-bottom: 10px;
  color: #D9CBAC;
}

.content-sub {
  position: relative;
  width: 90%;
  max-width: 400px;
  height: 200px;
  margin: auto;
  overflow: hidden;
}

.content-sub .content-overlay {
  background: rgba(0,0,0,0.7);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.content-sub:hover .content-overlay{
  opacity: 1;
}

.content-image{
  width: 100%;
  height: 100%;
}

.content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.content-sub:hover .content-details{
  top: 50%;
  left: 50%;
  opacity: 1;
}

.content-details h3{
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.content-details p{
  color: #fff;
  font-size: 0.8em;
}

.fadeIn-bottom{
  top: 80%;
}

.fadeIn-top{
  top: 20%;
}

.fadeIn-left{
  left: 20%;
}

.fadeIn-right{
  left: 80%;
}

</style>
