<template>
  <div class="bottomplayer" @click="getmusic()">
    <audio src="http://m7.music.126.net/20210518174710/bb554a34e8abf369b805983f94c189ad/ymusic/8bfb/a777/69ab/385a34c11e3c2fe84a86c358ab19a1b4.mp3" ref="music" autoplay></audio>
    <div class="control">
      <div class="topcontrol">
        <div class="playmode"><span class="iconfont">&#xe6a0;</span></div>
        <div class="lastsong"><span class="iconfont">&#xe60c;</span></div>
        <div class="play"><span class="iconfont">&#xe60a;</span></div>
        <div class="nextsong"><span class="iconfont">&#xe60d;</span></div>
        <div class="desklyric">词</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bottom-player",
  methods: {
    getmusic(){
      console.log(this.$refs.music.currentTime);
    }
  },
};
</script>

<style lang="scss" scoped>
.bottomplayer {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 60px;
  background-color: white;
  width: 100%;
  .control{
    width: 375px;
    height: 100%;
    margin: 0 auto;
    .topcontrol{
      display: flex;
      align-items: center;
      width: 220px;
      justify-content: space-between;
      margin: 0 auto;
      .playmode{
        .iconfont{
          font-size: 14px;
        }
      }
      .play{
        width: 35px;
        height: 35px;
        background-color: rgba($color: #000000, $alpha: .1);
        border-radius: 50%;
        position: relative;
        .iconfont{
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          font-size: 17px;
        }
      }
      .lastsong,.nextsong{
        .iconfont{
          font-size: 12px;
        }
      }
    }
  }
}
</style>