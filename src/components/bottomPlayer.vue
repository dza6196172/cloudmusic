<template>
  <div class="bottomplayer">
    <audio
      src="http://m7.music.126.net/20210519102411/73f89cb5794470c24d9acdabd789972c/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3"
      ref="music"
    ></audio>
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
          <div class="redline" :style="{ width: percent }"></div>
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
      currenttime:0,
      percent:0,
    };
  },
  computed: {
    currenttime(){
      return (this.$refs.music.currentTime / this.$refs.music.duration) * 100 + "%"
    }
  },
  methods: {
    controlplay() {
      if (this.$refs.music.paused) {
        this.isplay = true;
        this.$refs.music.play();
        this.currenttime = this.$refs.music.currentTime+1
      } else {
        this.isplay = false;
        this.$refs.music.pause();
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
          background-color: $red;
        }
      }
    }
  }
}
</style>