<template>
  <div class="wrap">
    <div class="navtab">
      <ul>
        <li
          :class="{ active: item.isactive == true }"
          v-for="(item, index) in navlist"
          :key="index"
          @click="changeactive(item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="place"></div>
  </div>
</template>

<script>
export default {
  name: "nav-tab",
  props: {
    navlist: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  created(){
    this.isactive()
  },
  watch:{
    $route(){
      this.isactive()
    }
  },
  methods: {
    changeactive(item) {
      this.$router.push({
        name: item.link,
      });
      this.isactive()
    },
    isactive() {
      this.navlist.forEach((item) => {
        if (item.link !== this.$route.name) {
          item.isactive = false;
        } else {
          item.isactive = true;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.navtab {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 60px;
  padding: 20px;
  background-color: white;
  ul {
    display: flex;
    align-items: baseline;
    li {
      margin: 0 10px;
      cursor: pointer;
      color: rgba($color: #000000, $alpha: 0.8);
      &:hover {
        color: black;
      }
    }
    .active {
      font-size: 20px;
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
  height: 60px;
}
</style>