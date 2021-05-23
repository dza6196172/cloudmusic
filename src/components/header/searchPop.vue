<template>
  <div class="searchbar">
    <span class="iconfont" @click="search()">&#xe7b3;</span>
    <input
      type="text"
      v-model="searchcontent"
      @focus="getsearchhot()"
      @keyup="getSearchSuggest()"
      @keyup.enter="gotosearch()"
      @blur="searchpopShow = false"
      ref="searchbar"
      placeholder="搜索"
    />
    <div class="searchpop" v-if="searchpopShow">
      <div class="searchhistory" v-if="searchhistory.length != 0">
        <div class="title">搜索历史</div>
        <span
          class="historyitem"
          v-for="(item, index) in searchhistory"
          :key="index"
          >{{ item }}</span
        >
      </div>
      <div class="searchrank">
        <div class="title">热搜榜</div>
        <div class="rankitem" v-for="(item, index) in searchrank" :key="index">
          <div class="rank" :style="{ color: index < 3 ? 'red' : '#cccccc' }">
            {{ index + 1 }}
          </div>
          <div class="songinfo">
            <div class="songname">
              {{ item.searchWord }} <span class="hotval">{{ item.score }}</span>
            </div>
            <div class="songdesc">{{ item.content }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { indexApi } from "@/api/request";
const Store = window.require("electron-store");
const store = new Store();
export default {
  name: "search-pop",
  data() {
    return {
      searchcontent: "",
      searchrank: [],
      searchhistory: [],
      searchpopShow:false
    };
  },
  methods: {
    search() {
      indexApi
        .search({
          keywords: this.searchcontent,
          type: 1018,
        })
        .then((res) => {
          console.log(res);
        });
    },
    getSearchSuggest() {
      if (this.searchcontent == "") {
        this.getsearchhot();
        return;
      }
      indexApi
        .searchsuggest({
          keywords: this.searchcontent,
        })
        .then((res) => {
          console.log(res);
        });
    },
    getsearchhot() {
      if(store.get("searchhistory")){
        this.searchhistory = store.get("searchhistory");
      }
      indexApi
        .searchhot({
          keywords: this.searchcontent,
        })
        .then((res) => {
          this.searchrank = res.data;
        });
      this.searchpopShow = true
    },
    gotosearch() {
      this.searchhistory.push(this.searchcontent)
      store.set("searchhistory", this.searchhistory);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.searchbar {
  -webkit-app-region: no-drag;
  width: 160px;
  height: 30px;
  margin-left: 10px;
  background-color: #e13e3e;
  border-radius: 15px;
  display: flex;
  .iconfont {
    color: #f9d8d8;
    font-size: 18px;
    line-height: 30px;
    margin-left: 10px;
    cursor: pointer;
  }
  input {
    width: 100%;
    height: 100%;
    line-height: 30px;
    margin-left: 5px;
    color: white;
    font-size: 12px;
  }
  ::-webkit-input-placeholder {
    color: #e66262;
    line-height: 30px;
    font-size: 12px;
  }
  .searchpop {
    width: 360px;
    height: 450px;
    overflow-y: scroll;
    background-color: white;
    position: absolute;
    top: 45px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px #a3a3a3;
    padding-top: 20px;
    .title {
      font-size: 13px;
      color: #666666;
    }
    .searchhistory {
      margin-bottom: 20px;
      padding: 0 20px;
      .historyitem {
        margin-top: 10px;
        display: inline-block;
        padding: 3px 18px;
        border-radius: 13px;
        border: 1px solid #d9d9d9;
        font-size: 12px;
        margin-right: 5px;
        cursor: pointer;
        &:hover {
          background-color: #f3f3f3;
        }
      }
    }
    .searchrank {
      .title {
        padding: 0 20px;
      }
      .rankitem {
        padding: 0 20px;
        cursor: pointer;
        &:hover {
          background-color: #f3f3f3;
        }
        &:nth-of-type(2) {
          margin-top: 10px;
        }
        display: flex;
        .rank {
          width: 30px;
          height: 50px;
          line-height: 50px;
        }
        .songinfo {
          font-size: 12px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .songname {
            margin-bottom: 5px;
            .hotval {
              color: #cccccc;
              font-weight: 100;
              margin-left: 10px;
            }
          }
          .songdesc {
            color: #999999;
          }
        }
      }
    }
  }
}
</style>
