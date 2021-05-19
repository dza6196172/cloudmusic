import Vue from 'vue'
import Vuex from 'vuex'
import { indexApi } from "@/api/request";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    musicid:'',
    musicUrl:''
  },
  mutations: {
    getmusicurl(state,url){
      indexApi.getmusicurl({
        id:url
      }).then(res => {
        console.log(res);
        state.musicUrl = res.data[0].url
      })
    }
  },
  actions: {
    
  },
  modules: {
  }
})
