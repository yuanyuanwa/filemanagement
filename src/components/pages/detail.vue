<template>
  <div>
    <a-layout>
      <a-layout-header>
        <headercon></headercon>
      </a-layout-header>
      <a-layout class="content1">
        <div class="content-header">
          <div>
            <a href="">返回</a>
          </div>
          <div>公司项目文档</div>
          <div>
            <div class="dot-load">
              <div>
                <a-dropdown>
                  <a-button @click.prevent type="primary" class="upload">
                    上传</a-button
                  >
                  <template #overlay>
                    <a-menu>
                      <a-menu-item>
                        <a-upload
                          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        >
                          <a href="javascript:;">上传文件</a>
                        </a-upload>
                      </a-menu-item>

                      <a-menu-item>
                        <a-upload
                          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                          directory
                        >
                          <a href="javascript:;">上传文件夹</a>
                        </a-upload>
                      </a-menu-item>
                    </a-menu>
                  </template>
                </a-dropdown>
                <a-dropdown>
                  <a-button @click.prevent type="defalut"> 下载 </a-button>
                  <template #overlay>
                    <a-menu>
                      <a-menu-item>
                        <a href="javascript:;">新建文件</a>
                      </a-menu-item>
                      <a-menu-item>
                        <a href="javascript:;">新建文件夹</a>
                      </a-menu-item>
                    </a-menu>
                  </template>
                </a-dropdown>
              </div>

              <div class="dot">···</div>
            </div>
          </div>
        </div>
        <div class="content-content">
          <div class="content-left">
            <listcon></listcon>
          </div>
          <div class="content-right">
            1111111111111111111111111111111111111111111111111111111111111111111
          </div>
        </div>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import { FileOutlined } from "@ant-design/icons-vue";
import { PlusOutlined } from "@ant-design/icons-vue";
import header from "../component/header.vue";
import list from '../component/list'
import {
  defineComponent,
} from "vue";

export default defineComponent({
  components: {
    headercon: header,
    FileOutlined,
    PlusOutlined,
    listcon:list
  },
  setup(){

  }
});
</script>

<style  scoped>
.content1{
  border-left: 1px solid #f0f2f5;
  /* background-color: paleturquoise; */
  margin: 30px 30px 0px 30px;
}
.content-header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
}
.dot-load {
  width: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.upload {
  margin-right: 15px;
}
.dot {
  font-size: 25px;
  font-weight: 700;
}
.content-content{
  display: flex;
  height:89vh;
}
.content-left{
  border: 1px solid palegreen;
  flex: 3;
  height: 100%;
}
.content-right{
  border: 1px solid palevioletred;
  margin-left: 20px;
  flex: 1 ;
  height: 100%;
  word-break: break-all;
}
/deep/ .list{
  background-color: white;
}
</style>