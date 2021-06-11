<template>
  <div class="bottomplayer">
    <audio
      id="musictest"
      :src="currentmusic"
      ref="music"
      @canplay="gettime()"
    ></audio>
    <div class="place"></div>
    <div class="songinfo" v-if="!isminiMode">
      <div class="musicpic" v-if="musicinfo.al.picUrl != ''">
        <img :src="musicinfo.al.picUrl" alt="" width="50px" height="50px" />
      </div>

      <div class="musictext">
        <div class="musicname">
          <span class="musictitle">{{ musicinfo.name }}</span>
          <span class="iconfont" v-if="musicinfo.name != ''">&#xe6e0;</span>
        </div>
        <div class="musicartist">
          <span v-for="(item, index) in musicinfo.ar" :key="index">{{
            index == musicinfo.ar.length - 1 ? item.name : item.name + " / "
          }}</span>
        </div>
      </div>
    </div>
    <div class="control" v-if="!isminiMode">
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
    <div class="rightfunction">
      <div class="iconfont" @click="test()">&#xe681;</div>
      <div class="volumebar" @mouseover="volumedotShow = true" @mouseleave="volumedotShow = false"><vue-slider dotSize="8" tooltip="none" :dotStyle="{display:volumedotShow?'block':'none'}" v-model="musicvolume" @drag-end="changevolume()" @dragging="dragvolume()"></vue-slider></div>
      <div class="iconfont" @click.stop="$store.state.playlistShow = !$store.state.playlistShow">&#xe601;</div>
    </div>
    <div
      class="minimize"
      @mousedown="drag(true)"
      @mouseup="drag(false)"
      v-if="isminiMode"
    >
      <div class="musicpic">
        <img :src="musicinfo.al.picUrl =='' ? defaultpic :musicinfo.al.picUrl" alt="" />
      </div>
      <div class="minicontrol">
        <div class="lastsong"><span class="iconfont">&#xe60c;</span></div>
        <div class="miniplay" @click="controlplay()">
          <span class="iconfont" v-if="!isplay">&#xe60a;</span>
          <span class="iconfont" v-else>&#xe60b; </span>
        </div>
        <div class="nextsong"><span class="iconfont">&#xe60d;</span></div>
      </div>
      <div class="minifunction">
        <div class="volume">
          <span class="iconfont">&#xe681;</span>
        </div>
        <div class="menu">
          <span class="iconfont">&#xe601;</span>
        </div>
      </div>
      <div class="restore">
        <div class="close" @click="winclose()">
          <span class="iconfont">&#xe747;</span>
        </div>
        <div class="maximize" @click="maximize()">
          <span class="iconfont">&#xe7d1;</span>
        </div>
      </div>
    </div>
    <div class="songlist" v-if="playlistShow">
      <song-list></song-list>
    </div>
  </div>
</template>

<script>
const { ipcRenderer } = window.require("electron");
import VueSlider from "vue-slider-component";
import songList from "@/components/bottom/songlist"
export default {
  name: "bottom-player",
  data() {
    return {
      isplay: false,
      percent: 0,
      currentmusic: "",
      currenttime: 0,
      musicduration: 1,
      musicvolume:1,
      currenttimer: null,
      defaultpic:require("@/assets/img/disc.jpg"),
      volumedotShow:false,
      musicinfo: {
        name: "",
        al: {
          picUrl: '',
        },
        ar: [
          {
            name: "",
          },
        ],
      },
    };
  },
  components:{
    VueSlider,
    songList
  },
  created() {
    this.musicvolume = this.$storage.get('musicvolume')
  },
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
    currentmusicinfo() {
      this.musicinfo = this.$store.state.musicinfo;
    },
  },
  computed: {
    getredbar() {
      return (this.currenttime / this.musicduration) * 100 + "%";
    },
    currentmusicurl() {
      return this.$store.state.musicUrl;
    },
    currentmusicinfo() {
      return this.$store.state.musicinfo;
    },
    isminiMode() {
      return this.$store.state.isminiMode;
    },
    playlistShow(){
      return this.$store.state.playlistShow;
    }
  },
  methods: {
    test(){
      console.log(this.$refs.music.volume);
    },
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
      this.dragvolume();
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
    changevolume(){
      this.$storage.set('musicvolume',this.musicvolume)
      if(this.$refs.music.volume){
        this.$refs.music.volume = this.musicvolume/100
      }
    },
    dragvolume(){
      if(this.$refs.music.volume){
        this.$refs.music.volume = this.musicvolume/100
      }
    },
    drag(boolean) {
      ipcRenderer.send("drag", { drag: boolean, minimode: true });
    },
    winclose(){
      ipcRenderer.send('winclose')
    },
    maximize(){
      this.$store.state.isminiMode = false
      ipcRenderer.send('maximize')
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.place{
  width: 100%;
  height: 70px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: white;
  z-index: -1;
}
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
      position: relative;
      cursor: pointer;
      &::after{
        content: "\e745";
        font-family: 'iconfont';
        color: white;
        position: absolute;
        width: 100%;
        height: 100%;
        text-align: center;
        padding-top: 12px;
        font-size: 20px;
        top: 0;
        left: 0;
        background-color: rgba($color: #000000, $alpha: .6);
        display: none;
      }
      &:hover{
        &::after{
          display: block;
        }
      }
    }
    .musictext {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      font-size: 15px;
      margin-left: 10px;
      .musicname {
        .musictitle{
          width: 150px;
          @include nowrap();
        }
        .iconfont {
          margin-left: 10px;
          cursor: pointer;
        }
      }
      .musicartist {
        font-size: 13px;
        width: 150px;
        @include nowrap();
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
  .rightfunction{
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    .volumebar{
      width: 60px;
      margin: 2px 20px 0 10px;
      ::v-deep .vue-slider-process{
        background-color: $topic;
      }
      ::v-deep .vue-slider-dot-handle{
        background-color: $topic;
        box-shadow: none;
      }
    }
    .iconfont{
      cursor: pointer;
    }
  }
}
.minimize {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  .musicpic {
    img {
      width: 100vh;
      height: 100vh;
    }
  }
  .minicontrol {
    width: 180px;
    justify-content: center;
    display: flex;
    align-items: center;
    .lastsong{
      margin-right: 10px;
      cursor: pointer;
      .iconfont{
        color: $topic;
      }
    }
    .miniplay {
      width: 60vh;
      height: 60vh;
      border-radius: 50%;
      border: 1px solid $topic;
      position: relative;
      cursor: pointer;
      .iconfont {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: $topic;
        font-size: 14px;
      }
    }
    .nextsong{
      cursor: pointer;
      margin-left: 10px;
      .iconfont{
        color: $topic;
      }
    }
  }
  .minifunction{
    display: flex;
    align-items: center;
    .iconfont{
      color: gray;
      font-size: 13px;
      cursor: pointer;
    }
    .volume{
      margin: 0 10px;
      padding-bottom: 5px;
    }
    .menu{
      padding-bottom: 5px;
    }
  }
  .restore{
    position: absolute;
    right: 4px;
    top: -2px;
    .iconfont{
      color: gray;
      cursor: pointer;
      font-size: 13px;
    }
    .maximize{
      transform: scaleY(.7);
      margin-top: -8px;
    }
  }
}
</style>