<template>
  <div style="height: 100vh">
   
    <a-layout>
      <a-affix :offset-top="top">
      <a-layout-header>
        <headercon></headercon>
      </a-layout-header>
    </a-affix>
      <a-layout>
        <a-affix :offset-top="siderTop">
        <a-layout-sider width="250"  style="background: #fff">
          <a-menu
            mode="inline"
            :selectedKeys="[$route.path]"
            v-model:openKeys="openKeys"
            :style="{ height: '100%', borderRight: 0, textAlign: 'left', }"
          >
            <a-menu-item :key="'/home/mymain'">
              <router-link to="/home/mymain"><span> 首页</span></router-link>
            </a-menu-item>
            <a-sub-menu key="sub1">
              <template #title>
                <span> 我的空间 </span>
              </template>
              <a-menu-item key="/home/myfile"
                ><router-link to="/home/myfile"
                class="router">我的文档</router-link
                ></a-menu-item
              >
              <a-menu-item key="/home/sharedoc">
                <router-link to="/home/sharedoc" class="router"
                  ><span> 共享文档</span></router-link
                >
              </a-menu-item>
              <a-menu-item key="/home/collaborationdoc">
                <router-link to="/home/collaborationdoc"
                class="router"><span> 协作文档</span></router-link
                ></a-menu-item
              >
              <a-menu-item :key="'/home/mycollection'">
                <router-link to="/home/mycollection"
                class="router"><span> 我的收藏</span></router-link
                ></a-menu-item
              >
            </a-sub-menu>
            <a-menu-item key="/home/circlemanager">
               <router-link to="/home/circlemanager"><span>圈子管理</span></router-link
                >
            </a-menu-item>
            <a-menu-item key="/home/templatemanager">
              <router-link to="/home/templatemanager"
                  ><span>模版管理</span></router-link
                >
              
            </a-menu-item>
            <a-menu-item key="/home/recycle">
              <router-link to="/home/recycle"
                  ><span>回收站</span></router-link
                >
              
            </a-menu-item>
          </a-menu>
        </a-layout-sider>
      </a-affix>
        <a-layout  class="content">
          <router-view></router-view>
        </a-layout>
      </a-layout>
    </a-layout>

  </div>
</template>

<script>
import { SearchOutlined, DownOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref, onMounted } from "vue";
import header from "../components/component/header.vue";
export default defineComponent({
  components: {
    SearchOutlined,
    DownOutlined,
    headercon: header,
  },
  // mounted() {
  //   console.log(this.$route.path)
  // },
  setup() {
    // onMounted (()=>{
    //   console.log(111);
    //   // console.log(111111,$route.path);
    // })
    const siderTop=ref(70)
    return {
      // selectedKeys2: ref(["sub0"]),
      collapsed: ref(false),
      openKeys: ref(["sub1"]),
      userName: ref(""),
      displayPicture: require("../assets/cat.jpg"),
      siderTop
    };
  },
});
</script>

<style  scoped>
/deep/ .ant-layout-sider-children {
  margin-top: 40px;
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-weight: 700;
  font-style: normal;
  font-size: 16px;
}

/deep/ .ant-layout{
  background-color: white;
}
/deep/ .ant-menu-item {
  margin-bottom: 30px;
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-weight: 700;
  font-style: normal;
  font-size: 16px;
}

.router{
  font-size: 14px;
  font-family: 'Arial Normal', 'Arial';
    font-weight: 400;
}
/deep/ .ant-menu-submenu-title {
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-weight: 700;
  font-style: normal;
  font-size: 16px;
}
.content {
  border-left: 1px solid #f0f2f5;
  background-color: white;
}
.left-con {
  display: flex;
  align-items: center;
}
.right-con {
  display: flex;
}
.displayPicture {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>