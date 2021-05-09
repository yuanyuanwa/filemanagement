<template>
  <div class="total-content">
    <div>
      <a-tabs v-model:activeKey="activeKey" style=" text-align: left;">
        <a-tab-pane key="1" tab="全部共享">
             <div class="head-con">
      <div></div>
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
    </div>
    <listcon></listcon>
        </a-tab-pane>
        <a-tab-pane key="2" tab="我的共享" force-render
          >我的共享我的共享我的共享我的共享</a-tab-pane
        >
        <a-tab-pane key="3" tab="共享给我的">共享给我的共享给我的共享给我的共享给我的共享给我的</a-tab-pane>
      </a-tabs>
    </div>
   
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import list from "../component/list";
export default {
  components: {
    listcon: list,
  },
  setup() {
    return {
      activeKey: ref("1"),
    };
  },
};
</script>

<style scoped>
.upload {
  margin-right: 15px;
}
.head-con {
  padding: 0px 18px 0px 18px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 25px;
}
.total-content{
    padding: 10px;
}

</style>