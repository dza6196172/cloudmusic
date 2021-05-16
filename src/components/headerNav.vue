<template>
  <div class="headernav">
    <div class="left">
      <div class="logo">
        <img src="@/assets/img/du.png" alt="" />
      </div>
      <div class="search">
        <div class="goback">
          <div class="back"><span class="iconfont">&#xe744;</span></div>
          <div class="go"><span class="iconfont">&#xe743;</span></div>
        </div>
        <div class="searchbar">
          <span class="iconfont">&#xe7b3;</span>
          <input type="text" placeholder="搜索">
        </div>
        <div class="audiosearch">
          <span class="iconfont">&#xe748;</span>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="userinfo">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerNav",
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.headernav {
  width: 100%;
  height: 60px;
  background-color: $red;
  -webkit-app-region: drag;
  padding: 0 20px;
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
          -webkit-app-region:no-drag;
          position: absolute;
          width: 25px;
          height: 25px;
          background-color: rgba($color: #000000, $alpha: 0.1);
          text-align: center;
          line-height: 25px;
          border-radius: 50%;
          left: 0;
        }
        .go {
          -webkit-app-region:no-drag;
          position: absolute;
          right: 0;
          width: 25px;
          height: 25px;
          background-color: rgba($color: #000000, $alpha: 0.1);
          text-align: center;
          line-height: 25px;
          border-radius: 50%;
        }
      }
      .searchbar{
        -webkit-app-region:no-drag;
        width: 160px;
        height: 30px;
        margin-left: 10px;
        background-color: #e13e3e;
        border-radius: 15px;
        display: flex;
        .iconfont{
          color: #f9d8d8;
          font-size: 18px;
          line-height: 30px;
          margin-left: 10px;
        }
        input{
          width: 100%;
          height: 100%;
          line-height: 30px;
          margin-left: 5px;
          color: white;
          font-size: 12px;
        }
        ::-webkit-input-placeholder{
          color: #e66262;
          line-height: 30px;
          font-size: 12px;
        }
      }
      .audiosearch{
        width: 30px;
        height: 30px;
        background-color: #e13e3e;
        color: #f9d8d8;
        text-align: center;
        line-height: 30px;
        border-radius: 50%;
        margin-left: 10px;
      }
    }
  }
}
</style>