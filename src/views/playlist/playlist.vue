<template>
  <div class="playlist">
    <div class="playlistinfo">
      <div class="pic">
        <img
          :src="webplaylist.coverImgUrl"
          alt=""
          width="185px"
          height="185px"
        />
      </div>
      <div class="info">
        <div class="playlistname">
          <div class="tag">歌单</div>
          <div class="name">{{ webplaylist.name }}</div>
          <span class="iconfont">&#xe604;</span>
        </div>
        <div class="author" v-if="webplaylist.creator">
          <div class="avatar">
            <img
              :src="webplaylist.creator.avatarUrl"
              alt=""
              width="25px"
              height="25px"
            />
          </div>
          <div class="authorname">{{ webplaylist.creator.nickname }}</div>
          <div class="createtime">{{ webplaylist.createTime | date }}</div>
        </div>
        <div class="operate">
          <div class="playall">
            <div class="replaceall" @click="playall()">
              <span class="iconfont">&#xe60a;</span>播放全部
            </div>
            <div class="pushall">+</div>
            <div class="collect">
              <span class="iconfont">&#xe687;</span>收藏
            </div>
            <div class="share"><span class="iconfont">&#xe658;</span>分享</div>
            <div class="downloadall">
              <span class="iconfont">&#xe74d;</span>下载全部
            </div>
          </div>
        </div>
        <div class="tag">
          标签：
          <span
            v-if="webplaylist.tags && webplaylist.tags.length > 0"
            class="tags"
          >
            <span v-for="(item, index) in webplaylist.tags" :key="index">
              {{ item }}
              <span
                v-if="index != webplaylist.tags.length - 1"
                style="pointer-events: none; color: darkgray"
                >/</span
              >
            </span>
          </span>
          <span v-else class="tags">添加标签</span>
        </div>
        <div class="timecountinfo">
          歌曲：{{ webplaylist.trackCount }} 播放：{{ webplaylist.playCount }}
        </div>
        <div :class="{ desc: true, fold: isfold }">
          简介：{{ webplaylist.description }}
          <div class="unfold">
            <span class="iconfont" v-if="isfold" @click="isfold = false"
              >&#xe7b2;</span
            >
            <span class="iconfont" v-else @click="isfold = true">&#xe745;</span>
          </div>
        </div>
      </div>
    </div>
    <small-nav-tab
      :snavlist="snavlist"
      @jumpto="checkoutTab"
      position="relative"
    ></small-nav-tab>
    <div class="songs" v-show="webplaylist.tracks && snavlist[0].isactive">
      <div class="listtitle">
        <div class="index"></div>
        <div class="control"></div>
        <div class="songname">音乐标题</div>
        <div class="artist">歌手</div>
        <div class="album">专辑</div>
        <div class="durtaion">时长</div>
      </div>
      <div
        v-for="(item, index) in webplaylist.tracks"
        :key="index"
        class="list"
        @dblclick="playmusic(item)"
      >
        <div class="index">{{ (index + 1).toString().padStart(2, "0") }}</div>
        <div class="control">按钮</div>
        <div class="songname">{{ item.name }}</div>
        <div class="artist">
          <span v-for="(artist, index) in item.ar" :key="index">{{
            index == item.ar.length - 1 ? artist.name : artist.name + "/"
          }}</span>
        </div>
        <div class="album">{{ item.al.name }}</div>
        <div class="durtaion">{{ item.dt | musicdt }}</div>
      </div>
    </div>
    <div class="comment" v-show="webplaylist.tracks && snavlist[1].isactive">
      <div class="commentbar">
        <textarea
          name=""
          id=""
          rows="3"
          @input="changelimit()"
          v-model="commenttext"
          maxlength="140"
        ></textarea>
        <div class="limit">{{ limit }}</div>
      </div>
      <div class="quickope">
        <div class="atandtopic">
          <span>@ </span>
          <span>#</span>
        </div>
        <div class="commentbutton">
          <button>评论</button>
        </div>
      </div>
      <div class="smalltitle" v-if="hotcommentlist.length!=0">精彩评论</div>
      <div class="commentlist">
        <div class="commentitem" v-for="(item,index) in hotcommentlist" :key="index">
          <div class="avatar"><img :src="item.user.avatarUrl" alt="" width="40px" height="40px"></div>
          <div class="right">
            <div class="commentcontent">
              <span class="username">{{item.user.nickname}}:</span>
              {{item.content}}
            </div>
            <div class="bottom">
              <div class="time">{{item.time | msgdate}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="smalltitle" v-if="newcommentlist.length!=0" ref="newcomment">最新评论</div>
      <div class="commentlist">
        <div class="commentitem" v-for="(item,index) in newcommentlist" :key="index">
          <div class="avatar"><img :src="item.user.avatarUrl" alt="" width="40px" height="40px"></div>
          <div class="right">
            <div class="commentcontent">
              <span class="username">{{item.user.nickname}}:</span>
              {{item.content}}
            </div>
            <div class="bottom">
              <div class="time">{{item.time | msgdate}}</div>
            </div>
          </div>
        </div>
      </div>
      <page-tab @changePage="changeCommentPage" :currentPage="commentPage" :total="commentcount" :pageSize="pagesize"></page-tab>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { indexApi } from "@/api/request";
import smallNavTab from "@/components/smallNavTab";
import pageTab from "@/components/pageTab"
export default {
  name: "playlist",
  data() {
    return {
      isfold: true,
      limit: 140,
      commentcount: 0,
      pagesize:60,
      commenttext: "",
      newcommentlist: [],
      hotcommentlist: [],
      commentPage:1,
      snavlist: [
        {
          name: "歌曲列表",
          isactive: true,
          link: "playlist",
        },
        {
          name: "评论",
          isactive: false,
          link: "comment",
        },
        {
          name: "收藏者",
          isactive: false,
          link: "collector",
        },
      ],
    };
  },
  components: {
    smallNavTab,
    pageTab
  },
  created() {
    this.$store.commit("getplaylist", this.$route.params.id);
    this.getplaylistcomment(0)
  },
  computed: {
    ...mapState(["webplaylist"]),
  },
  methods: {
    getplaylistcomment(page){
      indexApi
        .playlistcomment({
          id: this.$route.params.id,
          limit: this.pagesize,
          offset:page*this.pagesize
        })
        .then((res) => {
          this.commentcount = res.total;
          this.snavlist[1].name = `评论(${this.commentcount})`;
          this.newcommentlist = res.comments;
          if(res.hotComments){
            this.hotcommentlist = res.hotComments;
          }
        });
    },
    playall() {
      this.$store.commit("playall");
      this.$store.commit('getmusicurl',this.$store.state.webplaylist.tracks[0].id)
    },
    playmusic(item){
      this.$store.commit('getmusicurl',item.id)
    },
    checkoutTab(item) {
      this.snavlist.forEach((item1) => {
        if (item.link == item1.link) {
          item1.isactive = true;
        } else {
          item1.isactive = false;
        }
      });
    },
    changelimit() {
      this.limit = 140 - this.commenttext.length;
    },
    changeCommentPage(page){
      if(page == this.commentPage){
        return
      }
      this.commentPage = page
      this.getplaylistcomment(page-1)
      this.$refs.newcomment.scrollIntoView({behavior:'smooth'});
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.playlist {
  overflow: scroll;
  height: calc(100vh - 130px);
}
.playlistinfo {
  padding: 30px;
  display: flex;
  width: 100%;
  .pic {
    width: 185px;
    height: 185px;
    border-radius: 5px;
    overflow: hidden;
    margin-right: 20px;
    flex-shrink: 0;
  }
  .info {
    width: calc(100% - 200px);
    .playlistname {
      display: flex;
      align-items: center;
      .tag {
        font-size: 12px;
        padding: 1px 4px;
        border: 1px solid $topic;
        border-radius: 3px;
        color: $topic;
        margin-right: 10px;
      }
      .name {
        font-size: 20px;
        font-weight: 700;
        margin-right: 10px;
      }
    }
    .author {
      display: flex;
      align-items: center;
      padding: 5px 0;
      .avatar {
        border-radius: 50%;
        width: 25px;
        height: 25px;
        overflow: hidden;
      }
      .authorname {
        font-size: 12px;
        color: $link;
        margin: 0 10px;
      }
      .createtime {
        font-size: 11px;
        color: lightgray;
      }
    }
    .operate {
      display: flex;
      align-items: center;
      padding: 5px 0;
      .playall {
        display: flex;
        .replaceall {
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
          &:hover {
            filter: brightness(0.9);
          }
          .iconfont {
            margin-right: 10px;
          }
        }
        .pushall {
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
          &:hover {
            filter: brightness(0.9);
          }
          &::after {
            content: "";
            width: 1px;
            height: 30px;
            background-color: rgba($color: white, $alpha: 0.2);
            position: absolute;
            left: 0;
            top: 0;
          }
        }
      }
      .collect,
      .share,
      .downloadall {
        width: 100px;
        height: 30px;
        border-radius: 15px;
        border: 1px solid #d8d8d8;
        text-align: center;
        line-height: 28px;
        margin-left: 10px;
        font-size: 13px;
        .iconfont {
          margin-right: 5px;
        }
      }
    }
    .tag {
      font-size: 13px;
      margin: 8px 0;
      .tags {
        color: $link;
        cursor: pointer;
      }
    }
    .timecountinfo {
      font-size: 13px;
      margin: 5px 0;
    }
    .desc {
      font-size: 13px;
      position: relative;
      padding-right: 20px;
      line-height: 24px;
      width: 100%;
      .unfold {
        position: absolute;
        right: 0;
        top: 0;
        cursor: pointer;
      }
    }
    .fold {
      @include nowrap();
    }
  }
}
.songs {
  font-size: 13px;
  width: 100%;
  .listtitle {
    height: 30px;
    line-height: 30px;
    padding: 0 30px;
    display: flex;
  }
  .list {
    display: flex;
    height: 30px;
    line-height: 30px;
    @include nowrap();
    padding: 0 30px;
    font-weight: 100;
    &:nth-of-type(2n) {
      background-color: #f9f9f9;
    }
  }
  .index {
    width: 5%;
    overflow: hidden;
    text-align: right;
    padding-right: 10px;
  }
  .control {
    width: 7%;
  }
  .songname {
    width: 40%;
    @include nowrap();
    padding-right: 20px;
  }
  .artist {
    width: 19%;
    overflow: hidden;
    @include nowrap();
    padding-right: 20px;
  }
  .album {
    width: 25%;
    overflow: hidden;
    @include nowrap();
    padding-right: 20px;
  }
}
.comment {
  padding: 0 30px;
  .commentbar {
    position: relative;
    textarea {
      resize: none;
      border: 1px solid #e5e5e5;
      width: 100%;
      line-height: 20px;
      font-size: 14px;
      padding: 10px;
      box-sizing: border-box;
      border-radius: 5px;
    }
    .limit {
      position: absolute;
      right: 5px;
      bottom: 5px;
      font-size: 12px;
      color: lightgray;
    }
  }
  .quickope {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    .atandtopic {
      font-size: 20px;
    }
    .commentbutton {
      button {
        width: 60px;
        height: 30px;
        border-radius: 15px;
        border: 1px solid #e5e5e5;
        cursor: pointer;
        &:hover {
          background-color: #f2f2f2;
        }
      }
    }
  }
  .commentlist{
    .commentitem{
      display: flex;
      font-size: 12px;
      padding: 15px 0;
      border-bottom: 1px solid #f9f9f9;
      &:last-child{
        border-bottom: none;
      }
      .avatar{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        flex-shrink: 0;
        margin-right: 10px;
      }
      .right{
        .commentcontent{
          line-height: 18px;
          margin-bottom: 6px;
          .username{
            color:$link
          }
        }
        .bottom{
          display: flex;
          justify-content: space-between;
          .time{
            color: #9f9f9f;
          }
        }
      }
    }
  }
}
</style>