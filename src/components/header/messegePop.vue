<template>
  <div class="messege-pop">
    <div class="title">
      <span class="titletext">消息</span>
      <span class="readall">一键已读</span>
    </div>
    <div class="messegetab">
      <div class="tabitem" @click="getmsgprivate()">私信</div>
      <div class="tabitem">评论</div>
      <div class="tabitem">@我</div>
      <div class="tabitem">通知</div>
    </div>
    <div class="messegecontent">
      <div class="msgprivate">
        <div class="havecontent">
          <div class="privateitem" v-for="(item,index) in privatemsg" :key="index">
            <div class="avatar"><img :src="item.fromUser.avatarUrl" alt="" width="30px" height="30px"></div>
            <div class="forminfo">
              <div class="fromname">{{item.fromUser.nickname}}</div>
              <div class="fromtime">{{item.lastMsgTime | date}}</div>
            </div>
            <div class="msg"></div>
          </div>
        </div>
        <!-- <div class="empty">暂无私信内容</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { indexApi } from "@/api/request";
export default {
  name: "messege-pop",
  data() {
    return {
      privatemsg:[]
    }
  },
  methods: {
    getmsgprivate(){
      indexApi.msgprivate({
        cookie:this.$storage.get('token')
      }).then(res => {
        this.privatemsg = res.msgs
      })
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.messege-pop{
  position: fixed;
  right: 0;
  width: 360px;
  height: calc(100vh - 130px);
  background-color: white;
  top: 60px;
  box-shadow: $shadow;
  .title{
    display: flex;
    justify-content: space-between;
    padding: 15px 30px;
    align-items: baseline;
    .titletext{
      font-size: 18px;
    }
    .readall{
      font-size: 16px;
      font-weight: 700;
    }
  }
  .messegetab{
    width: calc(100% - 60px);
    height: 30px;
    border-radius: 15px;
    border: 1px solid lightgray;
    margin: 0 30px 15px 30px;
    display: flex;
    justify-content: space-between;
    .tabitem{
      width: 25%;
      height: 28px;
      text-align: center;
      border-radius: 14px;
      font-size: 12px;
      line-height: 28px;
      cursor: default;
      &:hover{
        background-color: #f4f4f5;
      }
    }
  }
  .messegecontent{
    padding: 0 30px;
    .msgprivate{
      .havecontent{
        .privateitem{
          display: flex;
          ju
          .avatar{
            border-radius: 50%;
            overflow: hidden;
          }
          .forminfo{
            width: 260px;
            display: flex;
            justify-content: space-between;
          }
        }
      }
    }
  }
}
</style>