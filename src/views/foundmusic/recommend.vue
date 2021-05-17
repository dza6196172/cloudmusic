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
    };
  },
  created() {
    this.getbannerlist();
    this.getrecommendlist();
    this.getprivatecontentlist();
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
        console.log(res);
        if (res.code == 200) {
          this.privatecontentlist = res.result;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.recommend {
  padding: 10px 30px;
  max-width: 1100px;
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
}
</style>