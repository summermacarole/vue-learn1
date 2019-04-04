import axios from "axios";
export const getUserList = params => {
  console.log(params);
  return axios.get("/user/list", { params });
};
