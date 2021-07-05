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
      this.musicid = url
      indexApi.getmusicurl({
        id:url,
      }).then(res => {
        state.musicUrl = res.data[0].url
      })
      indexApi.getmusicinfo({
        ids:url
      }).then(res => {
        state.musicinfo = res.songs[0]
        if(state.playlist.tracks.some(item => {return state.musicinfo.id == item.id})){
          return
        }else{
          state.playlist.tracks.push(state.musicinfo)
        }
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
    },
    lastsong(state){
      let currentIndex = state.playlist.tracks.findIndex(item => {return state.musicinfo.id == item.id})
      if(currentIndex == 0){
        currentIndex = state.playlist.tracks.length
      }
      state.musicid = state.playlist.tracks[currentIndex-1].id
    },
    nextsong(state){
      let currentIndex = state.playlist.tracks.findIndex(item => {return state.musicinfo.id == item.id})
      if(currentIndex == state.playlist.tracks.length - 1){
        currentIndex = -1
      }
      console.log(currentIndex);
      state.musicid = state.playlist.tracks[currentIndex+1].id
    },
  },
  actions: {
    
  },
  modules: {
  }
})
