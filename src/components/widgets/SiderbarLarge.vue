<template>
    <div class="sidebar__large sidebar__large--left">
        <p class="text">
          <slot></slot>
        </p>
    </div>
</template>

<script>
export default {
  name: "SiderbarLarge"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.sidebar__large {
  z-index: 1000; // a changer
  color: white;
  padding: 20px;
	background: #080808;
	overflow: hidden;
	position: fixed;
	top: 0;
  bottom: 0;
  height: 100vh;
	width: 300px;
  opacity: .5;
  word-wrap: break-word;
  
  &--left {
    left: 0;
  }
   &--right {
    right: 0;
  }
}

.text {
  margin: 40vh auto;
  width: 80%;
}
</style>