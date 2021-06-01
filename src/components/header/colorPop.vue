<template>
  <div class="colorpop" @click.stop="">
    <div class="colorlist">
      <div
        class="coloritem"
        v-for="(item, index) in colorlist"
        :key="index"
        :style="{ 'background-color': item.color }"
        @click="changecolor(item)"
      >
        <div
          class="ischosen"
          v-if="item.color == currentcolor && iscustomize == false"
        >
          ✔
        </div>
      </div>
    </div>
    <div class="colorbar">
      <div class="customizecolor">
        <img src="@/assets/img/colors.png" alt="" width="40px" height="40px" />
        <div class="ischosen" v-if="iscustomize">✔</div>
      </div>
      <div class="colorchoose">
        <div class="hue">
          <vue-slider
            v-model="colorvalue"
            tooltip="none"
            @drag-end="ensurechange()"
            @dragging="modifycolor()"
            :dotStyle="{ width: '10px', height: '10px' }"
            :max="360"
          ></vue-slider>
        </div>
        <div class="lightness">
          <vue-slider
            v-model="brightvalue"
            tooltip="none"
            @drag-end="ensurechange()"
            @dragging="modifycolor()"
            :dotStyle="{ width: '10px', height: '10px' }"
            :max="50"
          ></vue-slider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
export default {
  name: "color-pop",
  components: {
    VueSlider,
  },
  data() {
    return {
      colorvalue: 0,
      brightvalue: 0,
      currentcolor: "",
      iscustomize: false,
      colorlist: [
        {
          colorname: "white",
          color: "#f5f5f5",
        },
        {
          colorname: "pink",
          color: "#ff5c8a",
        },
        {
          colorname: "lightpink",
          color: "#ff7a9e",
        },
        {
          colorname: "darkblue",
          color: "#717ff9",
        },
        {
          colorname: "blue",
          color: "#4791eb",
        },
        {
          colorname: "lightblue",
          color: "#39afea",
        },
        {
          colorname: "green",
          color: "#2bb669",
        },
        {
          colorname: "lightgreen",
          color: "#6acc19",
        },
        {
          colorname: "brown",
          color: "#e2ab12",
        },
        {
          colorname: "orange",
          color: "#ff8f57",
        },
        {
          colorname: "lightred",
          color: "#fd726d",
        },
        {
          colorname: "red",
          color: "#fd544e",
        },
      ],
    };
  },
  created() {
    if (this.$storage.get("topic")) {
      this.currentcolor = this.$storage.get("topic");
      if (this.currentcolor.substr(0, 3) == "hsl") {
        this.iscustomize = true;
        let colorarr = [];
        colorarr = this.currentcolor.split(",");
        this.colorvalue = parseInt(colorarr[0].substr(4, 3));
        this.brightvalue = parseInt(colorarr[2].substr(0, 2));
        document.documentElement.style.setProperty("--lightnessColor", this.colorvalue);
      } else {
        this.colorvalue = this.$storage.get("colorvalue");
        this.brightvalue = this.$storage.get("brightvalue");
        document.documentElement.style.setProperty("--lightnessColor", this.colorvalue);
      }
    } else {
      this.currentcolor = "#ec4141";
      this.$storage.set("topic", "#ec4141");
    }
  },
  methods: {
    changecolor(item) {
      if (this.currentcolor == item.color) {
        return;
      } else {
        this.iscustomize = false;
        this.currentcolor = item.color;
        this.$storage.set("topic", item.color);
        document.documentElement.style.setProperty("--topic", item.color);
      }
    },
    modifycolor() {
      this.currentcolor = `hsl(${this.colorvalue},100%,${this.brightvalue}%)`;
      document.documentElement.style.setProperty("--topic", this.currentcolor);
      document.documentElement.style.setProperty("--lightnessColor", this.colorvalue);
      console.log("aaa");
    },
    ensurechange() {
      this.iscustomize = true;
      this.$storage.set("topic", this.currentcolor);
      this.$storage.set("colorvalue", this.colorvalue);
      this.$storage.set("brightvalue", this.brightvalue);
      console.log(this.$storage.get("topic"));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.colorpop {
  position: absolute;
  width: 330px;
  height: 180px;
  background-color: white;
  border-radius: 5px;
  top: 38px;
  box-shadow: $shadow;
  .colorlist {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
    .coloritem {
      width: 40px;
      height: 40px;
      border-radius: 5px;
      margin: 0 5px;
      margin-bottom: 10px;
      cursor: pointer;
      position: relative;
      .ischosen {
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
  .colorbar {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    .customizecolor {
      position: relative;
      .ischosen {
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
    .colorchoose {
      width: 240px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .hue {
        ::v-deep .vue-slider-rail {
          margin: 0;
          height: 4px;
          background-image: linear-gradient(
            to right,
            hsl(0, 100%, 50%),
            hsl(60, 100%, 50%),
            hsl(120, 100%, 50%),
            hsl(180, 100%, 50%),
            hsl(240, 100%, 50%),
            hsl(300, 100%, 50%),
            hsl(360, 100%, 50%)
          );
        }
      }
      .lightness{
        ::v-deep .vue-slider-rail {
          margin: 0;
          height: 4px;
          background-image: linear-gradient(
            to right,
            hsl(var(--lightnessColor), 100%, 0%),
            hsl(var(--lightnessColor), 100%, 50%),
          );
        }
      }
    }

    ::v-deep .vue-slider-dot {
      width: 10px !important;
      height: 10px !important;
    }
    ::v-deep .vue-slider-process {
      background-color: transparent;
    }
  }
}
</style>
