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
}