<template>
  <div class="colorpop" @click.stop="">
    <div class="colorlist">
      <div class="coloritem" v-for="(item,index) in colorlist" :key="index" :style="{'background-color':item.color}" @click="changecolor(item)">
        <div class="ischosen" v-if="item.color == currentcolor">
          ✔
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "color-pop",
  data() {
    return {
      currentcolor:"",
      colorlist:[
        {
          colorname:'white',
          color:'#f5f5f5'
        },
        {
          colorname:'pink',
          color:'#ff5c8a'
        },
        {
          colorname:'lightpink',
          color:'#ff7a9e'
        },
        {
          colorname:'darkblue',
          color:'#717ff9'
        },
        {
          colorname:'blue',
          color:'#4791eb'
        },
        {
          colorname:'lightblue',
          color:'#39afea'
        },
        {
          colorname:'green',
          color:'#2bb669'
        },
        {
          colorname:'lightgreen',
          color:'#6acc19'
        },
        {
          colorname:'brown',
          color:'#e2ab12'
        },
        {
          colorname:'orange',
          color:'#ff8f57'
        },
        {
          colorname:'lightred',
          color:'#fd726d'
        },
        {
          colorname:'red',
          color:'#fd544e'
        },
      ]
    }
  },
  created() {
    if(this.$storage.get('topic')){
      this.currentcolor = this.$storage.get('topic')
    }else{
      this.currentcolor = '#ec4141'
      this.$storage.set('topic','#ec4141')
    }
  },
  methods: {
    changecolor(item){
      if(this.currentcolor == item.color){
        return
      }else{
        this.currentcolor = item.color
        this.$storage.set('topic',item.color)
        document.documentElement.style.setProperty('--topic',item.color)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "@/assets/css/common.scss";
  .colorpop{
    position: absolute;
    width: 330px;
    height: 270px;
    background-color: white;
    border-radius: 5px;
    top: 38px;
    .colorlist{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content:center;
      margin-top: 20px;
      .coloritem{
        width: 40px;
        height: 40px;
        border-radius: 5px;
        margin: 0 5px;
        margin-bottom: 10px;
        cursor: pointer;
        position: relative;
        .ischosen{
          width: 16px;
          height: 16px;
          border-radius: 8px;
          background-color: #ec4141;
          color: white;
          font-size: 12px;
          text-align: center;
          position: absolute;
          right: -6px;
          bottom: -6px;
        }
      }
    }
  }
</style>
