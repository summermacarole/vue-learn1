import axios from "axios";
import { Modal } from "iview";

axios.defaults.timeout = 5000;
axios.defaults.baseURL = "";

axios.interceptors.request.use(
  config => {
    console.log(config);
    // config.data = JSON.stringify(config.data);
    // config.headers = {
    //   "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    //   username: "macarole"
    // };
    config.params = {
      token: "macarole"
    };
    return config;
  },
  e => {
    return Promise.reject(e);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  e => {
    return Promise.reject(e);
  }
);

export const fetch = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params })
      .then(res => {
        console.log("get获取数据");
        resolve(res["data"]);
      })
      .catch(e => {
        console.log("get获取数据失败");
        reject(e);
      });
  });
};

export const post = (url, data = {}) => {
  return axios.post(url, data);
};
export default axios;
