<template>
  <div>
    <nav-tab :navlist="navlist" :forbid="true"></nav-tab>
    <small-nav-tab
      :snavlist="snavlist"
      @jumpto="jumpto"
    ></small-nav-tab>
    <div class="settingcontent" ref="settingcontent">
      <div class="account" ref="account">
        <div class="content">
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
      <div class="normal" ref="normal">
        <div class="title">常规</div>
        <div class="content">
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
        </div>
      </div>
      <div class="play" ref="play">
        <div class="title">播放</div>
        <div class="content">
          <div>第一</div>
          <div>第一</div>
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
      <div class="messege" ref="messege">
        <div class="title">消息与隐私</div>
        <div class="content">
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
        </div>
      </div>
      <div class="shortcut" ref="shortcut">
        <div class="title">快捷键</div>
        <div class="content">
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
        </div>
      </div>
      <div class="download" ref="download">
        <div class="title">下载设置</div>
        <div class="content">
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
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
      <div class="lyric" ref="lyric">
        <div class="title">歌词</div>
        <div class="content">
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
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
      <div class="tool" ref="tool">
        <div class="title">工具</div>
        <div class="content">
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
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
      <div class="about" ref="about">
        <div class="title">关于网易云音乐</div>
        <div class="content">
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
          <div>第一</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navTab from "@/components/navTab";
import smallNavTab from "@/components/smallNavTab";
export default {
  name: "setting",
  components: {
    navTab,
    smallNavTab,
  },
  data() {
    return {
      navlist: [
        {
          name: "设置",
          isactive: false,
          link: "setting",
        },
      ],
      snavlist: [
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
      ],
    };
  },
  mounted() {
    this.$refs.settingcontent.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    jumpto(item) {
      this.$refs[item.link].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
    handleScroll() {
      for (let i = 0; i < this.snavlist.length; i++) {
        if (
          this.$refs[this.snavlist[i].link].offsetTop - 167 <=
            this.$refs.settingcontent.scrollTop &&
          this.$refs.settingcontent.scrollTop <
            this.$refs[this.snavlist[i].link].offsetTop -
              167 +
              this.$refs[this.snavlist[i].link].clientHeight
        ) {
          this.snavlist[i].isactive = true;
        } else {
          this.snavlist[i].isactive = false;
        }
      }
      let allscroll = this.$refs.settingcontent.scrollTop + this.$refs.settingcontent.clientHeight
      if(allscroll%1>0){
        allscroll = parseInt(allscroll)+1
      }
      if (
        allscroll ==
        this.$refs.settingcontent.scrollHeight
      ) {
        this.snavlist.forEach((item, index) => {
          if (index != this.snavlist.length - 1) {
            item.isactive = false;
          } else {
            item.isactive = true;
          }
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.settingcontent {
  padding: 0 30px;
  overflow: auto;
  height: calc(100vh - 235px);
  .title {
    font-size: 15px;
    font-weight: 700;
    padding: 20px 0;
  }
  .account {
    font-weight: 400;
    padding-bottom: 20px;
    border-bottom: 1px solid #e0e0e0;
  }
}
</style>