<template>
   <div class="sidebar__menu sidebar__menu--left">
       <slot></slot>
    </div>
</template>

<script>
export default {
  name: "Siderbar"
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

.sidebar__menu{

  z-index: 1000; // a changer
  color: white;
  padding: 5px;
	background: #080808;
	position: fixed;
	top: 0;
  bottom: 0;
  width: 60px;
  height: 100%;
  font-size: 11px;
   @include tablet() {
      width: 80px;
      font-size: 14px;
    }
  border-right: 0.5px solid rgba(255, 255, 255, 0.8);
  word-wrap: break-word;
  
  &--left {
    left: 0;
  }
   &--right {
    right: 0;
  }
  .menu {
      li {
        i {
            font-size: 30px;
            @include tablet() {
                font-size: 22px;
            }
        }
      }
  }
}
</style>