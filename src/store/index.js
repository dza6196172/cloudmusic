import Vue from 'vue'
import Vuex from 'vuex'
import { indexApi } from "@/api/request";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    musicid:'',
    musicUrl:'',
    musicinfo:'',
    canback:false,
    userpopShow:false,
    colorpopShow:false,
  },
  mutations: {
    getmusicurl(state,url){
      indexApi.getmusicurl({
        id:url
      }).then(res => {
        state.musicUrl = res.data[0].url
      })
      indexApi.getmusicinfo({
        ids:url
      }).then(res => {
        state.musicinfo = res.songs[0]
      })
    }
  },
  actions: {
    
  },
  modules: {
  }
})
