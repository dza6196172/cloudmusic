<template>
  <div class="userpop" @click.stop="">
    <div class="useractive">
      <div class="activeitem">
        <div class="activecount">{{userinfo.profile.eventCount}}</div>
        <div class="activename">动态</div>
      </div>
      <div class="activeitem">
        <div class="activecount">{{userinfo.profile.follows}}</div>
        <div class="activename">关注</div>
      </div>
      <div class="activeitem">
        <div class="activecount">{{userinfo.profile.followeds}}</div>
        <div class="activename">粉丝</div>
      </div>
    </div>
    <div class="signin">
      <button><span class="iconfont">&#xe647;</span>签到</button>
    </div>
    <div class="celllist">
      <div class="cellitem">
        <div class="left"><span class="iconfont">&#xe62b;</span>我的会员</div>
        <div class="right"><span style="font-size:12px;color:lightgray;">2022.10.28到期</span><span class="iconfont" style="color:gray">&#xe743;</span></div>
      </div>
      <div class="cellitem">
        <div class="left"><span class="iconfont">&#xe600;</span>等级</div>
        <div class="right"><span style="font-size:12px;color:lightgray;font-weight:700">Lv.{{userinfo.level}}</span><span class="iconfont" style="color:gray">&#xe743;</span></div>
      </div>
      <div class="cellitem">
        <div class="left"><span class="iconfont">&#xe697;</span>商城</div>
        <div class="right"><span class="iconfont" style="color:gray">&#xe743;</span></div>
      </div>
    </div>
    <div class="celllist">
      <div class="cellitem">
        <div class="left"><span class="iconfont">&#xe64d;</span>个人信息设置</div>
        <div class="right"><span class="iconfont" style="color:gray">&#xe743;</span></div>
      </div>
      <div class="cellitem">
        <div class="left"><span class="iconfont">&#xe61b;</span>绑定社交账号</div>
        <div class="right"><span class="iconfont" style="color:gray">&#xe743;</span></div>
      </div>
    </div>
    <div class="celllist">
      <div class="cellitem" @click="logout()">
        <div class="left"><span class="iconfont">&#xe74e;</span>退出登录</div>
        <div class="right"><span class="iconfont" style="color:gray">&#xe743;</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-pop",
  data() {
    return {
      userinfo:{}
    }
  },
  created() {
    this.userinfo = this.$storage.get('userdetail')
  },
  methods: {
    logout(){
      this.$storage.delete('token')
      this.$storage.delete('useraccount')
      this.$storage.delete('userdetail')
      location.reload()
    }
  },
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
  top: 45px;
  box-shadow: $shadow;
  left: 50%;
  transform: translateX(-50%);
  .useractive{
    display: flex;
    justify-content: space-around;
    padding: 25px 10px 15px 10px;
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
    margin: 0 auto 15px;
    button{
      cursor: pointer;
    }
    .iconfont{
      padding-right: 5px;
      font-size: 14px;
    }
  }
  .celllist{
    border-top: 1px solid #eee;
    .cellitem{
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      padding: 5px 15px;
      line-height: 30px;
      cursor: pointer;
      &:hover{
        background-color: #f0f1f2;
      }
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