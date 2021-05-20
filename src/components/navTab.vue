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
  methods: {
    changeactive(item) {
      if (item.isactive == true) {
        return;
      }
      item.isactive = true;
      this.navlist.forEach((item1) => {
        if (item.name !== item1.name) {
          item1.isactive = false;
        }
      });
      this.$router.push({
        name: item.link,
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
        background-color: $red;
      }
    }
  }
}
.place {
  width: 100%;
  height: 60px;
}
</style>