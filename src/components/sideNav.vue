<template>
  <div class="sidenav">
    <ul>
      <li @click="$router.push('/recommend')" :class="{activeroute:$route.name == 'recommend'}">发现音乐</li>
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
    <div class="navtitle">创建的歌单</div>
    <ul>
      <div v-for="(item,index) in userplaylist" :key="index" @click="selectPlayList(item.id)">
        <li v-if="item.creator.userId == $storage.get('useraccount').userId"><span class="iconfont">&#xe627;</span>{{item.name}}</li>
      </div>
    </ul>
    <div class="navtitle">收藏的歌单</div>
    <ul>
      <div v-for="(item,index) in userplaylist" :key="index" @click="selectPlayList(item.id)">
        <li v-if="item.creator.userId != $storage.get('useraccount').userId"><span class="iconfont">&#xe627;</span>{{item.name}}</li>
      </div>
    </ul>
  </div>
</template>

<script>
import {indexApi} from '@/api/request';
export default {
  name: "side-nav",
  data() {
    return {
      userplaylist:[]
    }
  },
  created() {
    if(this.$storage.get('useraccount')){
      this.getUserPlaylist();
    }
  },
  methods: {
    getUserPlaylist(){
      indexApi.userplaylist({
        uid:this.$storage.get('useraccount').userId
      }).then(res => {
        this.userplaylist = res.playlist
      })
    },
    selectPlayList(id){
      this.$router.push({
        name:'playlist',
        params:{
          id:id
        }
      })
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.sidenav {
  padding: 10px 2px 0 10px;
  width: 200px;
  ul {
    li {
      padding: 8px 10px;
      margin: 2px 0;
      color: rgba($color: #000000, $alpha: 0.8);
      font-size: 14px;
      width: 100%;
      @include nowrap();
      &:hover {
        background-color: #f6f6f7;
        cursor: pointer;
      }
      .iconfont {
        margin-right: 10px;
      }
    }
    .activeroute{
      background-color: #f6f6f7;
      font-weight: 700;
      font-size: 16px;
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