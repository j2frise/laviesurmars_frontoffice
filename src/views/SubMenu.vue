<template>
  <div class="sub_menu">
    <transition-group name="list">
        <Carousel v-for="(item, index) in elements" :key="index">
            <article>
               <card :element="item"></card>
            </article>
        </Carousel>
    </transition-group>


    <div class="containernav">
        <div class="navigation" @click.prevent="prev">
            <p class="arrow arrow__back">Mars en folie</p>
            <svg width="219" height="10" viewBox="0 0 219 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M219 9H1L19.0781 1" stroke="white" stroke-width="2"></path>
            </svg>
        </div>
        
        <div class="navigation" @click.prevent="next">
            <p class="arrow arrow__next">Mars en folie</p>
            <svg width="219" height="10" viewBox="0 0 219 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-1.52588e-05 9H218L199.922 1" stroke="white" stroke-width="2"></path>
            </svg>
        </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from "@/components/Carousel.vue";
import Card from "@/components/widgets/Card.vue";
import api from '../api';

export default {
  name: "Articles",
  components: {
    Carousel,
    Card
  },
  data() {
    return {
      index: 0,
      slide: [],
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
    },
    next() {
      this.index++;
      if (this.index >= this.slideCount) {
        this.index = 0
      }
    },
    prev() {
      this.index--;
      if (this.index < 0) {
        this.$router.push("/");
      }
    }
  },
  mounted() {
    this.slide = this.$children;
    console.log(this.$children);
    this.slide.forEach((slid, i) => {
      slid.index = i;
    });
    this.getSubjects()
  },
  computed: {
    slideCount() {
      return this.slide.length;
    }
  }
};
</script>

<style lang="scss" scoped>
.sub_menu {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
article {
   
}

.arrow {
  margin-bottom: 0;
  padding-left: 4px;
  transition: padding 0.6s ease-out;
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
  margin: 50px 60px 0 60px;
  width: 75%;
}
.navigation {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  cursor: pointer;
  &:hover{
    .arrow {
        padding-left: 30px;
        &:nth-child(1) {
            padding-right: 30px;
        }
    } 
  }

  &:nth-child(1) {
    align-items: flex-end;
  }
  
}
</style>
