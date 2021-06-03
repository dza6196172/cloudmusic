<template>
  <div>
    <div class="test" @mousedown="drag(true)" @mouseup="drag(false)">aaa</div>
  </div>
</template>

<script>
const { ipcRenderer } = window.require("electron");
export default {
  name: "minimize",
  methods: {
    drag(boolean){
      ipcRenderer.send("drag",boolean)
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.test{
  background-color: pink;
  width: 100vw;
  height: 100vh;
}
</style>