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
    path: "/main",
    name: "main",
    component: ()=> import("../views/Main.vue"),
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'mymain',
        component: ()=> import("../components/myMain.vue"),
      },
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'myfile',
        component: ()=> import("../components/myFile.vue"),
      },
      {
        path: 'sharedoc',
        component: ()=> import("../components/shareDoc"),
      },
      {
        path: 'collaborationdoc',
        component: ()=> import("../components/collaborationDoc.vue"),
      },
      {
        path: 'mycollection',
        component: ()=> import("../components/myCollection.vue"),
      },
      {
        path: "filedetail",
        // name: "About",
        component: () =>
          import("../components/fileDetail.vue"),
      },
    ]
    
    
    },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),
  },
  {
    path: "/aa",
    name: "About",
    component: () =>import( "../components/myFile.vue"),
  },
  {
    path: "/bb",
    name: "About",
    component: () => import( "../components/myFile.vue"),
  },
  // {
  //   path: "/filedetail",
  //   name: "About",
  //   component: () => import( "../components/a.vue"),
  // },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history:createWebHashHistory(),
  routes,
});

export default router;
