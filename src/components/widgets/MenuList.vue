<template>
    <ul :class="'menu menu-'+direction"> 
      <li v-for="(element, index) in list" :key="index"> 
        <router-link :to="element.link">
          <a> <i :class="element.icon"></i> {{ element.item }}</a>
        </router-link>
      </li>
    </ul>
</template>

<script>
export default {
  name: "MenuList",
  props: {
    direction: String,
    list: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.menu {
  display: flex;
  padding: 0;
  margin: 0;
  li {
      list-style: none;
   
    a {
      display:flex;
      flex-direction: column;
      align-items:center;
      justify-content:center;
      padding: 10px 0;
      cursor: pointer;
      transition: 0.8s;
      &:hover, &:active, &.active {
        color: red;
      } 
    }
    
    i {
      font-size: 22px;
    } 
  }
  &-vertical {
    flex-direction: column;
  }
  &-horizontal {
    justify-content: space-around;
    li  {
      flex-grow: 1;
    } 
  }

  i {
    margin-bottom: 10px;
  }
}

</style>