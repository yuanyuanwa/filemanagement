import { createRouter, createWebHistory,createWebHashHistory } from "vue-router";
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
    path: "/home",
    name: "home",
    component: ()=> import("../views/Home.vue"),
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'mymain',
        component: ()=> import("../components/pages/myMain.vue"),
      },
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'myfile',
        component: ()=> import("../components/pages/myFile.vue"),
      },
      {
        path: 'sharedoc',
        component: ()=> import("../components/pages/shareDoc"),
      },
      {
        path: 'collaborationdoc',
        component: ()=> import("../components/pages/collaborationDoc.vue"),
      },
      {
        path: 'mycollection',
        component: ()=> import("../components/pages/myCollection.vue"),
      },
      {
        path: 'circlemanager',
        component: ()=> import("../components/pages/circleManager.vue"),
      },
      {
        path: 'templatemanager',
        component: ()=> import("../components/pages/templateManager.vue"),
      },
      {
        path: 'recycle',
        component: ()=> import("../components/pages/recycle.vue"),
      },
    ]
       
    },
  {
    path: "/about",
    name: "About",
    component: () =>
      import( "../components/pages/myFile.vue"),
  },
  {
    path: "/bb",
    name: "About",
    component: () => import( "../components/pages/myFile.vue"),
  },
  {
    path: "/cc",
    name: "About",
    component: () => import( "../components/pages/myFile.vue"),
  },
  {
    path: "/ab",
    name: "ab",
    component: () => import( "../components/content/index.vue"),
  },
  {
    path: "/filedetail",
    name: "About",
    component: () => import( "../components/pages/detail.vue"),
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history:createWebHashHistory(),
  routes,
});

export default router;
