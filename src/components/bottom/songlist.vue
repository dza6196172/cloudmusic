<template>
  <div class="songlist" @click.stop="">
    <div class="roundtab">
      <div class="tabitem">播放列表</div>
      <div class="tabitem">历史记录</div>
    </div>
    <div class="songlistinfo">
      <div class="songcount"><span class="count">总{{playlist.tracks.length}}首</span><span class="iconfont">&#xe603;</span></div>
      <div class="songcollect"><span class="iconfont">&#xe687;</span><span class="collectall">收藏全部</span></div>
      <div class="songclear"><span class="iconfont">&#xe602;</span><span class="clearall">清空</span></div>
    </div>
    <div class="songs">
      <div class="song" v-for="(song,index) in playlist.tracks" :key="index">
        <div class="songname">{{song.name}}</div>
        <div class="artist">
          <span v-for="(artist,index) in song.ar">{{index == song.ar.length-1?artist.name:artist.name+'/'}}</span>
        </div>
        <div class="resourse"><span class="iconfont">&#xe61b;</span></div>
        <div class="duration">{{song.dt | musicdt}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "songlist",
  data() {
    return {
      
    }
  },
  created() {
    // this.$store.commit('getplaylist')
    // if(this.$storage.get('playlist')){
    //   this.playlist = this.$storage.get('playlist')
    // }
  },
  computed: {
    playlist(){
      return this.$store.state.playlist
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
  .songlist{
    position: absolute;
    right: 0;
    bottom: 70px;
    width: 420px;
    height: calc(100vh - 130px);
    background-color: white;
    z-index: -2;
    box-shadow: $shadow;
    .roundtab{
      margin-top: 20px;
      .tabitem{
        width: 100px;
      }
    }
    .songlistinfo{
      margin: 0 20px;
      padding-bottom: 10px;
      display: flex;
      border-bottom: 1px solid #f3f3f3;
      .songcount{
        display: flex;
        align-items: center;
        width: 190px;
        .count{
          font-size: 12px;
          color: lightgray;
          margin-right: 5px;
        }
        .iconfont{
          font-size: 14px;
          color: gray;
          cursor: pointer;
        }
      }
      .songcollect{
        display: flex;
        align-items: center;
        width: 100px;
        cursor: pointer;
        .collectall{
          font-size: 12px;
        }
        .iconfont{
          font-size: 20px;
          margin-right: 5px;
        }
      }
      .songclear{
        display: flex;
        cursor: pointer;
        justify-content: flex-end;
        align-items: center;
        width: 80px;
        border-left: 1px solid lightgray;
        .iconfont{
          font-size: 20px;
          margin-right: 5px;
        }
        .clearall{
          font-size: 12px;
        }
      }
    }
    .songs{
      overflow-y: auto;
      height: calc(100vh - 228px);
      .song{
        width: 100%;
        display: flex;
        padding: 5px 20px;
        align-items: center;
        &:nth-of-type(2n){
          background-color: white;
        }
        &:nth-of-type(2n+1){
          background-color: #fafafa;
        }
        .songname{
          width: 190px;
          font-size: 12px;
          @include nowrap();
        }
        .artist{
          font-size: 12px;
          width: 90px;
          @include nowrap();
        }
        .iconfont{
          font-size: 16px;
        }
        .duration{
          width: 50px;
          text-align: right;
          font-size: 12px;
          color: lightgray;
        }
      }
    }
  }
</style>