import URL from '@/api/url'
import axios from "@/api/axios.config";

export const indexApi = {
  getbanner:async function(params) {
    return axios({
      url: URL.banner,
      method: "get",
      params,
    });
  },
  getrecommend:async function(params) {
    return axios({
      url: URL.recommend,
      method: "get",
      params,
    });
  },
  getprivatecontent:async function(params) {
    return axios({
      url: URL.privatecontent,
      method: "get",
      params,
    });
  },
  getnewsong:async function(params) {
    return axios({
      url: URL.newsong,
      method: "get",
      params,
    });
  },
  getrecommendmv:async function(params) {
    return axios({
      url: URL.recommendmv,
      method: "get",
      params,
    });
  },
  getdjprogram:async function(params) {
    return axios({
      url: URL.djprogram,
      method: "get",
      params,
    });
  },
  getmusicurl:async function(params) {
    return axios({
      url: URL.musicurl,
      method: "get",
      params,
    });
  },
  getmusicinfo:async function(params) {
    return axios({
      url: URL.musicinfo,
      method: "get",
      params,
    });
  },
  search:async function(params) {
    return axios({
      url: URL.search,
      method: "get",
      params,
    });
  },
  searchsuggest:async function(params) {
    return axios({
      url: URL.searchsuggest,
      method: "get",
      params,
    });
  },
  searchhot:async function(params) {
    return axios({
      url: URL.searchhot,
      method: "get",
      params,
    });
  },


  //登录接口
  qrcodekey:async function(params) {
    return axios({
      url: URL.qrcodekey,
      method: "post",
      params,
    });
  },
  qrcode:async function(params) {
    return axios({
      url: URL.qrcode,
      method: "post",
      params,
    });
  },
  qrcodelogin:async function(params) {
    return axios({
      url: URL.qrcodelogin,
      method: "post",
      params,
    });
  },
  userdetail:async function(params) {
    return axios({
      url: URL.userdetail,
      method: "post",
      params,
    });
  },
  useraccount:async function(params) {
    return axios({
      url: URL.useraccount,
      method: "post",
      params,
    });
  },

  //通知接口
  msgprivate:async function(params) {
    return axios({
      url: URL.msgprivate,
      method: "get",
      params,
    });
  },
  msgcomments:async function(params) {
    return axios({
      url: URL.msgcomments,
      method: "get",
      params,
    });
  },
  msgforwards:async function(params) {
    return axios({
      url: URL.msgforwards,
      method: "get",
      params,
    });
  },
  msgnotices:async function(params) {
    return axios({
      url: URL.msgnotices,
      method: "get",
      params,
    });
  },
}