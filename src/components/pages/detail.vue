<template>
  <div>
    <a-layout>
      <a-layout-header>
        <headercon></headercon>
      </a-layout-header>
      <a-layout class="content1">
        <div class="content-header">
          <div>
            <a href=""> &lt 返回</a>
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
            <div style="text-align: left">文档信息</div>
            <div>
              <img
                src="../../assets/document.png"
                alt="图片"
                style="width: 100px; height: 100px; text-align: center"
              />
              <div>title

                 <i class="icon iconfont icon-xiugai"></i>
              </div>
            </div>

            <div style="display: flex; justify-content: space-between">
              <div style="display: flex; align-items: center">
                <div class="circle" style="padding: 0px; margin: 10px"></div>
                李喜庆上传于0000000
              </div>
              <div>32kb</div>
            </div>
            <div style="text-align: left">
              文档描述:112222223874324537254i774725727576475257476275675673576865665367236756dhufeguwgfhdjsgfhsywygewgfefewghdeghjdsfhjsg
            </div>
            <div style="text-align: left">
              <div>已分享:5</div>
              <div style="display: flex;">
                           <div class="shareman">李红</div>
              <div class="shareman">李喜庆</div>
              <div class="shareman">嘻嘻嘻嘻嘻嘻。。。。。</div>
              <div class="jia">+</div>
              </div>
   
            </div>
            <div>
              <div style="text-align: left ">动态</div>
              <div class="seefile">
                <div style="display: flex;align-items:center">
                   <div class="shareman">vvvvvvv</div>
                <div>vvvvv查看了文档</div>
                </div>
                <div>刚刚</div>
              </div>
              <div class="seefile">
                <div style="display: flex;align-items:center">
                   <div class="shareman">vvvvvvvvvvvvvvvvv</div>
                <div>vvvvv查看了文档</div>
                </div>
                <div>刚刚</div>
              </div>
              <div class="seefile">
                <div style="display: flex;align-items:center">
                   <div class="shareman">vvvvvvv</div>
                <div>vvvvv查看了文档</div>
                </div>
                <div>刚刚</div>
              </div>
              
            </div>
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
import list from "../component/list";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    headercon: header,
    FileOutlined,
    PlusOutlined,
    listcon: list,
  },
  setup() {},
});
</script>

<style  scoped>
.content1 {
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
.content-content {
  display: flex;
  /* height: 81vh; */
}
.content-left {
  /* border: 1px solid palegreen; */
  flex: 3;
  height: 100%;
}
.content-right {
  /* border: 1px solid palevioletred; */
  background-color: white;
  margin-left: 20px;
  flex: 1;
  height: 100%;
  word-break: break-all;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  align-self: center;
  padding: 20px 10px;
}
.content-right div {
  padding-bottom: 10px;
}
/deep/ .list {
  background-color: white;
}
.seefile {
  text-align: left;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid pink;
  padding-top: 20px;
  align-items:center
}
.circle {
  width: 10px;
  height: 10px;
  border: 1px solid #2db7f5;
  border-radius: 50%;
}
.shareman {
  width: 50px;
  height: 50px;
  background-color: pink;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 50px;
  border: 1px solid palevioletred;
  border-radius: 50%;
  margin-right:10px;
  text-align: center;
}
.jia{
  font-size: 30px;
  font-weight: 700;
  width: 50px;
  height: 50px;
  border: 1px solid peachpuff;
  border-radius: 50%;
  line-height: 50px;
  text-align: center;
  background-color: papayawhip;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

}
.icon-xiugai{
  font-size: 20px;
}
</style>