<template>
  <div class="home">
    <!-- <a-button type="primary">Primary</a-button> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

  <!-- <a-layout class="layout">
    <a-layout-sider class="layout">Sider</a-layout-sider>
    <a-layout>

      <a-layout-content class="layout">Content</a-layout-content>

    </a-layout>
  </a-layout> -->
  <!-- <div class="contain">
<div class="left-con">
  <span class="title">{{msg}}</span>
  <img :src='file' alt="">
</div>
<div>

</div>
  </div> -->
  <a-layout>
      <a-layout-sider class="sider">
  <span class="title">{{msg}}</span>
  <img :src='file' alt="">
</a-layout-sider>
      <a-layout-content class="content">Content
        
      </a-layout-content>
  </a-layout>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { reactive, toRefs } from "vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
  setup(){
    const state = reactive({
      msg:'文档管理系统',
      file:require('../assets/u1.png')
    });
    return {
      ...toRefs(state),
    };
  },
  
};
</script>
<style scoped>
/* .layout{
  background-color: pink;
  height: 100px;
  width: 100px;
} */
.title{
  font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
    font-weight: 700;
    font-size: 28px;
    color: #464C5B;
}
.left-con{
  display: flex;
  /* flex-direction: column; */
}
.left-con img{
  flex-grow: 0;
}
/* .sider{
  background-color: pink;
} */
.sider{
  background-color:white;
  margin-top: 50px;
  margin-left: 212px;
}
.content{
  background-color: white;
}
.ant-layout{
  background-color: white;
}
</style>
