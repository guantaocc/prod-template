import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView"),
  },
  {
    path: "/form/user",
    name: "formUser",
    component: () => import("../views/FormItemUser"),
  },
  {
    path: "/form/dialog",
    name: "formUser",
    component: () => import("../views/FormDialog"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
