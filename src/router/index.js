import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/form/user",
    name: "formUser",
    meta: {
      title: "表格",
    },
    component: () => import("../views/FormItemUser"),
  },
  {
    path: "/form/dialog",
    name: "formDialog",
    meta: {
      title: "对话框",
    },
    component: () => import("../views/FormDialog"),
  },
  {
    path: "/chart/demo",
    name: "chartdemo",
    meta: {
      title: "图表",
    },
    component: () => import("../views/ChartDashboard"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
