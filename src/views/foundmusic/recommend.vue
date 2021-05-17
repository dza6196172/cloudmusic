<template>
  <div class="recommend">
    <el-carousel :autoplay="false" :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="test" @click="getbannerlist()">abc</div>
  </div>
</template>

<script>
import {indexApi} from '@/api/request'
export default {
  name: "recommend",
  created() {
    
  },
  methods: {
    getbannerlist(){
      indexApi.getbanner({}).then(res => {
        console.log(res);
      })
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.recommend {
  padding: 10px 30px;
  width: 100%;
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  ::v-deep .el-carousel__indicators--outside {
    .is-active {
      button {
        background-color: $red;
      }
    }
    button {
      background-color: #e6e6e6;
    }
  }
  ::v-deep .el-carousel__button {
    width: 6px !important;
    height: 6px !important;
    border-radius: 3px;
  }
}
</style>