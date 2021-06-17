<template>
  <div class="page-tab" v-if="pagecount > 1">
    <div :class="{left:true,forbid:currentPage == 1}" @click="lastPage()"><span class="iconfont">&#xe744;</span></div>
    <div class="middle">
      <div class="pagecate" v-if="pagecount<=9">
        <div :class="{middleitem:true,pageactive:item==currentPage}" v-for="item in pagecount" :key="item">{{item}}</div>
      </div>
      <div class="pagecate" v-else-if="pagecount>9&&currentPage<=5">
        <div :class="{middleitem:true,pageactive:item==currentPage}" v-for="item in 8" :key="item" @click="changePage(item)">{{item}}</div>
        <div class="middleitem">···</div>
        <div :class="{middleitem:true,pageactive:pagecount==currentPage}" @click="changePage(pagecount)">{{pagecount}}</div>
      </div>
      <div class="pagecate" v-else-if="pagecount>9&&currentPage>5&&currentPage<=pagecount-5">
        <div :class="{middleitem:true,pageactive:currentPage==1}" @click="changePage(1)">1</div>
        <div class="middleitem">···</div>
        <div :class="{middleitem:true,pageactive:item==currentPage}" v-for="item in middleArr" :key="item" @click="changePage(item)">{{item}}</div>
        <div class="middleitem">···</div>
        <div :class="{middleitem:true,pageactive:pagecount==currentPage}" @click="changePage(pagecount)">{{pagecount}}</div>
      </div>
      <div class="pagecate" v-else-if="pagecount>9&&currentPage>pagecount-5">
        <div :class="{middleitem:true,pageactive:1==currentPage}" @click="changePage(1)">1</div>
        <div class="middleitem">···</div>
        <div :class="{middleitem:true,pageactive:item==currentPage}" v-for="item in leftArr" :key="item" @click="changePage(item)">{{item}}</div>
      </div>
    </div>
    <div :class="{right:true,forbid:currentPage == pagecount}" @click="nextPage()"><span class="iconfont">&#xe743;</span></div>
  </div>
</template>

<script>
export default {
  name: "page-tab",
  props:{
    total:{
      type:Number,
      default(){
        return 0
      }
    },
    pageSize:{
      type:Number,
      default(){
        return 50
      }
    },
    currentPage:{
      type:Number,
      default(){
        return 1
      }
    }
  },
  computed:{
    pagecount(){
      return (this.total-this.total%this.pageSize)/this.pageSize+1
    },
    middleArr(){
      let middle = []
      for(let i = -3;i<=3;i++){
        middle.push(this.currentPage+i)
      }
      return middle
    },
    leftArr(){
      let left = []
      for(let i = 6;i>=0;i--){
        left.push(this.pagecount-i)
      }
      return left
    }
  },
  methods: {
    changePage(page){
      this.$emit('changePage',page)
    },
    lastPage(){
      if(this.currentPage == 1){
        return
      }else{
        this.changePage(this.currentPage -1)
      }
    },
    nextPage(){
      if(this.currentPage == this.pagecount){
        return
      }else{
        this.changePage(this.currentPage +1)
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.page-tab {
  padding: 20px 0;
  margin: 0 auto;
  width: fit-content;
  display: flex;
  @include select();
}
.left,
.right {
  width: fit-content;
  padding: 0 8px;
  height: 25px;
  border-radius: 3px;
  border: 1px solid #f5f5f5;
  line-height: 23px;
  text-align: center;
  cursor: pointer;
  margin-right: 3px;
  &:hover{
    background-color: #f9f9f9;
  }
}
.forbid{
  color: #f5f5f5;
  pointer-events: none;
}
.middle{
  display: flex;
  .pagecate{
    display: flex;
    .middleitem{
      @extend .left;
      font-size: 12px;
    }
    .pageactive{
      background-color: $topic;
      color: white;
      &:hover{
        background-color: $topic;
      }
    }
  }
}
</style>