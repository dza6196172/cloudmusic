<template>
  <div class="wrap">
    <div class="headernav">
      <div class="left">
        <div class="logo">
          <img src="@/assets/img/du.png" alt="" />
        </div>
        <div class="search">
          <div class="goback">
            <div class="back" @click="canback()">
              <span
                class="iconfont"
                :style="{ opacity: currentindex == 0 ? '.2' : '.8' }"
                >&#xe744;</span
              >
            </div>
            <div class="go" @click="forward()">
              <span
                class="iconfont"
                :style="{
                  opacity: currentindex == routehistory.length ? '.2' : '.8',
                }"
                >&#xe743;</span
              >
            </div>
          </div>
          <search-pop></search-pop>

          <div class="audiosearch" @click="refreshpage()">
            <span class="iconfont">&#xe7bf;</span>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="userinfo">
          <div class="avatar">
            <img
              :src="
                useraccount.avatarUrl
                  ? useraccount.avatarUrl
                  : require('@/assets/img/defaulthead.jpg')
              "
              alt=""
            />
          </div>
          <div class="username">
            <span class="userleft" v-if="useraccount.nickname" @click.stop="showUserPop()"
              >{{ useraccount.nickname
              }}<span class="iconfont">&#xe7b2;</span></span
            >
            <span class="userleft" @click="login()"  v-else
              >未登录<span class="iconfont">&#xe7b2;</span></span
            >
            <span class="userright" v-if="!useraccount.vipType||useraccount.vipType == 0"
              >开通VIP</span
            >
            <span class="userright" v-else
              ><img src="@/assets/img/vipicon.png" alt="" class="vipicon"
            /></span>
          </div>
          <user-pop v-if="userpopShow"></user-pop>
        </div>
        <div class="lefttool">
          <span class="iconfont" @click.stop="showColorPop()">&#xe748;</span>
          <color-pop v-if="colorpopShow"></color-pop>
          <span class="iconfont" @click="$router.push('/setting')">&#xe76c;</span>
          <span class="iconfont" @click.stop="showMessegePop()">&#xe74f;</span>
          <messege-pop v-if="messegepopShow"></messege-pop>
        </div>
        <div class="righttool">
          <span class="iconfont" @click="minimize()">&#xe7d2;</span>
          <span class="iconfont">&#xe7b1;</span>
          <span class="iconfont">&#xe7d1;</span>
          <span class="iconfont">&#xe747;</span>
        </div>
      </div>
    </div>
    <div class="place"></div>
  </div>
</template>

<script>
import { indexApi } from "@/api/request";
const { ipcRenderer } = window.require("electron");
import searchPop from "@/components/header/searchPop";
import userPop from "@/components/header/userPop";
import colorPop from "@/components/header/colorPop";
import messegePop from "@/components/header/messegePop";
export default {
  name: "headerNav",
  data() {
    return {
      routehistory: [],
      isback: false,
      isforward: false,
      currentindex: 0,
      useraccount: {},
      userdetail: null,
    };
  },
  components: {
    searchPop,
    userPop,
    colorPop,
    messegePop
  },
  created() {
    // this.getuseraccount()
    // this.$storage.delete('useraccount')
    // this.$storage.delete('token')
    if (this.$storage.get("useraccount") != undefined) {
      this.useraccount = this.$storage.get("useraccount");
      this.getuserdetail();
    }
  },
  mounted() {
    ipcRenderer.on("loginsuccess", (event, parma) => {
      this.getuseraccount();
    });
  },
  watch: {
    $route() {
      if (this.isback === true) {
        this.currentindex--;
        this.isback = false;
        return;
      }
      if (this.isforward === true) {
        this.currentindex++;
        this.isforward = false;
        return;
      }
      if (this.currentindex != this.routehistory.length) {
        this.routehistory.splice(this.currentindex);
        this.currentindex = this.routehistory.length;
      }
      this.routehistory.push(this.$route.name);
      this.currentindex++;
    },
  },
  computed: {
    userpopShow(){
      return this.$store.state.userpopShow
    },
    colorpopShow(){
      return this.$store.state.colorpopShow
    },
    messegepopShow(){
      return this.$store.state.messegepopShow
    }
  },
  methods: {
    showUserPop(){
      this.$store.state.userpopShow = true
      this.$store.state.colorpopShow = false
      this.$store.state.messegepopShow = false
    },
    showColorPop(){
      this.$store.state.colorpopShow = true
      this.$store.state.userpopShow = false
      this.$store.state.messegepopShow = false
    },
    showMessegePop(){
      this.$store.state.messegepopShow = true
      this.$store.state.userpopShow = false
      this.$store.state.colorpopShow = false
    },
    canback() {
      if (this.currentindex === 0) {
        return;
      }
      this.isback = true;
      this.$router.back();
    },
    forward() {
      if (this.currentindex == this.routehistory.length) {
        return;
      }
      this.isforward = true;
      this.$router.go(1);
    },
    refreshpage() {
      location.reload();
    },
    login() {
      ipcRenderer.send("login");
    },
    getuseraccount() {
      indexApi
        .useraccount({
          cookie: this.$storage.get("token"),
        })
        .then((res) => {
          this.$storage.set("useraccount", res.profile);
          location.reload();
        });
    },
    getuserdetail() {
      indexApi
        .userdetail({
          uid: this.useraccount.userId,
        })
        .then((res) => {
          this.userdetail = res;
          this.$storage.set("userdetail", res);
        });
    },
    minimize(){
      ipcRenderer.send('minimize')
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.headernav {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: $topic;
  -webkit-app-region: drag;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  .left {
    width: 480px;
    justify-content: space-between;
    display: flex;
    .logo {
      width: 130px;
      height: 60px;
      cursor: pointer;
      position: relative;
      img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        height: 25px;
      }
    }
    .search {
      display: flex;
      align-items: center;
      .goback {
        width: 60px;
        color: rgba($color: #ffffff, $alpha: 0.8);
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        .back {
          -webkit-app-region: no-drag;
          position: absolute;
          width: 25px;
          height: 25px;
          background-color: rgba($color: #000000, $alpha: 0.1);
          text-align: center;
          line-height: 25px;
          border-radius: 50%;
          left: 0;
          cursor: pointer;
        }
        .go {
          -webkit-app-region: no-drag;
          position: absolute;
          right: 0;
          width: 25px;
          height: 25px;
          background-color: rgba($color: #000000, $alpha: 0.1);
          text-align: center;
          line-height: 25px;
          border-radius: 50%;
          cursor: pointer;
        }
      }

      .audiosearch {
        -webkit-app-region: no-drag;
        width: 30px;
        height: 30px;
        background-color: rgba($color: #000000, $alpha: .1);
        color: rgba($color: #ffffff, $alpha: 0.5);
        text-align: center;
        line-height: 30px;
        border-radius: 50%;
        margin-left: 10px;
        cursor: pointer;
        .iconfont {
          font-size: 20px;
        }
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    .userinfo {
      position: relative;
      display: flex;
      .avatar {
        -webkit-app-region: no-drag;
        width: 30px;
        height: 30px;
        margin-right: 5px;
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .username {
        -webkit-app-region: no-drag;
        font-size: 12px;
        color: rgba($color: #ffffff, $alpha: 0.7);
        line-height: 30px;
        cursor: pointer;
        span {
          &:hover {
            color: white;
          }
        }
        .vipicon {
          display: inline-block;
          vertical-align: middle;
          width: 35px;
        }
      }
    }
    .lefttool {
      align-items: center;
      position: relative;
      box-sizing: content-box;
      padding-right: 5px;
      height: 16px;
      width: 110px;
      display: flex;
      justify-content: space-around;
      margin-left: 10px;
      border-right: 1px solid rgba($color: #ffffff, $alpha: 0.5);
      .iconfont {
        -webkit-app-region: no-drag;
        color: rgba($color: #ffffff, $alpha: 0.7);
        font-size: 22px;
        font-weight: 100;
        cursor: pointer;
        &:hover {
          color: white;
        }
      }
    }
    .righttool {
      align-items: center;
      height: 16px;
      width: 130px;
      display: flex;
      justify-content: space-around;
      margin-left: 10px;
      .iconfont {
        -webkit-app-region: no-drag;
        color: rgba($color: #ffffff, $alpha: 0.7);
        font-size: 22px;
        font-weight: 100;
        cursor: pointer;
        &:nth-of-type(3) {
          transform: scaleY(0.8);
        }
        &:hover {
          color: white;
        }
      }
    }
  }
}
.place {
  width: 100%;
  height: 60px;
}
</style>