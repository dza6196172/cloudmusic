<template>
  <div class="messege-pop" @click.stop="">
    <div class="title">
      <span class="titletext">消息</span>
      <span class="readall">一键已读</span>
    </div>
    <div class="roundtab">
      <div :class="{tabitem:true,tabitemactive:currenttab==1}" @click="getmsgprivate()">私信</div>
      <div :class="{tabitem:true,tabitemactive:currenttab==2}">评论</div>
      <div :class="{tabitem:true,tabitemactive:currenttab==3}">@我</div>
      <div :class="{tabitem:true,tabitemactive:currenttab==4}">通知</div>
    </div>
    <div class="messegecontent">
      <div class="msgprivate">
        <div class="havecontent">
          <div
            class="privateitem"
            v-for="(item, index) in privatemsg"
            :key="index"
          >
            <div class="avatar">
              <img
                :src="item.fromUser.avatarUrl"
                alt=""
                width="30px"
                height="30px"
              />
            </div>
            <div class="content">
              <div class="forminfo">
                <div class="fromname">{{ item.fromUser.nickname }}</div>
                <div class="fromtime">{{ item.lastMsgTime | msgdate }}</div>
              </div>
              <div class="msg">{{ JSON.parse(item.lastMsg).msg }}</div>
            </div>
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
      privatemsg: [],
      currenttab:1,
    };
  },
  created() {
    this.getmsgprivate();
  },
  methods: {
    getmsgprivate() {
      indexApi
        .msgprivate({
          cookie: this.$storage.get("token"),
        })
        .then((res) => {
          this.privatemsg = res.msgs;
          this.currenttab = 1
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.messege-pop {
  position: fixed;
  right: 0;
  width: 360px;
  height: calc(100vh - 130px);
  background-color: white;
  top: 60px;
  box-shadow: $shadow;
  .title {
    display: flex;
    justify-content: space-between;
    padding: 15px 30px;
    align-items: baseline;
    .titletext {
      font-size: 18px;
    }
    .readall {
      font-size: 16px;
      font-weight: 700;
    }
  }
  
  .messegecontent {
    padding: 0 30px;
    overflow: scroll;
    height: calc(100vh - 229px);
    .msgprivate {
      .havecontent {
        .privateitem {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .avatar {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            overflow: hidden;
            cursor: pointer;
          }
          .content {
            border-bottom: 1px solid #f3f3f3;
            padding: 10px 0;
            .forminfo {
              width: 260px;
              display: flex;
              justify-content: space-between;
              cursor: pointer;
              .fromname {
                font-size: 12px;
                color: #507daf;
              }
              .fromtime {
                font-size: 11px;
                color: #cccccc;
                font-weight: 100;
              }
            }
            .msg {
              width: 260px;
              font-size: 12px;
              padding-top: 2px;
              @include nowrap();
            }
          }
        }
      }
    }
  }
}
</style>