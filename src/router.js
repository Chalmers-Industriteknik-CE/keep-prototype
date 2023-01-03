import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import store from './store';
import Start from "./views/Start.vue";
import StartPage from "./views/StartPage.vue";
import Elements from "@/views/Elements.vue";
import Benefits from "@/views/Benefits.vue";
import ProductView from "@/views/ProductView.vue";

const routes = [
  { path: "/start", component: Start },
  { path: "/", component: StartPage },
  { name: 'product', path: "/product/:id", component: ProductView },
  {
    name: 'qr', path: "/qr/*", redirect: to => {
      store.commit('SET_IS_ONBOARDING_MODAL_ACTIVE', true);
      return to.params.pathMatch;
    }
  },
  { path: "/elements", component: Elements },
  { name: "benefits", path: "/benefits", component: Benefits },
  { path: '*', redirect: '/' }
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ selector: to.hash })
        }, 300)
      })

    } else {
      return { x: 0, y: 0 }
    }

  }
});

export default router;
