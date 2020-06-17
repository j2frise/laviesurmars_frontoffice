<template>
  <div class="caracs">  
    <section>
      <article class="planet_carac">
        <aside class="left">
          <card-border :text="'Diamètre'" :title="myData.fea_iDiametre+' km'" :myclass="left"></card-border>
          <card-border :text="'Distance du soleil'" :title="myData.fea_iDistanceSoleil+' ua'" :myclass="left"></card-border>
          <card-border :text="'Rotation'" :title="myData.fea_sRotation" :myclass="left"></card-border>
        </aside>
        <aside class="center">
          <img data-aos="zoom-in" data-aos-duration="2500" class="mars_planet" alt="Vue logo" :src="marsStats">
          <img class="circle" alt="Vue logo" :src="marsstroke">
        </aside>
        <aside class="right">
          <card-border :text="'Température'" :title="myData.fea_iTemperatue+'°'" :myclass="right"></card-border>
          <card-border :text="'Phobos et Déimos'" :title="myData.fea_iPhobos+' satellites'" :myclass="right"></card-border>
          <card-border :text="'Distance de la terre'" :title="'~ '+myData.fea_iDistance+' Millions de km'" :myclass="right"></card-border>
        </aside>
      </article>
      <article class="caracs__actions">
        <div class="actions__center">
          <div class="action__caracs--scroll">
            <div class="caracs__scroll--txt">
              <h3 class="caracs__scroll--h3">Scroll vers le bas</h3>
              <h5 class="caracs__scroll--h5">Pour passer la video</h5>
            </div>
            <img class="caracs__scroll--img" alt="scroll" :src="actionScrollImg" />
          </div>
          <div class="action__caracs--video" v-if="myData.fea_sVideo !== null">
            <div class="caracs__video--txt">
              <h3 class="caracs__video--h3">Lire la video explicative</h3>
              <h5 class="caracs__video--h5">sur les caractéristique</h5>
            </div>
            <a href="" @click.prevent="video = !video">
              <img class="caracs__scroll--img" alt="watch video if you click" :src="actionVideoImg" />
            </a>
          </div>
        </div>
      </article>
    </section>

    <Siderbar>
      <div>
        <menu-list :direction="direction" :list="list" data-aos="zoom-in" data-aos-duration="2000"></menu-list>
        <div class="title">
          <p>Team 7</p>
          <h1 class="troke">Mars</h1>
        </div>
        <div class="aliens">
          <i class="ri-aliens-fill"></i>
          <i class="ri-aliens-fill" ></i>
          <i class="ri-aliens-fill"></i>
          <i class="ri-aliens-fill"></i>
          <i class="ri-aliens-line"></i>
          <i class="ri-aliens-fill"></i>
        </div>
      </div>
    </Siderbar>
    <transition name="fade">
      <div class="video" v-if="video">
        <videos :myvideo="myData.fea_sVideo">
          <div class="action">
            <router-link to="/menu">
              <a class="btn btn-primary">
                <i class="ri-skip-forward-line"></i> Passer
              </a>
            </router-link>
              <a class="btn btn-primary" @click.prevent="video = !video">
                <i class="ri-close-fill"></i>
              </a>
          </div>
        </videos>
      </div>
     </transition>
  </div>
</template>

<script>
import Siderbar from '@/components/widgets/Siderbar.vue'
import MenuList from '@/components/widgets/MenuList.vue'
import CardBorder from '@/components/widgets/CardBorder.vue'
import Videos from '@/components/Videos.vue'

import api from '../api';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: "Caracs",
  components: {
    Siderbar,
    MenuList,
    CardBorder,
    Videos
  },
  data() {
    return {
      menu__caracs: require("../assets/checkbox-multiple-line.svg"),
      marsStats: require("../assets/img/mars_planet.png"),
      marsstroke: require("../assets/zonemars.png"),
      actionScrollImg: require("../assets/scroll.svg"),
      actionVideoImg: require("../assets/video-icon.svg"),
      direction: 'vertical',
      list: [
        {
          link: '/menu',
          item: 'Chapitres',
          icon: 'ri-checkbox-multiple-blank-line'
        }
      ],
      myvideo: require("../assets/video/itw.mp4"),
      myData: {},
      right: "right",
      left: "left",
      video: false
    }
  },
   methods: {
    getFeatures() {
      api
        .request('get', '/get/index.php?features')
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
    }
  },
  mounted(){
    AOS.init({
      startEvent: 'load'
    })
    this.getFeatures()
  }
}
</script>

<style lang="scss" scoped>
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

.caracs {
    width: 100vw;
   @include tablet{
    overflow: hidden;
    height: 100vh;
    width: 100vw;
   }

  section {
    height: 100%;
    width: 95%;
    float: right;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    @include tablet{
      justify-content: flex-end;
    }
  }

  .planet_carac {
    width: 90%;
    padding: 50px;
    padding-bottom: 0;
    display: flex;
    justify-content: space-between;
    order: 2;
    flex-direction: column;
    @include tablet{
      order: 1;
      flex-direction: row;
      align-self: flex-end;
    }

    .left {
      width: 100%;
      order: 2;
      @include tablet{
        width: 25%;
        order: 1;
      }
    }
    .center {
      width: 100%;
      position: relative;
      order: 1;
      text-align: center;
      @include tablet{
        width: 33%;
        order: 2;
        text-align: left;
      }
      img {
        width: 52%;
        @include tablet{
          width: 100%;
        }
      }
      .circle {
        position: absolute;
        left: 25%;
        top: 0;
        bottom: 0;
        transition: transform 0.8s;
        transform: scale(1.19);
        @include tablet{
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
        }
      }
      &:hover {
        .circle {
          transform: scale(1.25);
        }
      }
    }
    .right {
      width: 100%;
      order: 3;
      @include tablet{
        width: 25%;
      }
    }
  }

  .caracs__actions {
    height: 60px;
    min-height: 60px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    order: 1;
    @include tablet{
      order: 2;
      margin-top: 70px;
    }

    a {
      transition: transform 0.9s;
      &:hover{
        transform: scale(1.2);
      }
    }

    .actions__center {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: column;

      @include tablet{
        width: 480px;
        flex-direction: row;
      }

      .action__caracs--scroll {
        width: 190px;
        display: flex;
        margin: auto;
        @include tablet{
         margin: 0;
        }

        .caracs__scroll--txt {
          width: 148px;
          height: 100%;

          .caracs__scroll--h3 {
            font-size: 16px;
          }

          .caracs__scroll--h5 {
            font-size: 11px;
            font-weight: 200;
            opacity: 0.4;
          }
        }
      }

      .action__caracs--video {
        width: 250px;
        display: flex;
        justify-content: space-between;
        margin-left: 70px;
        @include tablet{
         margin: 0;
        }

        .caracs__video--txt {
          width: 200px;
          height: 100%;

          .caracs__video--h3 {
            font-size: 16px;
          }

          .caracs__video--h5 {
            font-size: 11px;
            font-weight: 200;
            opacity: 0.4;
          }
        }
      }
    }
  }
}


.action {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  z-index: 10;
  .btn {
    margin-left: 14px;
  }
}
</style>