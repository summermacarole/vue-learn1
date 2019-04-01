import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import iView from "iview";
import "iview/dist/styles/iview.css";

Vue.config.productionTip = false;
Vue.use(iView, {
  size: "mini"
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
