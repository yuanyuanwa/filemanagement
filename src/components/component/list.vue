<template>
  <div class="page-con">
    <div class="head">
      <div class="list">
        <div>
          <a-radio-group v-model:value="size" class="button">
            <a-radio-button value="large" @click.prevent="showModal"
              >分享</a-radio-button
            >
            <a-modal
              v-model:visible="visible"
              title="分享文档"
              @ok="handleOk"
              ok-text="确认"
              cancel-text="取消"
            ><div>
              {{listMenu[0]}}
            </div>
             
            </a-modal>
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
              <div style="word-break: break-all; width: 300px">
                <FileOutlined />
                <router-link to="/filedetail">
                  <span>{{ scope.text }}</span>
                </router-link>
                <span v-for="tag in scope.record.tags" :key="tag">
                  <a-tag
                    v-if="tag.isClick"
                    :key="tag"
                    :color="tag.color"
                  >
                    {{ tag.key }}
                  </a-tag>
                </span>
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

          //大小
          <template #size="{ record }">
            <span>
              {{ record.size }}
            </span>
          </template>

          //状态
          <template #state="{ record }">
            <span>
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
                    >
                      <div class="tag">
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
                                @close="handleClose(tag)"
                                @click="handleTagClick1(tag)"
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
                            @close="handleClose(tag)"
                            @click="handleTagClick(tag)"
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
                          @blur="handleInputConfirm"
                          @keyup.enter="handleInputConfirm"
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
                    <a rel="noopener noreferrer" @click="showModal2">
                      <i class="icon iconfont icon-yingyong"></i>
                      应用
                    </a>
                    <a-modal
                      v-model:visible="visible2"
                      title="应用"
                      @ok="handleOk2"
                      ok-text="确认"
                      cancel-text="取消"
                    >
                      <div class="app">
                        <div>
                          <div
                            v-for="(item, i) in applications"
                            :key="i"
                            class="applications"
                          >
                            <i :class="[icon, iconfont, item.iconname]"></i>
                            <a :href="item.url">{{ item.name }}</a>
                          </div>
                          <div>{{ appli }}</div>
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
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://www.taobao.com/"
                    >
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
import { PlusOutlined } from "@ant-design/icons-vue";
// import api from "../api";
import calldps from "../../api/calldps";
import {
  defineComponent,
  ref,
  computed,
  reactive,
  toRefs,
  nextTick,
} from "vue";
// import { ColumnProps } from 'ant-design-vue/es/table/interface';

export default defineComponent({
  components: {
    FileOutlined,
    PlusOutlined,
  },
  props:{
    listMenu: { // 菜单数据
      type: Object,
            required: true,
            default(){
                return []
            }
        }
  },
  setup(props) {
    console.log(111);
    console.log(1010010101010,props);
    console.log(10,props.listMenu);
    console.log(3333333333333,props.listMenu[0]);
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
      applications: [
        {
          key: 1,
          name: "科学城大屏展示",
          url: "https://baidu.com",
          iconname: "icon-pingmu",
        },
        {
          key: 2,
          name: "查看Excel内容",
          url: "https://baidu.com",
          iconname: "icon-Excel",
        },
        {
          key: 3,
          name: "查看图片",
          url: "https://baidu.com",
          iconname: "icon-tupian",
        },
        {
          key: 4,
          name: "XXX部门大屏展示",
          url: "https://baidu.com",
          iconname: "icon-pingmu",
        },
      ],
      changeList: false,
      view: true,
      icon: "icon",
      iconfont: "iconfont",
      appli: "",
      // iconname:ref('icon-0-57')
    });

    const inputRef = ref();

    //删除选中的文件
    const del = () => {
      //发起删除请求
      console.log("删除");
    };

    //清除标签
    const handleClose = (removedTag) => {
      //removedTag：要清除的标签
      console.log(1, removedTag);
      const tags = state.tags.filter((tag) => tag !== removedTag);
      console.log(tags);
      state.tags = tags;
      console.log(33, state.tags);
    };

    const showInput = () => {
      state.inputVisible = true;
      nextTick(() => {
        inputRef.value.focus();
      });
    };

    //系统标签选中和不选中
    const handleTagClick1 = (tag) => {
      console.log(tag);

      let tags = state.systemTags;
      tags.map((item) => {
        if (item.name === tag.name) {
          item.isClick = !tag.isClick;
        }
      });
    };
    //自定义标签选中和不选中
    const handleTagClick = (tag) => {
      console.log(tag);
      let tags = state.tags;
      tags.map((item) => {
        if (item.name === tag.name) {
          item.isClick = !tag.isClick;
        }
      });
      console.log("tag", tag);
    };
    //确认时不重复输入
    const handleInputConfirm = () => {
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
    const data = ref([
      {
        key: "0",
        name:
          "云销售项目111111111111111111111111111111111111111111111111111111111111111111111",
        age: 32,
        size: "18KB",
        isFiled: "已归档",
        seeTime: "2020-05-07",
        _id: "A12jkasf",
        tags: [
          {
            key: "科学城",
            color: "orange",
            isSystemTag: true,
            isClick: false,
          },
          {
            key: "科学城1",
            color: "orange",
            isSystemTag: true,
            isClick: false,
          },
          {
            key: "工程文件",
            color: "orange",
            isSystemTag: false,
            isClick: true,
          },
          {
            key: "项目文件2",
            color: "orange",
            isSystemTag: false,
            isClick: false,
          },
        ],
        action: "...",
        icon: false,
        width: 400,
        imageurl: require("../../assets/document.png"),
      },
      {
        key: "1",
        name: "Jim Green",
        age: 42,
        isFiled: "未归档",
        size: "18KB",
        seeTime: "2020-05-07",
        _id: "NBerfghia2sf",

        tags: [
          {
            key: "文档1",
            color: "orange",
            isSystemTag: true,
          },
          {
            key: "图片2",
            color: "orange",
            isSystemTag: true,
          },
          {
            key: "工程文件",
            color: "orange",
            isSystemTag: false,
            isClick: true,
          },
          {
            key: "项目文件2",
            color: "orange",
            isSystemTag: false,
            isClick: false,
          },
        ],
        action: "...",
        icon: true,
        imageurl: require("../../assets/document.png"),
      },
      // {
      //   key: "2",
      //   name: "Green",
      //   age: 42,
      //   isFiled: "未归档",
      //   size: "18KB",
      //   seeTime: "2020-05-08",
      //   _id: "NBer",

      //   tags: [
      //     {
      //       key: "系统标签1",
      //       color: "orange",
      //       isSystemTag: true,
      //     },
      //     {
      //       key: "系统标签2",
      //       color: "orange",
      //       isSystemTag: true,
      //     },
      //     {
      //       key: "工程",
      //       color: "orange",
      //       isSystemTag: false,
      //       isClick: true,
      //     },
      //     {
      //       key: "项目",
      //       color: "orange",
      //       isSystemTag: false,
      //       isClick: false,
      //     },
      //   ],
      //   action: "...",
      //   icon: true,
      //   imageurl: require("../../assets/document.png"),
      // },
    ]);
   
// const data=listMenu.map(it)
console.log("data",data);
    const showModal = () => {
      visible.value = true;
    };
    let selectTag = {};
    let selectID = "";
    const showModal1 = (record) => {
      console.log(record);
      selectID = record._id;
      // 这是系统标签
      state.systemTags = record.tags
        .filter((v) => v.isSystemTag)
        .map((item, index) => {
          return {
            key: index,
            name: item.key,
            isClick: item.isClick,
            isSystemTag: item.isSystemTag,
          };
        });
      // 自定义标签
      state.tags = record.tags
        .filter((v) => !v.isSystemTag)
        .map((item, index) => {
          return {
            key: index,
            name: item.key,
            isClick: item.isClick,
            isSystemTag: item.isSystemTag,
          };
        });
      // if(item.isSystemTag) {
      //   return true
      // } else {
      //   return false
      // }
      // 自定义标签
      // 清空状态
      // state.tags = [
      //   { key: 1, name: "机密", isClick: false },
      //   { key: 2, name: "个人", isClick: false },
      //   { key: 3, name: "工作", isClick: false },
      //   { key: 4, name: "加油", isClick: false },
      // ];
      // if(selectTag&&selectTag.tags){
      //   state.tags=selectTag.tags.map((item,index)=>{
      //     return{
      //       key:index,
      //       name:item.key,
      //       isClick:true
      //     }
      //   })
      // }
      selectTag = record;
      console.log(selectTag);
      visible1.value = true;
    };
    const showModal2 = () => {
      calldps("p111").then((res) => {
        console.log(res);
        state.appli = res;
        console.log(state.appli);
      });
      visible2.value = true;
    };
    const handleOk = (e) => {
      console.log(1, e);
      visible.value = false;
    };
    const handleOk1 = (e) => {
      console.log(3333, e);
      console.log(2, selectTag);
      let all = state.tags.concat(state.systemTags);
      console.log("all", all);

      console.log(223, data.value);

      data.value = data.value.map((item) => {
        if (item._id === selectID) {
          item.tags = all.map((item) => {
            return {
              key: item.name,
              color: "orange",
              isSystemTag: item.isSystemTag,
              isClick: item.isClick,
            };
          });
        }
        return item;
      });
      // selectTag = all.map((item) => {
      //   return {
      //     key: item.name,
      //     color: "orange",
      //     isSystemTag: item.isSystemTag,
      //     isClick: item.isClick,
      //   };
      // });
      console.log("selectTag", selectTag);

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
      showModal,
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
      creatTag,
      handleClose,
      showInput,
      handleInputConfirm,
      handleTagClick,
      inputRef,
      handleTagClick1,
      changeView,
      del,
      // listMenu,
     
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
.applications {
  padding: 10px 5px;
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
</style>