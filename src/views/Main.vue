<template>
    <div>
    <a-layout>
    <a-layout-header class="header">
    </a-layout-header>
     <a-layout-header class="header2">
     <div class='title'>文件管理系统</div>

      <a-input placeholder="搜索" v-model:value="userName" class='input' suffix="=">
      <template #prefix>
        <search-outlined type="user" />
      </template>
     
    </a-input>
    
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="250" style="background: #fff">
        <a-menu
          mode="inline"
          v-model:selectedKeys="selectedKeys2"
          v-model:openKeys="openKeys"
          :style="{ height: '100%', borderRight: 0 , margin:'10px,0px,0px,0px'}"
        >
        <a-menu-item key="2">
        <CalendarOutlined />
        Navigation Two
      </a-menu-item>
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                首页
              </span>
            </template>
            <a-menu-item key="1">option1</a-menu-item>
            <a-menu-item key="2">option2</a-menu-item>
            <a-menu-item key="3">option3</a-menu-item>
            <a-menu-item key="4">option4</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <laptop-outlined />
                subnav 2
              </span>
            </template>
            <a-menu-item key="5">option5</a-menu-item>
            <a-menu-item key="6">option6</a-menu-item>
            <a-menu-item key="7">option7</a-menu-item>
            <a-menu-item key="8">option8</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <template #title>
              <span>
                <notification-outlined />
                subnav 3
              </span>
            </template>
            <a-menu-item key="9">option9</a-menu-item>
            <a-menu-item key="10">option10</a-menu-item>
            <a-menu-item key="11">option11</a-menu-item>
            <a-menu-item key="12">option12</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px;height:100vh" >
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          Content
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
    </div>
</template>

<script>
    import { LaptopOutlined, NotificationOutlined,SearchOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    LaptopOutlined,
    NotificationOutlined,
    SearchOutlined,
  },
  setup() {
    return {
      selectedKeys1: ref(['2']),
      selectedKeys2: ref(['1']),
      collapsed: ref(false),
      openKeys: ref(['sub1']),
      userName:ref('')
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

.site-layout-background {
  background: #fff;
}

.ant-menu-dark{
    background-color: paleturquoise;
}

.header2{
background:white;
  width:100%;
  position:absolute;
  top:0px;
  left:0px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  display:flex;
  align-items:center;
}
.ant-layout-sider{
  position:static;
}
.title{
      font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
    font-weight: 700;
    font-style: normal;
    font-size: 24px;
    color: #464C5B;
}
.input{
  width:540px;
  height:31px;
  margin-left:48px;
  border-radius:20px;
}
</style>