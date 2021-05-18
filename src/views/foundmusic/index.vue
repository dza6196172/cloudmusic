<template>
  <div class="index">
    <nav-tab></nav-tab>
    <div class="content"><router-view/></div>
  </div>
</template>

<script>
import navTab from '@/components/navTab.vue'
export default {
  name: "index",
  components:{
    navTab
  }
}
</script>

<style lang="scss" scoped>
.content{
  height: calc(100vh - 180px);
  overflow: auto;
}
</style>