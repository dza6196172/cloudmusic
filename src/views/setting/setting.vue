<template>
  <div>
    <nav-tab :navlist="navlist" :forbid="true"></nav-tab>
    <small-nav-tab :snavlist="snavlist" @jumpto="jumpto"></small-nav-tab>
    <div class="settingcontent">
      <div class="account" ref="account">
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
      </div>
      <div class="title" ref="normal">
        常规
      </div>
      <div class="account">
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
      </div>
      <div class="title" ref="play">
        播放
      </div>
      <div class="account">
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
      </div>
      <div class="title" ref="messege">
        消息与隐私
      </div>
      <div class="account">
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
      </div>
      <div class="title" ref="shortcut">
        快捷键
      </div>
      <div class="account">
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
      </div>
      <div class="title" ref="download">
        下载设置
      </div>
      <div class="account">
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
      </div>
      <div class="title" ref="lyric">
        歌词
      </div>
      <div class="account">
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
      </div>
      <div class="title" ref="tool">
        工具
      </div>
      <div class="account">
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
      </div>
      <div class="title" ref="about">
        关于网易云音乐
      </div>
      <div class="account">
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
        <div>第一</div>
      </div>
    </div>
  </div>
</template>

<script>
import navTab from '@/components/navTab'
import smallNavTab from '@/components/smallNavTab'
export default {
  name: "setting",
  components:{
    navTab,
    smallNavTab
  },
  data() {
    return {
      navlist:[
        {
          name: "设置",
          isactive: false,
          link: "setting",
        },
      ],
      snavlist:[
        {
          name: "帐号",
          isactive: true,
          link: "account",
        },
        {
          name: "常规",
          isactive: false,
          link: "normal",
        },
        {
          name: "播放",
          isactive: false,
          link: "play",
        },
        {
          name: "消息与隐私",
          isactive: false,
          link: "messege",
        },
        {
          name: "快捷键",
          isactive: false,
          link: "shortcut",
        },
        {
          name: "下载设置",
          isactive: false,
          link: "download",
        },
        {
          name: "歌词",
          isactive: false,
          link: "lyric",
        },
        {
          name: "工具",
          isactive: false,
          link: "tool",
        },
        {
          name: "关于网易云音乐",
          isactive: false,
          link: "about",
        },
      ]
    }
  },
  mounted() {
    
  },
  methods: {
    jumpto(item){
      this.$refs[item.link].scrollIntoView()
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.settingcontent{
  padding: 0 30px;
  overflow: auto;
  height: calc(100vh - 235px);
  .title{
    font-size: 15px;
    font-weight: 700;
    padding: 20px 0;
  }
  .account{
    font-weight: 400;
    padding-bottom: 20px;
    border-bottom: 1px solid #d3d3d3;
  }
}
</style>