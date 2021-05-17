import URL from '@/api/url'
import axios from "@/api/axios.config";

export const indexApi = {
  getbanner:async function(params) {
    return axios({
      url: URL.banner,
      method: "post",
      params,
    });
  }
}