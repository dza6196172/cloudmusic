<template>
  <div class="home">
    <header-nav></header-nav>
    <div class="maincontent">
      <div class="left"><side-nav></side-nav></div>
      <div class="right"><router-view/></div>
    </div>
    <bottom-player></bottom-player>
  </div>
</template>

<script>
import HeaderNav from '@/components/headerNav.vue'
import sideNav from '@/components/sideNav.vue'
import bottomPlayer from '@/components/bottomPlayer.vue'
export default {
  name: "home",
  components:{
    HeaderNav,
    sideNav,
    bottomPlayer
  }
}
</script>

<style lang="scss" scoped>
  .maincontent{
    display: flex;
    height: calc(100vh - 120px);
    .left{
      height: 100%;
      border-right: 1px solid #e1e1e1;
      overflow-y: auto;
      overflow-x: hidden;
    }
    .right{
      width: 100%;
      overflow: hidden;
    }
  }
</style>