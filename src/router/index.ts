import Vue from "vue";
import VueRouter from "vue-router";
import BasicLayout from "@/layouts/BasicLayout";

Vue.use(VueRouter);

export const routes = [
  {
    path: "/",
    redirect: "/form",
    hidden: true,
  },
  {
    path: "/form",
    component: BasicLayout,
    meta: {
      title: "form",
    },
    children: [
      {
        path: "user",
        meta: {
          title: "表格",
        },
        component: () => import("../views/FormItemUser"),
      },
      {
        path: "dialog",
        meta: {
          title: "对话框",
        },
        component: () => import("../views/FormDialog"),
      },
    ],
  },

  {
    path: "/chart",
    name: "chart",
    meta: {
      title: "图表",
    },
    component: BasicLayout,
    children: [
      {
        path: "demo",
        meta: {
          title: "组件demo",
        },
        component: () => import("../views/DemoField.vue"),
      },
      {
        path: "dashboard",
        name: "chartdashboard",
        meta: {
          title: "dashboard",
        },
        component: () => import("../views/ChartDashboard.vue"),
      },
    ],
  },
  {
    path: "/dag",
    name: "dag",
    meta: {
      title: "流程图",
    },
    component: BasicLayout,
    children: [
      {
        path: "butterfly",
        meta: {
          title: "butterfly流程图",
        },
        component: () => import("../views/butterfly/index.vue"),
      },
    ],
  },
  { path: "*", redirect: "/404", hidden: true },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
