<template>
  <div class="headernav">
    <div class="left">
      <div class="logo">
        <img src="@/assets/img/du.png" alt="" />
      </div>
      <div class="search">
        <div class="goback">
          <div class="back"><</div>
          <div class="go">></div>
        </div>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: "headerNav",
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.headernav {
  width: 100%;
  height: 60px;
  background-color: $red;
  -webkit-app-region: drag;
  padding: 0 20px;
  .left {
    display: flex;
    .logo {
      width: 210px;
      height: 60px;
      position: relative;
      img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        height: 25px;
      }
    }
    .search {
      .goback {
        color: white;
        display: flex;
        justify-content: space-between;
        width: 30px;
        height: 60px;
        align-items: center;
        .back {
          width: 30px;
          height: 30px;
          background-color: rgba($color: #000000, $alpha: 0.2);
          text-align: center;
          line-height: 30px;
          border-radius: 50%;
        }
        .go {
          
        }
      }
    }
  }
}
</style>