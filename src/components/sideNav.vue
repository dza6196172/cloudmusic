<template>
  <div class="sidenav">
    <ul>
      <li>发现音乐</li>
      <li>视频</li>
      <li>朋友</li>
      <li>直播</li>
      <li>私人FM</li>
    </ul>
    <div class="navtitle">我的音乐</div>
    <ul>
      <li><span class="iconfont">&#xe627;</span>本地音乐</li>
      <li><span class="iconfont">&#xe74d;</span>下载管理</li>
      <li><span class="iconfont">&#xe609;</span>我的音乐云盘</li>
      <li><span class="iconfont">&#xe693;</span>我的电台</li>
      <li><span class="iconfont">&#xe626;</span>我的收藏</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "side-nav",
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.sidenav {
  padding: 10px 2px 0 10px;
  width: 220px;
  // ::-webkit-scrollbar {
  //   display: block!important;
  //   width: 10px;
  //   height: 1px;
  // }
  // ::-webkit-scrollbar-thumb {
  //   /*滚动条里面小方块*/
  //   border-radius: 10px;
  //   box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  //   background: #535353;
  // }
  // ::-webkit-scrollbar-track {
  //   /*滚动条里面轨道*/
  //   box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  //   border-radius: 10px;
  //   background: #ededed;
  // }
  ul {
    li {
      padding: 8px 10px;
      margin: 2px 0;
      color: rgba($color: #000000, $alpha: 0.8);
      font-size: 15px;
      &:hover {
        background-color: #f6f6f7;
        cursor: pointer;
      }
      .iconfont {
        margin-right: 10px;
      }
    }
  }
  .navtitle {
    color: #aeaeae;
    font-size: 12px;
    padding: 10px;
    cursor: default;
  }
}
</style>