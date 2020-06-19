<template>
  <div class="article">
    <div class="calc">
    </div>
    <transition name="slither">
      <section v-if="list.tya_id == 18">
        <div class="city_dome">
          <img id="bg" v-bind:src='dom1' alt="machine on mars">
          <transition name="fade">
            <div class="column" v-show="after">
              <p id="anim"> {{ list.art_sPar_1 }}</p>
            </div>
          </transition>
            <div class="city_dome__title">
                <transition name="list">
                  <h3 class="titles" v-show="before">{{ list.art_sTitre }}</h3>
                </transition>
                <transition name="fade">
                  <div class="city_dome__title--h2"  v-show="after">
                    <h2 class="musk"> </h2>
                  </div>
                </transition>
            </div>
            <transition name="fade">
              <div class="img-eM" v-show="after">
                  <a href="" @click.prevent="video = !video">
                    <img class="caracs__scroll" alt="watch video if you click" :src="actionVideoImg" />
                  </a>
                  <img v-bind:src="musk" alt="Elon Musk">
              </div>
            </transition>
        </div>
      </section>
    </transition>

    <div class="containernav">
      <div class="navigation"  @click.prevent="prev">
        <p class="arrow arrow__back">Précédent</p>
        <svg width="219" height="10" viewBox="0 0 219 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M219 9H1L19.0781 1" stroke="white" stroke-width="2"></path>
        </svg>
      </div>
        
      <div class="navigation" @click.prevent="next">
        <p class="arrow arrow__next">Suivant</p>
        <svg width="219" height="10" viewBox="0 0 219 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-1.52588e-05 9H218L199.922 1" stroke="white" stroke-width="2"></path>
        </svg>
      </div>

      <transition name="fade">
        <div class="video" v-if="video">
          <videos :myvideo="list.art_sVideo_1" :bottom="'bottom'">
            <div class="action">
              <a href="" class="btn btn-primary" @click.prevent="next_2">
                <i class="ri-skip-forward-line"></i> Passer
              </a>
              <a class="btn btn-primary" @click.prevent="video = !video">
                <i class="ri-close-fill"></i>
              </a>
            </div>
          </videos>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import Carousel from "@/components/Carousel.vue";
import Videos from '@/components/Videos.vue';
import { gsap } from "gsap";
export default {
  name: "Articles",
  props: ["list"],
  components: {
    //Carousel,
    Videos,
  },
  data() {
    return {
      dom1:require('../assets/img/Villes-martiennes.png'),
      musk:require('../assets/img/Elon-musk.png'),
      words: '"Sur Mars, vous pouvez commencer une civilisation auto-suffisante et la transformer en quelque chose de vraiment gros"',
      actionVideoImg: require("../assets/video-icon.svg"),
      video: false,
      after: false,
      before: true,
      myArticle: this.list
    };
  }, 
  mounted() {
    this.anime()
  },
  methods: {
    anime(){
      setTimeout(this.animate,3000)
    },
    animate(){
      this.after = !this.after
      this.before = !this.before
      this.startAnimate()
    },
     reset(){
      this.after = !this.after
      this.before = !this.before
    },
    next() {
      this.$parent.nextPage++;
      this.myArticle = this.$parent.articles[0]
      this.reset()
      this.anime()
      if (this.$parent.nextPage > this.$parent.nb) {
        this.$router.push("/menu");
        return
      }
      this.$router.push("/chapitre/"+ this.$parent.id + "/" + this.$parent.num + '/'+ this.$parent.nextPage);
    },
    next_2() {
      this.$parent.nextPage++;
      this.video = !this.video;
      this.myArticle = this.$parent.articles[0]
      this.reset()
      this.anime()
      if (this.$parent.nextPage > this.$parent.nb) {
        this.$router.push("/menu");
        return
      }
      this.$router.push("/chapitre/"+ this.$parent.id + "/" + this.$parent.num + '/'+ this.$parent.nextPage);
    },
    prev() {
      this.$parent.nextPage--;
      this.myArticle = this.$parent.articles[0]
      this.reset()
      this.anime()
      if (this.$parent.nextPage === 0) {
        this.$router.push("/menu");
        return
      }
      this.$router.push("/chapitre/"+ this.$parent.id + "/" + this.$parent.num + '/'+ this.$parent.nextPage);
    },
    startAnimate() {
         var textH2 = document.querySelector("h2.musk");
         var textSplit = this.splitText(this.words, textH2);
         return gsap.from(textSplit, { duration:0.8, visibility:"hidden", stagger: 0.08} );
      },
      splitText(word, parent) {
        const letters = word.split('')
        const spanArr = [];
        letters.forEach(letter => {
        const spanEl = document.createElement('span');
        parent.appendChild(spanEl);
        spanEl.innerHTML = letter;
        spanArr.push(spanEl);
      })
      return spanArr;
    }
  }
}
</script>

<style lang="scss" scoped>

.arrow {
  color: white;
  margin-bottom: 0;
  padding-left: 4px;
  transition: padding 0.6s ease-out;
  &:hover {
    padding-left: 30px;
  }
  &:nth-child(1) {
    padding-right: 4px;
    &:hover {
      padding-right: 30px;
    }
  }
}
.containernav {
  display: flex;
  justify-content: space-between;
  left: 15%;
  width: 70%;
  cursor: pointer;
  position: fixed;
  bottom: 25px;
  z-index: 5;
}
.navigation {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  &:nth-child(1) {
    align-items: flex-end;
  }

  :hover {
    .arrow {
      padding-left: 30px;
      &:nth-child(1) {
         padding-right: 30px;
      }
    }
  }
}


/*  Ville dome */
.city_dome {
    box-sizing: border-box;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    .column {
        display: flex;
        height: 100vh;
        width: 30%;
        background-color: rgba( #000000, 0.4);
        align-items: center;
        justify-content: center;
        z-index: 2;
    }
    p {
        z-index: 3;
        color: white;
        text-align: left;
        width: 70%;
        opacity: 0.9;
        line-height: 26px;
    }
    #bg {
        position: absolute;
        width:100vw;
        height: 100vh;
        z-index: 1;
    }
    .img-eM {
        z-index: 4;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        position: absolute;
        bottom: 50px;
        right: 0;
        img {
            width: 45%;
            height: 45%;
        }

        .caracs__scroll {
          width: 80px;
          position: absolute;
          top: 30%;
          transition: all 1.5s;

          &:hover {
            transform: scale(1.2);
          }
        }
    }
    .city_dome__title {
        z-index: 5;
        font-size: 24px;
        display: flex;
        text-align: center;
        height: 10%;
        margin-top: 150px;
        width: 50%;

        .titles {
          position: fixed;
          top: 50%;
          left: 35%;
          font-size: 28px;
          text-transform: uppercase;
        }
        &--h2{  
          margin-left: 100px;
          transform: rotate(-8deg);
        }
    }
}

.video {
  min-height: 100%;
  min-width: 100%;
  position: fixed;
  width: auto;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000 ;
}
</style>
