<template>
  <div>
    <a-layout>
      <a-layout-header class="header"> </a-layout-header>
      <a-layout-header class="header2">
        <div class="left-con">
          <div class="title">文件管理系统</div>

          <a-input
            placeholder="搜索"
            v-model:value="userName"
            class="input"
            
          >
            <template #prefix>
              <search-outlined type="user" />
            </template>
          </a-input>
        </div>
        <div class="right-con">
          <div class="news">
            <i class="icon iconfont icon-xiaoxi"></i>
            <a href="#">
              <a-badge count="5">
                <span class="head-example" />
              </a-badge>
            </a>
          </div>
          <div>
            <img
              :src="displayPicture"
              alt="图片"
              onerror=""
              class="displayPicture"
            />
          </div>
          <div>2333<DownOutlined /></div>
        </div>
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
              <router-link to="/main/mymain"><span> 首页</span></router-link>
            </a-menu-item>
            <a-sub-menu key="sub1">
              <template #title>
                
                <span> 我的空间 </span>
              </template>
              <a-menu-item key="1"
                ><router-link to="/main/myfile"
                  >我的文档</router-link
                ></a-menu-item
              >
              <a-menu-item key="2">
                <router-link to="/main/sharedoc"><span> 共享文档</span></router-link>
                </a-menu-item>
              <a-menu-item key="3">
                <router-link to="/main/collaborationdoc"><span> 协作文档</span></router-link></a-menu-item>
              <a-menu-item key="4">
                <router-link to="/main/mycollection"><span> 我的收藏</span></router-link></a-menu-item>
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
export default defineComponent({
  components: {
    SearchOutlined,
    DownOutlined,
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
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.news {
  margin-right: 30px;
}
.site-layout-background {
  background: #fff;
}

.ant-menu-dark {
  background-color: paleturquoise;
}

.header2 {
  background: white;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.ant-layout-sider {
  position: static;
}
.title {
  font-family: "微软雅黑 Bold", "微软雅黑 Regular", "微软雅黑";
  font-weight: 700;
  font-style: normal;
  font-size: 24px;
  color: #464c5b;
}
.input {
  width: 540px;
  height: 31px;
  margin-left: 48px;
  border-radius: 20px;
}
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