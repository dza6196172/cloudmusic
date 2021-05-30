<template>
  <div class="home" @click="hidePop()">
    <header-nav></header-nav>
    <div class="maincontent">
      <div class="left"><side-nav></side-nav></div>
      <div class="right"><router-view/></div>
    </div>
    <bottom-player></bottom-player>
  </div>
</template>

<script>
import HeaderNav from '@/components/header/headerNav.vue'
import sideNav from '@/components/sideNav.vue'
import bottomPlayer from '@/components/bottomPlayer.vue'
export default {
  name: "home",
  components:{
    HeaderNav,
    sideNav,
    bottomPlayer
  },
  computed: {
    userpopShow(){
      return this.$store.state.userpopShow
    },
    colorpopShow(){
      return this.$store.state.colorpopShow
    }
  },
  methods: {
    hidePop(){
      this.$store.state.userpopShow = false
      this.$store.state.colorpopShow = false
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
  .maincontent{
    display: flex;
    height: calc(100vh - 130px);
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