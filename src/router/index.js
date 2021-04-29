import { createRouter, createWebHistory } from "vue-router";
import login from "../views/Login.vue";
// import main from "../views/Main.vue";
// import Login from "../views/a.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: login,
  },
  {
    path: "/main",
    name: "main",
    component: ()=> import("../views/Main.vue")
    
    },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/bb",
    name: "About",
    component: () => import( "../views/a.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
