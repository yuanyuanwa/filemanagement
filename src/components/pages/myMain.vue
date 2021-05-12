<template>
  <div class="page-con">
    <div class="head">
      <div class="head-con">
        <div class="recently">最近访问</div>
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
      <div class="list">
        <div>
          <a-radio-group v-model:value="size" class="button">
            <a-radio-button value="large">分享</a-radio-button>

            <a-radio-button value="large">收藏</a-radio-button>
            <a-radio-button value="large">下载</a-radio-button>
            <a-radio-button value="large">移动到</a-radio-button>
            <a-radio-button value="large" @click.prevent="del"
              >删除</a-radio-button
            >
          </a-radio-group>
        </div>
        <div>
          <div @click="changeView">
            <div v-if="changeList">
              <i class="icon iconfont icon-liebiaoqiehuan-1 changeList"></i>
            </div>
            <div v-else>
              <i class="icon iconfont icon-liebiaoqiehuan- changeList"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content">
      <div v-if="view" @click="del">
        <a-table
          :row-selection="{
            selectedRowKeys: selectedRowKeys,
            onChange: onSelectChange,
          }"
          :data-source="data"
          :columns="columns"
        >
          <template #name="scope">
            <div style="display: flex; justify-content: space-between">
              <div style="word-break: break-all; width: 100px">
                <FileOutlined />
                <router-link to="/filedetail">
                  <span>{{ scope.text }}</span>
                </router-link>
                <!-- <span v-for="tag in scope.record.tags" :key="tag">
                  <a-tag
                    v-if="tag.isClick || tag.isSystemTag"
                    :key="tag"
                    :color="tag.color"
                  >
                    {{ tag.key }}
                  </a-tag>
                </span> -->
              </div>
              <div @click="handleStarChange(scope.record.key)">
                <div v-if="scope.record.icon">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xingxing"></use>
                  </svg>
                </div>
                <div v-else>
                  <i class="icon iconfont icon-xingxing1"></i>
                </div>
              </div>
            </div>
          </template>
          <template #customTitle>
            <span> 文件名称 </span>
          </template>

          <template #tags="{ record }">
            <span v-if="record.tags.length > 0" class="filetags">
              <span v-for="tag in record.tags" :key="tag">
                <a-tag
                  v-if="tag.isClick || tag.isSystemTag"
                  :key="tag"
                  :color="tag.color"
                >
                  {{ tag.key }}
                </a-tag>
              </span>
            </span>
            <span v-else class="line">-</span>
          </template>

          //大小
          <template #size="{ record }">
            <span>
              {{ record.size }}
            </span>
          </template>

          //状态
          <template #state="{ record }">
            <span class="filestate">
              {{ record.isFiled }}
            </span>
          </template>

          //浏览次数
          <template #see="{ record }">
            <span>
              <a> {{ record.age }}次</a>
            </span>
          </template>

          //下载次数
          <template #download="{ record }">
            <span>
              <a> {{ record.age }}次</a>
            </span>
          </template>

          //最后浏览时间
          <template #seeTime="{ record }">
            <span>
              {{ record.seeTime }}
            </span>
          </template>

          //操作
          <template #actions="{ record }">
            <a-dropdown>
              <div class="ant-dropdown-link dot" @click.prevent>...</div>
              <template #overlay>
                <a-menu>
                  <a-menu-item key="0">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.alipay.com/"
                    >
                      <i class="icon iconfont icon-fenxiang1"></i>
                      分享
                    </a>
                  </a-menu-item>
                  <a-menu-item key="1">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.taobao.com/"
                    >
                      <i class="icon iconfont icon-xiezuo_huaban1"></i>
                      协作
                    </a>
                  </a-menu-item>
                  <a-menu-item key="2">
                    <a rel="noopener noreferrer" @click="showModal1(record)">
                      <i class="icon iconfont icon-tianjiabiaoqian"></i>
                      添加标签
                    </a>
                    <a-modal
                      v-model:visible="visible1"
                      title="添加标签"
                      @ok="handleOk1"
                      ok-text="确认"
                      cancel-text="取消"
                      :footer="null"
                    >
                      <div class="tag">
                        <!-- //热门标签： -->
                        <div class="system-tag">
                          <div>热门标签：</div>
                          <div>
                            <span>
                              <a-tag color="red">
                                {{ "热门标签" }}
                              </a-tag>
                            </span>
                          </div>
                        </div>

                        <div class="system-tag">
                          <div>系统标签：</div>
                          <div>
                            <span
                              v-for="(tag, index) in systemTags"
                              :key="index"
                            >
                              <a-tag
                                :key="tag.key"
                                :closable="false"
                                @click="handleTagClick1(tag, record)"
                                :color="tag.isClick ? 'cyan' : ''"
                              >
                                {{ tag.name }}
                              </a-tag>
                            </span>
                          </div>
                        </div>
                        <div class="">自定义标签：</div>
                        <span v-for="(tag, index) in tags" :key="index">
                          <a-tag
                            :key="tag.key"
                            :closable="true"
                            @close.prevent="handleClose(tag, record)"
                            @click="handleTagClick(tag, record)"
                            :color="tag.isClick ? 'cyan' : ''"
                          >
                            {{ tag.name }}
                          </a-tag>
                        </span>
                        <a-input
                          v-if="inputVisible"
                          ref="inputRef"
                          type="text"
                          size="small"
                          :style="{ width: '78px' }"
                          v-model:value="inputValue"
                          @blur="handleInputConfirm($event, record)"
                          @keyup.enter="handleInputConfirm($event, record)"
                        />
                        <a-tag
                          v-else
                          @click="showInput"
                          style="background: #fff; border-style: dashed"
                          color="blue"
                        >
                          <plus-outlined />
                          自定义标签
                        </a-tag>
                      </div>
                    </a-modal>
                  </a-menu-item>
                  <!-- <a-modal
                    v-model:visible="visible"
                    title="分享文档"
                    @ok="handleOk"
                    ok-text="确认"
                    cancel-text="取消"
                  >
                    <div>是否删除该标签</div>
                  </a-modal> -->
                  <a-menu-item key="3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.taobao.com/"
                    >
                      <i class="icon iconfont icon-zhongmingming"></i>
                      重命名
                    </a>
                  </a-menu-item>
                  <a-menu-item key="4">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.taobao.com/"
                    >
                      <i class="icon iconfont icon-xiazai"></i>
                      下载
                    </a>
                  </a-menu-item>
                  <a-menu-item key="5">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.taobao.com/"
                    >
                      <i class="icon iconfont icon-shoucang"></i>
                      收藏
                    </a>
                  </a-menu-item>
                  <a-menu-item key="6">
                    <a rel="noopener noreferrer" @click="showModal2(record)">
                      <i class="icon iconfont icon-yingyong"></i>
                      应用
                    </a>
                    <a-modal
                      v-model:visible="visible2"
                      title="应用"
                      @ok="handleOk2"
                      ok-text="确认"
                      cancel-text="取消"
                      :footer="null"
                    >
                      <div class="app" v-if="hasapp">
                        <div class="box">
                          <div
                            v-for="(item, i) in applications"
                            :key="i"
                            class="applications"
                          >
                            <div class="tagsname">
                              <a
                                :href="item.url"
                                class="tagsname-a"
                                target="_blank"
                                >{{ item.name }}</a
                              >
                            </div>
                            <div class="img-container">
                              <div>
                                <img :src="appimg" alt="" class="box_img" />
                              </div>
                            </div>
                          </div>
                          <div>{{ appli }}</div>
                        </div>
                      </div>
                      <div v-else>
                        <div class="nullnull">
                          <div>该文档还未添加标签，暂无应用</div>
                        </div>
                      </div>
                    </a-modal>
                  </a-menu-item>
                  <a-menu-item key="7">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.taobao.com/"
                    >
                      <i
                        class="icon iconfont icon-icon-quanju-baocuncundang"
                      ></i>
                      存档
                    </a>
                  </a-menu-item>
                  <a-menu-item key="8">
                    <a @click="deletfile(record)">
                      <i class="icon iconfont icon-delete"></i>
                      删除
                    </a>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </template>
        </a-table>
      </div>

      <div v-else>
        <div class="document">
          <div v-for="(item, i) in data" :key="i">
            <router-link to="/filedetail">
              <!-- <img src="../assets/document.png" alt=""> -->
              <img :src="item.imageurl" alt="图片" />
              <a-tooltip placement="bottom" color="#2db7f5">
                <template #title>
                  <span>{{ item.name }}</span>
                </template>
                <div class="document-div">{{ item.name }}</div>
              </a-tooltip>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FileOutlined } from "@ant-design/icons-vue";
import { message } from 'ant-design-vue';
import { PlusOutlined } from "@ant-design/icons-vue";
import moment from "moment";
// import api from "../api";
import calldps from "../../api/calldps";
import URL from "../../api/url";
// import  {loadTableData}  from "../../api/index";
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import {
  defineComponent,
  ref,
  computed,
  reactive,
  toRefs,
  nextTick,
  onMounted,
  createVNode
} from "vue";
import { Modal } from "ant-design-vue";
// import { ColumnProps } from 'ant-design-vue/es/table/interface';

export default defineComponent({
  components: {
    FileOutlined,
    PlusOutlined,
  },
  setup() {
    // calldps('p111').then((res)=>{
    //   console.log(res)

    // });

    //定义变量
    const state = reactive({
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      value1: "",
      // tags: [
      //   { key: 1, name: "机密", isClick: false },
      //   { key: 2, name: "个人", isClick: false },
      //   { key: 3, name: "工作", isClick: false },
      //   { key: 4, name: "加油", isClick: false },
      // ],
      tags: [],
      // systemTags: [
      //   { key: 1, name: "科学城", isClick: false },
      //   { key: 2, name: "科学城1", isClick: false },
      //   { key: 3, name: "科学城2", isClick: false },
      //   { key: 4, name: "科学城3", isClick: false },
      // ],
      systemTags: [],
      // totalTag: [], //
      inputVisible: false,
      inputValue: "",
      applications: "",
      changeList: false,
      view: true,
      appli: "",
      uploadurl: "",
      size: "", //上传文件大小
      option: "",
      appimg: require("../../assets/example.png"),
      hasapp: false,
      // iconname:ref('icon-0-57')
    });

    let data = ref();

    //加载页面时请求列表
    onMounted(() => {
      loadTable();
    });

    //请求文件列表calldps
    const loadTable = () => {
      calldps(URL.common.list, {
        owener: "小明",
      }).then((res) => {
        // console.log(listMenu);
        console.log("刷新列表", res);
        console.log(data);
        // let newList = res[0];
        // let a=item.labels.split("|");
        data.value = res.map((item, index) => {
          return {
            id: item.id,
            key: index,
            fid: item.fid,
            name: item.fname,
            age: 32,
            size: item.size,
            isFiled: "已归档",
            seeTime: item.modify_time,
            _id: index,
            //   tags:[
            //     {
            //        key: item.labels,
            //        color: "orange",
            //        isSystemTag: true,
            //        isClick: false,
            //     },
            // ],
            tags: item.labels
              ? item.labels.split("|").map((item) => {
                  return {
                    key: item,
                    color: "orange",
                    isSystemTag: true,
                    isClick: false,
                  };
                })
              : [],

            action: "...",
            icon: false,
            width: 400,
            imageurl: require("../../assets/document.png"),
          };
        });
        console.log(7, data);
      });
    };

   //请求标签calldps
    const loadList=(record)=>{
      let currentTags = [];
      try {
        currentTags = record.tags.map((item) => {
          return item.key;
        });
      } catch (e) {
        console.log(e);
      }
      calldps(URL.common.labels, {
        author: "小明",
      }).then((res) => {
        // console.log(listMenu);
        console.log("获取系统标签", res);
        if (res && res.length > 0) {
          try {
            let data = res[0];
            state.systemTags = data.sys_labels.map((item) => {
              let isClick = currentTags.includes(item.name);
              return {
                key: item.id,
                name: item.name,
                isClick,
              };
            });
            state.tags = data.user_labels.map((item) => {
              return {
                key: item.id,
                name: item.name,
                isClick: currentTags.includes(item.name),
              };
            });
          } catch (e) {
            console.log(e);
          }
        }
      });
      selectID = record._id;
      selectTag = record;
    }

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
      // console.log(555555555555,listMenu);
      if (info.file.status !== "uploading") {
        // console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        let truesize
        if(state.size > 0&& state.size < 1000000) {
           truesize = (state.size / 1000).toFixed(2) + "KB";
        } else if(state.size >= 1000000) {
         truesize = (state.size / 1000000).toFixed(2) + "MB";

        }
        console.log(1111111111, info.file.response);
        //在文件上传成功后传递信息到后台
        calldps(URL.common.upload, {
          // attach_id: info.file.response.attach_id,
          ftype: info.file.response.ext,
          fname: info.file.response.filename,
          fid: info.file.response.md5,
          size: truesize,
          owener: "小明",
        }).then((res) => {
          console.log(res);
          // message.success(`${info.file.name} file uploaded successfully`);

          //传递信息成功后刷新列表
          loadTable();
        });
      } else if (info.file.status === "error") {
        // message.error(`${info.file.name} file upload failed.`);
      }
    };

    //删除文件
    const deletfile = (record) => {
      console.log("已删除");
      calldps(URL.common.delete, {
        id: record.id,
        fid: record.fid,
      }).then((res) => {
        if (res === 1) {
          loadTable();
        } else {
          return;
        }
      });
    };

    const inputRef = ref();

    //删除选中的文件
    const del = () => {
      //发起删除请求
      console.log("删除");
    };

    const showInput = () => {
      state.inputVisible = true;
      nextTick(() => {
        inputRef.value.focus();
      });
    };

    //系统标签选中和不选中
    const handleTagClick1 = (tag, record) => {
      // console.log(tag.key);
      // console.log(tag.name);
      console.log("RECORD", record);
      let tags = state.systemTags;
      // console.log(11111,tags);
      tag.isClick = !tag.isClick;
      tag.isClick === true ? (state.option = 1) : (state.option = 2);
      calldps(URL.common.option, {
        owener: "小明",
        id: record.id,
        label_id: tag.key,
        label_name: tag.name,
        op: state.option,
      }).then((res) => {
        // console.log(listMenu);
        console.log("刷新列表", res);
        if(state.option===1){
          message.success('添加标签成功');
        }else{
          message.success('删除标签成功');
        }
        loadTable();
      }).catch((e=>{
        console.log(e);
        message.error('添加标签失败');
      }));
    };
    //自定义标签选中和不选中
    const handleTagClick = (tag, record) => {
      console.log('xuanbuxuanzhong')
      // console.log(tag.key);
      // console.log(tag.name);
      console.log("RECORD", record);
      let tags = state.systemTags;
      // console.log(11111,tags);
      tag.isClick = !tag.isClick;
      tag.isClick === true ? (state.option = 1) : (state.option = 2);
      calldps(URL.common.option, {
        owener: "小明",
        id: record.id,
        label_id: tag.key,
        label_name: tag.name,
        op: state.option,
      }).then((res) => {
        // console.log(listMenu);
        console.log("刷新列表", res);
        if(state.option===1){
          message.success('添加标签成功');
        }else{
          message.success('删除标签成功');
        }
        
        loadTable();
      }).catch((e=>{
        console.log(e);
        message.error('添加标签失败');
      }));
    };
    //确认时不重复输入
    const handleInputConfirm = ($event, record) => {
      (state.option = 4), console.log("state.option", state.option);
      console.log("RECORD", record);
      const inputValue = state.inputValue;
      if (!inputValue) return;
      let obj = {
        key: state.tags.length + 1,
        name: inputValue,
        isClick: false,
        isSystemTag: false,
      };
      let tags = state.tags;
      let isFind = false;
      tags.map((item) => {
        if (inputValue && inputValue === item.name) {
          isFind = true;
        }
      });
      if (!isFind) {
        tags = [...tags, obj];
      }
      console.log(tags);
      Object.assign(state, {
        tags,
        inputVisible: false,
        inputValue: "",
      });
      console.log(55, state.tags);
      console.log(obj.key);
      console.log(obj.name);

      calldps(URL.common.option, {
        owener: "小明",
        id: record.id,
        label_id: obj.key,
        label_name: obj.name,
        op: state.option,
      }).then((res) => {
        // console.log(listMenu);
        console.log("刷新列表", res);
        message.success('创建标签成功');
        loadTable();
      }).catch((e)=>{
        console.log(e);
        message.error('创建标签失败');
      });
    };

    //清除标签
    const handleClose = (removedTag, record) => {
      console.log("removedTag", removedTag);
      state.option = 3
      // visible.value = true;     
      Modal.confirm({
        title: "你要销毁这个标签吗?",
        icon: createVNode(ExclamationCircleOutlined),
        content: createVNode(
          "div",
          { style: "color:red;" },
          // "Some descriptions"
          
        ),
        okText: '确认',
        cancelText: '取消',
        onOk() {
         
          calldps(URL.common.option, {
            owener: "小明",
            id: record.id,
            label_id: removedTag.key,
            label_name: removedTag.name,
            op: state.option,
          }).then((res) => {
            message.success('销毁标签成功');
            // console.log(listMenu);
            console.log("刷新列表", res);
            loadList(record)
            loadTable();
          }).catch((e)=>{
            console.log(e);
            message.error('销毁标签失败');
          });
         
         
        },
        onCancel() {

         
          return false
          console.log("Cancel");
        },
        class: "test",
      });
     
    };
    const handleOk = (e) => {
      console.log(1, e);
      visible.value = false;
    };

    const handleOk1 = (e) => {
      // console.log(3333, e);
      // console.log(2, selectTag);
      // let all = state.tags.concat(state.systemTags);
      // console.log("all", all);

      // console.log(223, data.value);

      // data.value = data.value.map((item) => {
      //   if (item._id === selectID) {
      //     item.tags = all.map((item) => {
      //       return {
      //         key: item.name,
      //         color: "orange",
      //         isSystemTag: item.isSystemTag,
      //         isClick: item.isClick,
      //       };
      //     });
      //   }
      //   return item;
      // });
      // selectTag = all.map((item) => {
      //   return {
      //     key: item.name,
      //     color: "orange",
      //     isSystemTag: item.isSystemTag,
      //     isClick: item.isClick,
      //   };
      // });
      // console.log("selectTag", selectTag);

      // //合并系统标签和自定义标签
      // state.totalTag = state.tags.concat(state.systemTags);
      // console.log(55555, state.totalTag);

      // //选择标签
      // selectTag.tags = state.totalTag
      //   .filter((v) => v.isClick)
      //   .map((item) => {
      //     return {
      //       key: item.name,
      //       //cyan:青绿色s
      //       color: item.isClick ? "cyan" : "",
      //     };
      //   });
      // console.log("selectTag.tags", selectTag.tags);

      visible1.value = false;
      // data.value = data.value.map((item) => {
      //   if (item._id === selectID) {
      //     item.tags = all.map((item) => {
      //       return {
      //         key: item.name,
      //         color: "orange",
      //         isSystemTag: item.isSystemTag,
      //         isClick: item.isClick,
      //       };
      //     });
      //   }
      //   return item;
      // });
    };

    const changeView = () => {
      state.changeList = !state.changeList;
      state.view = !state.view;
    };

    //对话框是否展示，默认不展示
    const visible = ref(false);
    const visible1 = ref(false);
    const visible2 = ref(false);
    const creatTag = () => {
      console.log(111);
    };
    const columns = [
      {
        dataIndex: "name",
        key: "name",
        slots: { title: "customTitle", customRender: "name" },
      },
      {
        title: "标签",
        // dataIndex: "actions",
        key: "tags",
        slots: { customRender: "tags" },
      },
      {
        title: "大小",
        // dataIndex: "age",
        key: "size",
        slots: { customRender: "size" },
      },
      {
        title: "状态",
        // dataIndex: "actions",
        key: "state",
        slots: { customRender: "state" },
      },

      {
        title: "浏览次数",
        key: "see",
        slots: { customRender: "see" },
      },
      {
        title: "下载次数",
        key: "download",
        slots: { customRender: "download" },
      },
      {
        title: "最后修改时间",
        key: "seeTime",
        slots: { customRender: "seeTime" },
      },
      {
        title: " ",
        key: "actions",
        dataIndex: "tags",
        slots: { customRender: "actions" },
      },
    ];

    let selectTag = {};
    let selectID = "";

    //获取标签
    const showModal1 = (record) => {
      console.log("record", record);
      
      loadList(record)
      console.log(record);

    
      visible1.value = true;
    };
    //应用
    const showModal2 = (record) => {
      console.log("rerere", record);
      calldps(URL.common.app, {
        id: record.id,
      }).then((res) => {
        // console.log(listMenu);
        console.log("应用", res);
        console.log(1111, state.applications);
        if (res) {
          state.applications = res.map((item) => {
            item.url.includes("?")
              ? (item.url = item.url + "&fid=")
              : (item.url = item.url + "?fid=");
            return {
              id: item.id,
              name: item.name,
              url: item.url + record.fid,
            };
          });
          state.hasapp = true;
        } else {
          state.hasapp = false;
        }
      });
      visible2.value = true;
    };
    const handleOk2 = (e) => {
      console.log(e);
      visible2.value = false;
    };
    const handleStarChange = (key) => {
      console.log(2, key);
      data.value[key].icon = !data.value[key].icon;
    };

    const hasSelected = computed(() => state.selectedRowKeys.length > 0);

    const start = () => {
      state.loading = true;
      // ajax request after empty completing
      setTimeout(() => {
        state.loading = false;
        state.selectedRowKeys = [];
      }, 1000);
    };
    const onSelectChange = (selectedRowKeys) => {
      console.log("selectedRowKeys changed: ", selectedRowKeys);
      state.selectedRowKeys = selectedRowKeys;
    };
    return {
      size: ref("large"),
      visible,
      visible1,
      visible2,
      showModal1,
      showModal2,
      handleOk,
      handleOk1,
      handleOk2,
      data,
      columns,
      hasSelected,
      ...toRefs(state),
      // func
      start,
      onSelectChange,
      handleStarChange,
      value: ref([]),
      // list,
      creatTag,
      handleClose,
      showInput,
      handleInputConfirm,
      handleTagClick,
      inputRef,
      handleTagClick1,
      changeView,
      del,
      beforeUpload, //在上传文件前获取文件名称
      handleChange, //文件上传成功后传递信息到后台、刷新列表
      deletfile,
    };
  },
});
</script>

<style scoped>
.checkbox {
  display: flex;
  align-items: center;
}
.ant-input {
  width: 100px;
  height: 20px;
}
.recently {
  font-family: "微软雅黑 Bold", "微软雅黑 Regular", "微软雅黑";
  font-weight: 700;
  font-style: normal;
  font-size: 18px;
  color: #464c5b;
}
.head-con {
  padding: 40px 18px 0px 18px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 25px;
}
.upload {
  margin-right: 15px;
}
.button {
  display: flex;
  padding: 18px;
}

.ant-radio-button-wrapper {
  border-radius: 0 !important;
}
.head {
  border-bottom: 1px solid #f0f2f5;
}
.icon {
  width: 1.5em;
  height: 1.5em;
  fill: currentColor;
  overflow: hidden;
}

.icon-xingxing1 {
  font-size: 19px;
}
.tag-con {
  display: flex;
  justify-content: space-between;
}
.tag-con-left {
  border: 1px solid #f0f2f5;
  padding: 0px 10px 0px 10px;
  width: 50%;
  margin: 10px 15px 10px 15px;
  /* display: flex;
  justify-content: center; */
}
.ant-row {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.ant-checkbox-wrapper {
  display: flex;
}

.ant-checkbox-checked::after {
  border: none;
}
.tag-container {
  padding: 10px 10px;
  width: 200px;
  border-bottom: 1px solid #f0f2f5;
}
.ant-modal-body {
  padding: 0px;
}

.ant-tag {
  border-radius: 15px;
  margin: 10px;
}
.system-tag {
  padding-bottom: 20px;
  border-bottom: 1px solid #f0f2f5;
  margin-bottom: 20px;
}

.dot {
  font-size: 25px;
  font-weight: 700;
}
.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icon-liebiaoqiehuan-1,
.icon-liebiaoqiehuan- {
  font-size: 25px;
}
.app {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column-reverse;
}
.document {
  margin: 20px;
  display: flex;
}
.document img {
  width: 50px;
  height: 50px;
}
.document-div {
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;

  white-space: nowrap;
  margin-bottom: 20px;
}
.filetags {
  display: inline-block;
  width: 100px;
}
.filestate {
  display: inline-block;
  width: 50px;
}
.line {
  display: inline-block;
  font-size: 20px;
  width: 100px;
  text-align: center;
}
.box {
  display: flex;
  flex-wrap: wrap;
}
.applications {
  width: 216px;
  /* height: 200px; */
  border: 1px solid #f0f0f0;
  margin: 12px 10px;
  border-radius: 5%;
}
.applications:hover {
  /* background-color: pink; */
  box-shadow: 0 0px 4px rgba(41, 148, 255, 0.65);
}
.applications:hover .tagsname-a {
  /* background-color: pink; */
  color: #3f98f3;
}
.img-container {
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box_img {
  width: 200px;
  height: 108px;
}

.tagsname {
  padding: 8px 8px 8px 12px;
}
.tagsname-a {
  color: #666666;
}
.nullnull {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 472px;
  /* border: 1px solid pink; */
}
</style>