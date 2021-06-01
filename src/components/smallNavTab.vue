<template>
  <div class="wrap">
    <div class="smallnavtab">
      <ul>
        <li :class="{active:item.isactive}" v-for="(item,index) in snavlist" :key="index" @click="jumpto(item)">{{item.name}}</li>
      </ul>
    </div>
    <div class="place"></div>
  </div>
</template>

<script>
export default {
  name: "small-nav-tab",
  props:{
    snavlist:{
      type:Array,
      default(){
        return []
      }
    },
  },
  methods: {
    jumpto(item){
      this.$emit('jumpto',item)
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.smallnavtab{
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 45px;
  padding: 6px 20px;
  background-color: white;
  ul {
    display: flex;
    align-items: baseline;
    li {
      margin: 0 10px;
      cursor: pointer;
      color: rgba($color: #000000, $alpha: 0.8);
      font-size: 14px;
      &:hover {
        color: black;
      }
    }
    .active {
      font-size: 15px;
      font-weight: 700;
      position: relative;
      &::after {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        bottom: -6px;
        content: "";
        width: 75%;
        height: 3px;
        background-color: $topic;
      }
    }
  }
}
.place {
  width: 100%;
  height: 45px;
}
</style>