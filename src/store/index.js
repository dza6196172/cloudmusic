import Vue from 'vue'
import Vuex from 'vuex'
import { indexApi } from "@/api/request";
const Store = require('electron-store');
const storage = new Store();

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    musicid:'',
    musicUrl:'',
    musicinfo:{},
    canback:false,
    userpopShow:false,
    colorpopShow:false,
    messegepopShow:false,
    playlistShow:false,
    isminiMode:false,
    ismax:false,
    playlist:{
      tracks:[]
    },
    webplaylist:{
      tracks:[]
    },
  },
  getters:{
    
  },
  mutations: {
    getmusicurl(state,url){
      indexApi.getmusicurl({
        id:url,
      }).then(res => {
        state.musicUrl = res.data[0].url
      })
      indexApi.getmusicinfo({
        ids:url
      }).then(res => {
        state.musicinfo = res.songs[0]
        state.playlist.tracks.push(state.musicinfo)
      })
    },
    getplaylist(state,id){
      indexApi.playlistdetail({
        id:id,
        cookie:storage.get('token')
      }).then(res => {
         state.webplaylist = res.playlist
         let songids = []
         state.webplaylist.trackIds.forEach(item => {
           songids.push(item.id)
         })
         indexApi.getmusicinfo({
           ids:songids.join(',')
         }).then(res => {
           state.webplaylist.tracks = res.songs
         })
      })
    },
    playall(state){
      state.playlist = state.webplaylist
    }
  },
  actions: {
    
  },
  modules: {
  }
})
