<template>
  <div class="userpop">
    <div class="useractive">
      <div class="activeitem">
        <div class="activecount">0</div>
        <div class="activename">动态</div>
      </div>
      <div class="activeitem">
        <div class="activecount">4</div>
        <div class="activename">关注</div>
      </div>
      <div class="activeitem">
        <div class="activecount">8</div>
        <div class="activename">粉丝</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-pop",
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.userpop{
  width: 280px;
  height: 380px;
  position: absolute;
  background-color: white;
  border-radius: 5px;
  top: 60px;
  box-shadow: $shadow;
  .useractive{
    display: flex;
    justify-content: space-around;
    padding: 25px 10px;
    .activeitem{
      text-align: center;
      .activecount{
        font-weight: 700;
        font-size: 18px;
      }
      .activename{
        font-size: 12px;
        color: gray;
      }
    }
  }
}
</style>