<template>
  <div class="home" @click="hidePop()">
    <header-nav v-if="!isminiMode"></header-nav>
    <div class="maincontent" v-if="!isminiMode">
      <div class="left"><side-nav></side-nav></div>
      <div class="right" v-if="rightShow"><router-view/></div>
    </div>
    <bottom-player></bottom-player>
  </div>
</template>

<script>
import HeaderNav from '@/components/header/headerNav.vue'
import sideNav from '@/components/sideNav.vue'
import bottomPlayer from '@/components/bottom/bottomPlayer.vue'
export default {
  name: "home",
  data() {
    return {
      rightShow:true,
    }
  },
  components:{
    HeaderNav,
    sideNav,
    bottomPlayer
  },
  computed: {
    isminiMode(){
      return this.$store.state.isminiMode
    }
  },
  provide(){
    return {
      reload : this.reload
    }
  },
  methods: {
    hidePop(){
      this.$store.state.userpopShow = false
      this.$store.state.colorpopShow = false
      this.$store.state.messegepopShow = false
      this.$store.state.playlistShow = false
    },
    reload(){
      this.rightShow = false
      this.$nextTick(function(){
        this.rightShow = true
      })
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
      width: 200px;
      flex-shrink: 0;
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