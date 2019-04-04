import { getUserList } from "../../api/user";
export default {
  state: {},
  mutations: {},
  actions: {
    getUserList({ commit }, params) {
      return getUserList(params);
    }
  }
};
