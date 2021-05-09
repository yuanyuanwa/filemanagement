<template>
  <div>
    <a-layout>
  <a-layout-header > 
    <headercon></headercon>
    </a-layout-header> 
      

      <a-layout>
        <a-layout-sider width="250" style="background: #fff">
          <a-menu
            mode="inline"
            v-model:selectedKeys="selectedKeys2"
            v-model:openKeys="openKeys"
            :style="{ height: '100%', borderRight: 0, textAlign: 'left' }"
          >
            <a-menu-item key="sub0">
              <router-link to="/home/mymain"><span> 首页</span></router-link>
            </a-menu-item>
            <a-sub-menu key="sub1">
              <template #title>
                
                <span> 我的空间 </span>
              </template>
              <a-menu-item key="1"
                ><router-link to="/home/myfile"
                  >我的文档</router-link
                ></a-menu-item
              >
              <a-menu-item key="2">
                <router-link to="/home/sharedoc"><span> 共享文档</span></router-link>
                </a-menu-item>
              <a-menu-item key="3">
                <router-link to="/home/collaborationdoc"><span> 协作文档</span></router-link></a-menu-item>
              <a-menu-item key="4">
                <router-link to="/home/mycollection"><span> 我的收藏</span></router-link></a-menu-item>
            </a-sub-menu>
            <a-menu-item key="sub2">
              <span>圈子管理</span>
            </a-menu-item>
            <a-menu-item key="sub3">
              <span>模版管理</span>
            </a-menu-item>
            <a-menu-item key="sub4">
              <span>回收站</span>
            </a-menu-item>
          </a-menu>
        </a-layout-sider>

        <a-layout style="height: 100vh" class="content">
          <router-view></router-view>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import { SearchOutlined, DownOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
import header from "../components/component/header.vue";
export default defineComponent({
  components: {
    SearchOutlined,
    DownOutlined,
    headercon: header,
  },
  setup() {
    return {
      selectedKeys2: ref(["sub0"]),
      collapsed: ref(false),
      openKeys: ref(["sub1"]),
      userName: ref(""),
      displayPicture: require("../assets/cat.jpg"),
    };
  },
});
</script>

<style  scoped>

/deep/ .ant-layout-sider-children {
  margin-top: 40px;
  margin-left: 20px;
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-weight: 700;
  font-style: normal;
  font-size: 16px;
}
/deep/ .ant-menu-item {
  margin-bottom: 30px;
  font-family: "Arial Negreta", "Arial Normal", "Arial";
  font-weight: 700;
  font-style: normal;
  font-size: 16px;
}
/deep/ .ant-menu-submenu-title{
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