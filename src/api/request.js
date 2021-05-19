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
}