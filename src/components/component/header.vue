<template>
  <div>
    <!-- <a-layout-header class="header"> </a-layout-header> -->
    <a-layout-header class="header2">
      <div class="left-con">
        <div class="title">文件管理系统</div>

        <a-input placeholder="搜索" v-model:value="userName" class="input">
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
      userName: ref(""),
      displayPicture: require("../../assets/cat.jpg"),
    };
  },
});
</script>

<style  scoped>
.news {
  margin-right: 30px;
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
/deep/ .ant-layout-header {
  z-index: 100;
}
</style>