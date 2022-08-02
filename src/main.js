import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from "element-ui";
import "@/styles/index.scss";

import pubsub from "pubsub-js";

Vue.use(ElementUI);

import "element-ui/lib/theme-chalk/index.css";

import * as echarts from "echarts";

Vue.prototype.$echarts = echarts;
Vue.prototype.$pubsub = pubsub;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
