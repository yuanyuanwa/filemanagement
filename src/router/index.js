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
    component: ()=> import("../views/Main.vue"),
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'mymian',
        component: ()=> import("../components/myMian.vue"),
      },
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'myfile',
        component: ()=> import("../components/myFile.vue"),
      },
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'mymian',
        component: ()=> import("../components/myMian.vue"),
      }
    ]
    
    
    },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
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
