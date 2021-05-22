<template>
  <div class="index">
    <nav-tab :navlist="navlist"></nav-tab>
    <div class="content">
      <keep-alive v-if="$route.meta.keepalive">
        <router-view />
      </keep-alive>
      <router-view v-else></router-view>
    </div>
  </div>
</template>

<script>
import navTab from "@/components/navTab.vue";
export default {
  name: "index",
  components: {
    navTab,
  },
  data() {
    return {
      navlist: [
        {
          name: "个性推荐",
          isactive: true,
          link: "recommend",
        },
        {
          name: "歌单",
          isactive: false,
          link: "songlist",
        },
        {
          name: "主播电台",
          isactive: false,
          link: "radio",
        },
        {
          name: "排行榜",
          isactive: false,
          link: "ranklist",
        },
        {
          name: "歌手",
          isactive: false,
          link: "artistlist",
        },
        {
          name: "最新音乐",
          isactive: false,
          link: "newsong",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  height: calc(100vh - 190px);
  overflow: auto;
}
</style>