<template>
  <div>
    <div class="head-con">
      <!-- <div>111111111{{listMenu}}</div> -->
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
    <listcon :listMenu="listMenu"></listcon>
  </div>
</template>

<script>
import list from "../component/list";
import moment from "moment";
// import url from "../../serviceAPI.config";
import { defineComponent, reactive, ref, toRefs,watch} from "vue";
import calldps from "../../api/calldps";
export default defineComponent({
  components: {
    listcon: list,
  },
  setup() { 
    console.log(123);
    const state = reactive({
      uploadurl: "",
      size: "", //上传文件大小
      lis
    });
    
    let listMenu=[]

    calldps("file_manager/get_myfile", {
      // file_manager/get_myfile
        owener: '小明',
      }).then((res) => {
            console.log("刷新列表", res);
            listMenu=[
      {
        name : '总部',
        isActive : true
      },
      {
        name : '地球',
        isActive : false
      },
      {
        name : '火星',
        isActive : false
      }     
    ]
            console.log(66666666666666,listMenu);
          });
    calldps("p111", {
      // file_manager/get_myfile
        // owener: '小明',
      }).then((res) => {
          console.log(677777777,listMenu);
          });

    //在上传文件前获取文件名称
    const beforeUpload = (file, FileItem) => {
      console.log(file);
      state.size = file.size;
      let timer = moment().format("YYYY_MM_DD_HH_mm_ss");
      state.uploadurl =
        "/mda/madata/view/mxp?op=mr_attach&cmd=ah_upload&filename=" +
        file.name +
        "&attach_id=" +
        timer;
      console.log(state.uploadurl);
    };
    //文件上传成功后刷新列表

    const handleChange = (info) => {
      console.log(555555555555,listMenu);
      if (info.file.status !== "uploading") {
        // console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        let truesize = state.size / 1000 + "KB";
        console.log(1111111111,info.file.response);
        //在文件上传成功后传递信息到后台
        calldps("file_manager/file_upload", {
          // attach_id: info.file.response.attach_id,
          ftype: info.file.response.ext,
          fname: info.file.response.filename,
          fid: info.file.response.md5,
          size: truesize,
          owener:'小明'
        }).then((res) => {
          console.log(res);
          // message.success(`${info.file.name} file uploaded successfully`);

          //传递信息成功后刷新列表
          calldps("file_manager/get_myfile", {
        owener: '小明',
      }).then((res) => {
        console.log(listMenu);
            console.log("刷新列表", res);
            listMenu=res
            console.log(66666666666666,state.dd);
          });
        });
      } else if (info.file.status === "error") {
        // message.error(`${info.file.name} file upload failed.`);
      }
    };
    return {
      ...toRefs(state),
      beforeUpload, //在上传文件前获取文件名称
      handleChange, //文件上传成功后传递信息到后台、刷新列表
      listMenu
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