import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import iView from "iview";
import "iview/dist/styles/iview.css";
import Plugin from "./plugin/full-height";

Vue.use(Plugin);
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
