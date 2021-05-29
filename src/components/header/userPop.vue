<template>
  <div class="userpop">
    <div class="useractive">
      <div class="activeitem">
        <div class="activecount">0</div>
        <div class="activename">动态</div>
      </div>
      <div class="activeitem">
        <div class="activecount">4</div>
        <div class="activename">关注</div>
      </div>
      <div class="activeitem">
        <div class="activecount">8</div>
        <div class="activename">粉丝</div>
      </div>
    </div>
    <div class="signin">
      <button><span class="iconfont">&#xe647;</span>签到</button>
    </div>
    <div class="celllist">
      <div class="cellitem">
        <div class="left"><span class="iconfont">&#xe62b;</span>我的会员</div>
        <div class="right"><span style="font-size:11px;color:lightgray">1022.10.91到期</span><span class="iconfont" style="color:gray">&#xe743;</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-pop",
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.userpop{
  width: 280px;
  height: 380px;
  position: absolute;
  background-color: white;
  border-radius: 5px;
  top: 60px;
  box-shadow: $shadow;
  .useractive{
    display: flex;
    justify-content: space-around;
    padding: 25px 10px;
    .activeitem{
      text-align: center;
      .activecount{
        font-weight: 700;
        font-size: 18px;
      }
      .activename{
        font-size: 12px;
        color: gray;
      }
    }
  }
  .signin{
    width: 80px;
    height: 30px;
    border-radius: 15px;
    border: 1px solid #d9d9d9;
    text-align: center;
    line-height: 28px;
    cursor: pointer;
    margin: 0 auto;
    .iconfont{
      padding-right: 5px;
      font-size: 14px;
    }
  }
  .celllist{
    .cellitem{
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      padding: 10px 15px;
      line-height: 30px;
      .left{
        .iconfont{
          margin-right: 6px;
          font-size: 18px;
        }
      }
    }
  }
}
</style>