import { createApp } from "vue";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/icon/iconfont.js' //引入阿里巴巴图标库js
import './assets/icon/iconfont.css'//引入阿里巴巴图标库css

createApp(App).use(store).use(router).use(Antd).mount("#app");
