import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import "leaflet/dist/leaflet.css";

import { dateFilter } from "vue-date-fns";
Vue.filter("date", dateFilter);

import "@fortawesome/fontawesome-free/css/solid.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";

import Buefy from "buefy";
Vue.use(Buefy, {
  defaultIconPack: "fas",
});
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

Vue.use(Vuex);
Vue.config.productionTip = false;

import router from "./router";
import store from "./store";

Vue.directive("gUIde", {
  inserted: function(el, binding, vnode) {
    const parseData = () => {
      if (getComputedStyle(el, null).display === "none" || !binding.value)
        return;
      const elementData = {
        element: el,
        dimensions: el.getBoundingClientRect(),
        data: binding.value,
      };
      store.dispatch("addGUIdeElement", elementData);
    };
    parseData();
    window.addEventListener("resize", () => {
      parseData();
    });
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

const resize = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};
window.addEventListener("resize", resize);

window.addEventListener("load", resize);
