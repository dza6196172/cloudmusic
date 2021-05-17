import Axios from "axios";

const baseURL = 'http://localhost:3000/'
  // process.env.NODE_ENV === "development"
  //   ? process.env.VUE_APP_API_URL
  //   : store.get('urldata');
const axiosInstance = Axios.create({
  timeout: 20000,
  // timeout:10000,
  baseURL: baseURL
});

axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => { }
);

axiosInstance.interceptors.response.use(
  response => {
    let data = response.data;
    return data;
  },
  error => {
  }
);
export default axiosInstance;
