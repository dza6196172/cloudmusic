<template>
  <div class="recommend">
    <el-carousel :autoplay="false" :interval="4000" type="card" height="200px">
      <el-carousel-item
        v-for="(item, index) in bannerlist"
        :key="index"
        style="left: -5%"
      >
        <img :src="item.imageUrl" alt="" />
      </el-carousel-item>
    </el-carousel>

    <div class="recommendlist">
      <div class="contenttitle">推荐歌单</div>
      <div class="content">
        <div class="recommendplaylist">
          <div
            class="playitem"
            v-for="(item, index) in recommendlist"
            :key="index"
          >
            <div class="pic"><img :src="item.picUrl" alt="" /></div>
            <div class="text">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="privatecontentlist">
      <div class="contenttitle">独家放送</div>
      <div class="content">
        <div
          class="playitem"
          v-for="(item, index) in privatecontentlist"
          :key="index"
        >
          <div class="pic">
            <img :src="item.sPicUrl" width="100%" height="100%" alt="" />
          </div>
          <div class="text">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div class="newsonglist">
      <div class="contenttitle">最新音乐</div>
      <div class="content">
        <div class="playitem" v-for="(item, index) in newsonglist" :key="index">
          <div class="pic">
            <img :src="item.picUrl" alt="" width="100%" /><span class="iconfont"
              >&#xe664;</span
            >
          </div>
          <div class="text">
            <div class="songname">{{ item.name }}</div>
            <div class="artist">
              <span v-for="(item1, index1) in item.song.artists">{{
                index1 == item.song.artists.length - 1
                  ? item1.name
                  : item1.name + " / "
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="recommendmvlist">
      <div class="contenttitle">推荐MV</div>
      <div class="content">
        <div
          class="playitem"
          v-for="(item, index) in recommendmvlist"
          :key="index"
        >
          <div class="pic">
            <img :src="item.picUrl" alt="" width="100%" />
            <div class="playcount">
              <span class="iconfont">&#xe664;</span>{{ item.playCount }}
            </div>
          </div>
          <div class="text">
            <div class="mvname">{{ item.name }}</div>
            <div class="artist">
              <span v-for="(item1, index1) in item.artists">
                {{
                  index1 == item.artists.length - 1
                    ? item1.name
                    : item1.name + " / "
                }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="djprogramlist">
      <div class="contenttitle">主播电台</div>
      <div class="content">
        <div
          class="playitem"
          v-for="(item, index) in djprogramlist"
          :key="index"
        >
          <div class="pic">
            <img :src="item.picUrl" alt="" width="100%" />
            <div class="desc">{{ item.copywriter }}</div>
          </div>
          <div class="text">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { indexApi } from "@/api/request";
export default {
  name: "recommend",
  data() {
    return {
      bannerlist: [],
      recommendlist: [],
      privatecontentlist: [],
      newsonglist: [],
      recommendmvlist: [],
      djprogramlist: [],
    };
  },
  created() {
    this.getbannerlist();
    this.getrecommendlist();
    this.getprivatecontentlist();
    this.getnewsonglist();
    this.getrecommendmvlist();
    this.getdjprogramlist();
  },
  methods: {
    getbannerlist() {
      indexApi.getbanner({}).then((res) => {
        if (res.code == 200) {
          this.bannerlist = res.banners;
        }
      });
    },
    getrecommendlist() {
      indexApi
        .getrecommend({
          limit: 10,
        })
        .then((res) => {
          if (res.code == 200) {
            this.recommendlist = res.result;
          }
        });
    },
    getprivatecontentlist() {
      indexApi.getprivatecontent({}).then((res) => {
        if (res.code == 200) {
          this.privatecontentlist = res.result;
        }
      });
    },
    getnewsonglist() {
      indexApi
        .getnewsong({
          limit: 12,
        })
        .then((res) => {
          if (res.code == 200) {
            this.newsonglist = res.result;
          }
        });
    },
    getrecommendmvlist() {
      indexApi.getrecommendmv({}).then((res) => {
        if (res.code == 200) {
          this.recommendmvlist = res.result;
        }
      });
    },
    getdjprogramlist() {
      indexApi.getdjprogram({}).then((res) => {
        if (res.code == 200) {
          this.djprogramlist = res.result;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.recommend {
  height: calc(100vh - 60px);
  padding: 10px 30px;
  max-width: 1100px;
  min-width: 760px;
  margin: 0 auto;
  ::v-deep .el-carousel__indicators--outside {
    .is-active {
      button {
        background-color: $red;
      }
    }
    button {
      background-color: #e6e6e6;
      opacity: 1;
    }
  }
  .el-carousel__item {
    min-width: 535px;
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  ::v-deep .el-carousel__indicator--horizontal {
    padding: 12px 5px;
  }
  ::v-deep .el-carousel__button {
    width: 6px !important;
    height: 6px !important;
    border-radius: 3px;
  }

  .recommendlist {
    .content {
      .recommendplaylist {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .playitem {
          width: 18.5%;
          cursor: pointer;
          margin-bottom: 20px;
          .pic {
            height: fit-content;
            border-radius: 5px;
            overflow: hidden;
            img {
              width: 100%;
            }
          }
          .text {
            color: rgba($color: #000000, $alpha: 0.8);
            font-size: 14px;
            margin-top: 5px;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
            &:hover {
              color: black;
            }
          }
        }
      }
    }
  }

  .privatecontentlist {
    .content {
      display: flex;
      justify-content: space-between;
      .playitem {
        width: 32%;
        cursor: pointer;
        margin-bottom: 20px;
        .pic {
          border-radius: 5px;
          overflow: hidden;
        }
        .text {
          color: rgba($color: #000000, $alpha: 0.8);
          font-size: 14px;
          margin-top: 5px;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          &:hover {
            color: black;
          }
        }
      }
    }
  }
  .newsonglist {
    min-width: 760px;
    margin-bottom: 20px;
    .content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .playitem {
        display: flex;
        width: 30%;
        margin-bottom: 15px;
        cursor: default;
        &:hover {
          background-color: rgba($color: #000000, $alpha: 0.1);
        }
        .pic {
          width: 50px;
          height: 50px;
          border-radius: 5px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          .iconfont {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            color: $red;
            width: 25px;
            height: 25px;
            background-color: rgba($color: white, $alpha: 0.8);
            border-radius: 50%;
            text-align: center;
            line-height: 25px;
            font-size: 12px;
          }
        }
        .text {
          width: 80%;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          margin-left: 10px;
          .songname {
            font-size: 13px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .artist {
            font-size: 13px;
            color: gray;
            span {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  .recommendmvlist {
    .content {
      display: flex;
      justify-content: space-between;
      .playitem {
        width: 24%;
        &:nth-of-type(4) {
          margin-right: 0;
        }
        .pic {
          width: 100%;
          border-radius: 5px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          .playcount {
            position: absolute;
            right: 10px;
            top: 5px;
            font-size: 12px;
            color: white;
            .iconfont {
              font-size: 12px;
              margin-right: 5px;
            }
          }
        }
        .text {
          line-height: 20px;
          margin-top: 10px;
          .mvname {
            font-size: 13px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .artist {
            font-size: 13px;
            color: gray;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
  .djprogramlist {
    margin-top: 20px;
    .content {
      display: flex;
      justify-content: space-between;
      .playitem {
        width: 15.5%;
        cursor: pointer;
        .pic {
          border-radius: 5px;
          overflow: hidden;
          width: 100%;
          position: relative;
          .desc {
            position: absolute;
            left: 5px;
            bottom: 5px;
            width: 98%;
            color: white;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 13px;
          }
        }
        .text {
          font-size: 13px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          padding: 10px 0;
        }
      }
    }
  }
}
</style>