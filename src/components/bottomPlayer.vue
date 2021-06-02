<template>
  <div class="bottomplayer">
    <audio
      id="musictest"
      :src="currentmusic"
      ref="music"
      @canplay="gettime()"
    ></audio>
    <div class="songinfo">
      <div class="musicpic">
        <img :src="musicinfo.al.picUrl" alt="" width="50px" height="50px" />
      </div>

      <div class="musictext">
        <div class="musicname">{{ musicinfo.name }}<span class="iconfont" v-if="musicinfo.name != ''">&#xe6e0;</span></div>
        <div class="musicartist"><span v-for="(item,index) in musicinfo.ar" :key="index">{{ index==musicinfo.ar.length-1?item.name:item.name+' / ' }}</span></div>
      </div>
    </div>
    <div class="control">
      <div class="topcontrol">
        <div class="playmode"><span class="iconfont">&#xe6a0;</span></div>
        <div class="lastsong"><span class="iconfont">&#xe60c;</span></div>
        <div class="play" @click="controlplay()">
          <span class="iconfont" v-if="!isplay">&#xe60a;</span>
          <span class="iconfont" v-else>&#xe60b; </span>
        </div>
        <div class="nextsong"><span class="iconfont">&#xe60d;</span></div>
        <div class="desklyric">词</div>
      </div>
      <div class="bottombar">
        <div class="line">
          <div class="redline" :style="{ width: getredbar }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bottom-player",
  data() {
    return {
      isplay: false,
      percent: 0,
      currentmusic: "",
      currenttime: 0,
      musicduration: 1,
      currenttimer: null,
      musicinfo: {
        name: "",
        al: {
          picUrl: "",
        },
        ar: [
          {
            name: "",
          },
        ],
      },
    };
  },
  created() {},
  watch: {
    currentmusicurl() {
      let that = this;
      if (that.currentmusic == "") {
        that.currentmusic = that.$store.state.musicUrl;
        that.$refs.music.addEventListener("canplay", function () {
          that.controlplay();
        });
      } else {
        that.currentmusic = that.$store.state.musicUrl;
        that.$refs.music.load();
      }
    },
    currentmusicinfo(){
      this.musicinfo = this.$store.state.musicinfo;
    }
  },
  computed: {
    getredbar() {
      return (this.currenttime / this.musicduration) * 100 + "%";
    },
    currentmusicurl() {
      return this.$store.state.musicUrl;
    },
    currentmusicinfo(){
      return this.$store.state.musicinfo
    }
  },
  methods: {
    controlplay() {
      if (this.$refs.music.paused) {
        this.isplay = true;
        this.$refs.music.play();
        this.getprogress(0);
      } else {
        this.isplay = false;
        this.$refs.music.pause();
        this.getprogress(1);
      }
    },
    gettime() {
      this.musicduration = this.$refs.music.duration;
    },
    getprogress(index) {
      if (index == 0) {
        this.currenttimer = setInterval(() => {
          this.currenttime = this.$refs.music.currentTime;
        }, 1000);
      } else {
        clearInterval(this.currenttimer);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.bottomplayer {
  position: fixed;
  border-top: 1px solid #e1e1e1;
  left: 0;
  bottom: 0;
  height: 70px;
  background-color: white;
  width: 100%;
  z-index: 99;
  .songinfo {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    .musicpic {
      border-radius: 5px;
      overflow: hidden;
    }
    .musictext{
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      font-size: 15px;
      margin-left: 10px;
      .musicname{
        .iconfont{
          margin-left: 10px;
          cursor: pointer;
        }
      }
      .musicartist{
        font-size: 13px;
      }
    }
  }
  .control {
    width: 375px;
    height: 100%;
    margin: 0 auto;
    padding-top: 8px;
    .topcontrol {
      display: flex;
      align-items: center;
      width: 220px;
      justify-content: space-between;
      margin: 0 auto;
      .playmode {
        .iconfont {
          font-size: 14px;
          cursor: pointer;
        }
      }
      .desklyric {
        font-size: 13px;
        cursor: pointer;
      }
      .play {
        width: 35px;
        height: 35px;
        background-color: rgba($color: #000000, $alpha: 0.1);
        border-radius: 50%;
        position: relative;
        cursor: pointer;
        .iconfont {
          position: absolute;
          left: 52%;
          top: 48%;
          transform: translate(-50%, -50%);
          font-size: 17px;
        }
      }
      .lastsong,
      .nextsong {
        .iconfont {
          cursor: pointer;
          font-size: 12px;
        }
      }
    }
    .bottombar {
      margin-top: 10px;
      .line {
        width: 100%;
        height: 3px;
        background-color: #e5e5e5;
        position: relative;
        .redline {
          position: absolute;
          height: 3px;
          background-color: $topic;
        }
      }
    }
  }
}
</style>