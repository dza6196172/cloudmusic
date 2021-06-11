<template>
  <div class="playlist">
    <div class="playlistinfo">
      <div class="pic" @click="test()">
        <img :src="webplaylist.coverImgUrl" alt="" width="185px" height="185px">
      </div>
      <div class="info">
        <div class="playlistname">
          <div class="tag">歌单</div>
          <div class="name">{{webplaylist.name}}</div>
          <span class="iconfont">&#xe604;</span>
        </div>
        <div class="author">
          <div class="avatar"><img :src="webplaylist.creator.avatarUrl" alt="" width="25px" height="25px"></div>
          <div class="authorname">{{webplaylist.creator.nickname}}</div>
          <div class="createtime">{{webplaylist.createTime | date}}</div>
        </div>
        <div class="operate">
          <div class="playall">
            <div class="replaceall"><span class="iconfont">&#xe60a;</span>播放全部</div>
            <div class="pushall">+</div>
          </div>
        </div>
        <div class="tag"></div>
        <div class="timecountinfo"></div>
        <div class="desc"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "playlist",
  created() {
    this.$store.commit('getplaylist',this.$route.params.id);
  },
  computed: {
    ...mapState(['webplaylist'])
  },
  methods: {
    test(){
      console.log(this.webplaylist);
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
  .playlistinfo{
    padding: 30px;
    display: flex;
    .pic{
      width: 185px;
      height: 185px;
      border-radius: 5px;
      overflow: hidden;
      margin-right: 20px;
    }
    .info{
      .playlistname{
        display: flex;
        align-items: center;
        .tag{
          font-size: 12px;
          padding: 1px 4px;
          border: 1px solid $topic;
          border-radius: 3px;
          color: $topic;
          margin-right: 10px;
        }
        .name{
          font-size: 20px;
          font-weight: 700;
          margin-right: 10px;
        }
      }
      .author{
        display: flex;
        align-items: center;
        padding: 8px 0;
        .avatar{
          border-radius: 50%;
          width: 25px;
          height: 25px;
          overflow: hidden;
        }
        .authorname{
          font-size: 12px;
          color: #507daf;
          margin: 0 10px;
        }
        .createtime{
          font-size: 11px;
          color: lightgray;
        }
      }
      .operate{
        display: flex;
        padding: 5px 0;
        .playall{
          display: flex;
          .replaceall{
            width: 110px;
            height: 30px;
            line-height: 28px;
            border-top-left-radius: 15px;
            border-bottom-left-radius: 15px;
            text-align: center;
            background-color: $topic;
            color: white;
            font-size: 13px;
            cursor: pointer;
            &:hover{
              filter: brightness(.9);
            }
            .iconfont{
              margin-right: 10px;
            }
          }
          .pushall{
            height: 30px;
            width: 30px;
            background-color: $topic;
            color: white;
            line-height: 28px;
            text-align: center;
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
            position: relative;
            font-size: 20px;
            cursor: pointer;
            &:hover{
              filter: brightness(.9);
            }
            &::after{
              content:'';
              width: 1px;
              height: 30px;
              background-color: rgba($color: white, $alpha: .2);
              position: absolute;
              left: 0;
              top: 0;
            }
          }
        }
      }
    }
  }
</style>