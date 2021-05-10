<template>
    <div>
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
                    :action="uploadurl"
                  >
                    <a href="javascript:;">上传文件</a>
                  </a-upload>
                </a-menu-item>

                <!-- <a-menu-item>
                  <a-upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    directory
                  >
                    <a href="javascript:;">上传文件夹</a>
                  </a-upload>
                </a-menu-item> -->
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
    </div>
</template>

<script>
import list from "../component/list";
import url from "../../serviceAPI.config"
import {  reactive,toRefs,} from "vue";
    export default {
        components: {
    listcon: list,
    url
  },
  setup(){
    const state = reactive({
      uploadurl:"/mda/madata/view/mxp?op=mr_attach&cmd=ah_upload&filename=Mmd-License-2021-12-10.lic&attach_id=1122233"
    });
    return {
      ...toRefs(state),
     
    };

  }
    }
</script>

<style scoped>
.upload {
  margin-right: 15px;
}
.head-con {
  padding: 40px 18px 0px 18px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 25px;
}
</style>