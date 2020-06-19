<template>
  <div id="nav">
    <div class="link">
      <router-link to="/menu">
        <a>
          <i class='ri-checkbox-multiple-blank-line'></i>
        </a>
      </router-link>
    </div>
    <div class="party">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped lang="scss">

@mixin tablet {
    @media (min-width: 768px) {
      @content;
    }
}
#nav {
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 98.5%;
  justify-content: space-between;
  background: rgba(#000000, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  @include tablet {
    flex-direction: row;
  }
}
.party {
  font-size: 20px;
}
.link {
  margin-bottom: 20px;
  @include tablet {
    margin: 0;
  }
  i {
    font-size: 30px;
  }
}
</style>
