<template>
  <div class="wrap">
    <div class="headernav">
      <div class="left">
        <div class="logo">
          <img src="@/assets/img/du.png" alt="" />
        </div>
        <div class="search">
          <div class="goback">
            <div class="back" @click="canback()"><span class="iconfont">&#xe744;</span></div>
            <div class="go" @click="$router.go(1)"><span class="iconfont">&#xe743;</span></div>
          </div>
          <div class="searchbar">
            <span class="iconfont">&#xe7b3;</span>
            <input type="text" placeholder="搜索" />
          </div>
          <div class="audiosearch" @click="refreshpage()">
            <span class="iconfont">&#xe7bf;</span>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="userinfo">
          <div class="avatar">
            <img src="@/assets/img/defaulthead.jpg" alt="" />
          </div>
          <div class="username">
            <span class="userleft"
              >未登录<span class="iconfont">&#xe7b2;</span></span
            >
            <span class="userright">开通VIP</span>
          </div>
        </div>
        <div class="lefttool">
          <span class="iconfont">&#xe748;</span>
          <span class="iconfont">&#xe76c;</span>
          <span class="iconfont">&#xe74f;</span>
        </div>
        <div class="righttool">
          <span class="iconfont">&#xe7d2;</span>
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
export default {
  name: "headerNav",
  methods: {
    refreshpage() {
      location.reload();
    },
    canback(){
      console.log(window.history);
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
  background-color: $red;
  -webkit-app-region: drag;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
        color: #f9d8d8;
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
      }
      .audiosearch {
        -webkit-app-region: no-drag;
        width: 30px;
        height: 30px;
        background-color: #e13e3e;
        color: #f9d8d8;
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
      }
    }
    .lefttool {
      align-items: center;
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