<template>
  <div class="page-con">
    <div class="head">
      <div class="head-con">
        <div class="recently">最近访问</div>
        <div>
          <a-button type="primary" class="upload">上传</a-button>
          <a-button type="defalut">下载</a-button>
        </div>
      </div>

      <a-radio-group v-model:value="size" class="button">
        <a-radio-button value="large" @click="showModal">分享</a-radio-button>
        <a-modal
          v-model:visible="visible"
          title="分享文档"
          @ok="handleOk"
          ok-text="确认"
          cancel-text="取消"
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </a-modal>
        <a-radio-button value="large">收藏</a-radio-button>
        <a-radio-button value="large">下载</a-radio-button>
        <a-radio-button value="large">移动到</a-radio-button>
        <a-radio-button value="large" @click="showModal">删除</a-radio-button>
      </a-radio-group>
    </div>

    <div class="content">
      <!-- <router-link to="/bb"> -->
      <a-table
        :row-selection="{
          selectedRowKeys: selectedRowKeys,
          onChange: onSelectChange,
        }"
        :data-source="data"
        :columns="columns"
      >
        <template #name="scope">
          <div
            style="display: flex; justify-content: space-between"
            @click="detail()"
          >
            <div style="word-break: break-all; width: 300px">
              <FileOutlined />
              <span @click="handleClickScope(scope)">{{ scope.text }}</span>
              <a-tag
                v-for="tag in scope.record.tags"
                :key="tag"
                :color="tag.color"
              >
                {{ tag.key }}
              </a-tag>
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
            {{ record.address }}
          </span>
        </template>

        //状态
        <template #state="{ record }">
          <span>
            {{ record.age }}
          </span>
        </template>

        //浏览次数
        <template #see="{ record }">
          <span>
            <a>Invite 一 {{ record.age }}</a>
          </span>
        </template>

        //下载次数
        <template #download="{ record }">
          <span>
            <a>Invite 一 {{ record.age }}</a>
          </span>
        </template>

        //操作
        <template #actions>
          <!-- <span>
            {{ record.action }}
          </span> -->
          <a-dropdown>
            <a class="ant-dropdown-link" @click.prevent> ... </a>
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
                  <a rel="noopener noreferrer" @click="showModal1">
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
                    <div class="tag-con">
                      <div class="tag-con-left">
                        <a-checkbox-group v-model:value="value">
                          <div class="tag-container">所有标签</div>
                          <a-row>
                            <div class="tag-container">
                              <a-col :span="8">
                                <a-checkbox value="A">A</a-checkbox>
                              </a-col>
                            </div>
                            <div class="tag-container">
                              <a-col :span="8">
                                <a-checkbox value="B">B</a-checkbox>
                              </a-col>
                            </div>

                            <div class="tag-container">
                              <a-col :span="8">
                                <a-checkbox value="C">C</a-checkbox>
                              </a-col>
                            </div>
                            <div class="tag-container">
                              <a-col :span="8">
                                <a-checkbox value="D">D</a-checkbox>
                              </a-col>
                            </div>
                            <div class="tag-container">
                              <a-col :span="8">
                                <a-checkbox value="E">E</a-checkbox>
                              </a-col>
                            </div>
                            <div class="tag-container">
                              <a-col :span="8">
                                <a-checkbox value="F">F</a-checkbox>
                              </a-col>
                            </div>

                            <div class="tag-container">
                              <a-col :span="8">
                                <a-checkbox class="checkbox">
                                  <a-input
                                    v-model:value="value1"
                                    placeholder="自定义标签"
                                    class="ownTag"
                                /></a-checkbox>
                              </a-col>
                            </div>
                          </a-row>
                        </a-checkbox-group>
                      </div>
                      <div class="tag-con-left">
                        <div class="tag-container">已添加标签</div>
                        <div
                          class="tag-container"
                          v-for="(item, index) in list"
                          :key="index"
                        >
                          <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-biaoqian1"></use></svg
                          >{{ item.tag }}
                        </div>
                      </div>
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
                  <a rel="noopener noreferrer" @click="showModal1">
                    <a-modal
                      v-model:visible="visible"
                      title="分享文档"
                      @ok="handleOk"
                      ok-text="确认"
                      cancel-text="取消"
                    >
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                    </a-modal>
                    <i class="icon iconfont icon-yingyong"></i>
                    应用
                  </a>
                </a-menu-item>
                <a-menu-item key="7">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.taobao.com/"
                  >
                    <i class="icon iconfont icon-icon-quanju-baocuncundang"></i>
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
                <!-- <a-menu-divider /> -->
                <!-- <a-menu-item key="3" disabled>3rd menu item（disabled）</a-menu-item> -->
              </a-menu>
            </template>
          </a-dropdown>
        </template>
      </a-table>
      <!-- </router-link>     -->
    </div>
  </div>
</template>

<script>
import { FileOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref, computed, reactive, toRefs } from "vue";
// import { ColumnProps } from 'ant-design-vue/es/table/interface';

export default defineComponent({
  components: {
    FileOutlined,
  },
  setup() {
    //对话框是否展示，默认不展示
    const visible = ref(false);
    const visible1 = ref(false);

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
        address: "New York No. 1 Lake Park",
        tags: [
          {
            key: "机密",
            color: "red",
          },
          {
            key: "重要",
            color: "blue",
          },
        ],
        action: "...",
        icon: false,
        width: 400,
      },
      {
        key: "1",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: [
          {
            key: "机密",
            color: "red",
          },
          {
            key: "重要",
            color: "blue",
          },
        ],
        action: "...",
        icon: true,
      },
      {
        key: "2",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: [
          {
            key: "机密",
            color: "red",
          },
          {
            key: "重要",
            color: "blue",
          },
        ],
        action: "...",
      },
      {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: [
          {
            key: "机密",
            color: "red",
          },
          {
            key: "重要",
            color: "blue",
          },
        ],
        action: "...",
      },
      {
        key: "4",
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        tags: [
          {
            key: "机密",
            color: "red",
          },
          {
            key: "重要",
            color: "blue",
          },
        ],
        action: "...",
      },
    ]);
    const list = [
      { tag: "标签一" },
      {
        tag: "标签二",
      },
    ];

    const showModal = () => {
      visible.value = true;
    };
    const showModal1 = () => {
      visible1.value = true;
    };
    const handleClickScope = (scope) => {
      console.log(1111, scope);
    };
    const handleOk = (e) => {
      console.log(e);
      visible.value = false;
    };
    const handleOk1 = (e) => {
      console.log(e);
      visible1.value = false;
    };
    const handleStarChange = (key) => {
      console.log(2, key);

      data.value[key].icon = !data.value[key].icon;
    };
    const detail = () => {
      console.log(1111);
    };
    //定义变量
    const state = reactive({
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      value1: "",
    });

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
      showModal,
      showModal1,
      handleOk,
      handleOk1,
      data,
      columns,
      hasSelected,
      ...toRefs(state),
      handleClickScope,
      // func
      start,
      onSelectChange,
      handleStarChange,
      detail,
      value: ref([]),
      list,
    };
  },
});
</script>

<style scope>
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
</style>