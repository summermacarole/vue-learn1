export default {
  install(Vue, options) {
    Vue.directive("fullHeight", {
      bind(el, binding) {
        Vue.nextTick(function() {
          let fullHeight = window.innerHeight;
          let tableTop = el.getBoundingClientRect().top;
          el.style.height = fullHeight - tableTop - 60 + "px";
        });
      }
    });
  }
};
