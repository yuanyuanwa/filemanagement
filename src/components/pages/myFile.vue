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
                  :beforeUpload="beforeUpload"
                  @change="handleChange"
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
  </div>
</template>

<script>
import list from "../component/list";
// import url from "../../serviceAPI.config";
import { defineComponent, reactive, toRefs } from "vue";
import calldps from "../../api/calldps";
export default defineComponent({
  components: {
    listcon: list,
    // url,
  },
  setup() {
    const state = reactive({
      uploadurl:
        "/mda/madata/view/mxp?op=mr_attach&cmd=ah_upload&filename=55555555&attach_id=77777",
    });
    //在上传文件前获取文件名称
    const beforeUpload = (file, FileItem) => {
      console.log("file.name", file.name);
      state.uploadurl =
        "/mda/madata/view/mxp?op=mr_attach&cmd=ah_upload&filename=" +
        file.name +
        "&attach_id=" +
        Date.parse(new Date());
      console.log(state.uploadurl);
    };
    //文件上传成功后刷新列表
    const handleChange = (info) => {
      //在文件上传成功后发起请求
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      //在文件上传成功后发起请求
      if (info.file.status === "done") {
        console.log(info.file.response.md5);
        calldps('p111').then((res)=>{
        console.log(res)
        // message.success(`${info.file.name} file uploaded successfully`);
      });
        // console.log(info.file.response[[Target]]);
      } else if (info.file.status === "error") {
        // message.error(`${info.file.name} file upload failed.`);
      }
      // if(info.file.status==='done'){
      //   calldps('p111').then((res)=>{
      //   console.log(res)
      // });
      //   }
    };
    return {
      ...toRefs(state),
      beforeUpload, //在上传文件前获取文件名称
      handleChange, //文件上传成功后刷新列表
    };
  },
});
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