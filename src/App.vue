<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { indexApi } from "@/api/request";
export default {
  created() {
    this.getuseraccount();
    if(!this.$storage.get('topic')){
      this.$storage.set("topic", "#ec4141");
    }
    document.documentElement.style.setProperty('--topic',this.$storage.get('topic'))
  },
  methods: {
    getuseraccount() {
      if (this.$storage.get("token")) {
        indexApi
          .useraccount({
            cookie: this.$storage.get("token"),
          })
          .then((res) => {
            this.$storage.set("useraccount", res.profile);
          });
      }
    },
  },
};
</script>
<style lang="scss">
// ::-webkit-scrollbar {
//   display: none; /* Chrome Safari */
// }
</style>
