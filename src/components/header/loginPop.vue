<template>
  <div class="userinfo">
    <div class="avatar">
      <img src="@/assets/img/defaulthead.jpg" alt="" />
    </div>
    <div class="username">
      <span class="userleft" @click="login()">未登录<span class="iconfont">&#xe7b2;</span></span>
      <span class="userright">开通VIP</span>
    </div>
    <div class="loginpop">
      <div class="loginheader">
        <span class="iconfont" @click="closelogin()">&#xe747;</span>
      </div>
      <div class="content">
        <div class="title">扫码登录</div>
        <div class="qrcode"><img src="@/assets/img/qrcode.png" alt=""></div>
        <div class="note">使用<span class="musiciapp" @click="downloadapp()">网易云音乐APP</span>扫码登录</div>
      </div>
    </div>
  </div>
</template>

<script>
const { ipcRenderer } = window.require("electron");
export default {
  name: "login-pop",
  methods: {
    login(){

    },
    downloadapp(){
      ipcRenderer.send('outurl','https://music.163.com/#/download')
    },
    closelogin(){
      ipcRenderer.send('closelogin')
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
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
  .loginpop{
    width: 350px;
    height: 530px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: white;
    .loginheader{
      position: absolute;
      width: 100%;
      height: 100%;
      // -webkit-app-region: drag;
      .iconfont{
        position: absolute;
        right: 6px;
        top: 6px;
        font-size: 24px;
        color: #a5a5a5;
        -webkit-app-region: no-drag;
        cursor: pointer;
      }
    }
    .content{
      position: absolute;
      left: 50%;
      top: 50%;
      width: 100%;
      transform: translate(-50%,-50%);
      text-align: center;
      -webkit-app-region: no-drag;
      .title{
        font-size: 26px;
        margin-bottom: 30px;
      }
      .qrcode{
        margin: 0 auto;
        width: fit-content;
      }
      .note{
        margin-top: 20px;
        font-size: 14px;
        .musiciapp{
          color: #0c73c2;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
