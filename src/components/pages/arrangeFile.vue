<template>
  <div>
    <a-layout>
      <a-layout-header>
        <a-layout-header class="header2">
          <div class="left-con">
            <div class="title">文件管理系统</div>
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
      </a-layout-header>
      <a-layout-content class="content">
        <div class="form">
          <a-form :model="State">
            <div class="input-con">
              <div class="form-item">
                <span>项目基础</span>
                <div>
                  <a-input
                    v-model:value="State.name"
                    placeholder="请输入项目名称"
                    class="item-input"
                  />
                </div>
              </div>
              <div class="form-item">
                <div>计量基础</div>
                <div>
                  <a-input v-model:value="State.region" class="inputsize" />
                </div>
              </div>
              <div class="form-item">
                <div>单位</div>
                <div>
                  <a-input
                    v-model:value="State.date1"
                    placeholder="m2"
                    class="inputsize"
                  />
                </div>
              </div>
            </div>
            <a-form-item label="项目年份">
              <div>
                <a-radio-group v-model:value="value1" button-style="solid">
                  <a-radio-button
                    class="single"
                    v-for="(item,i) in State.year"
                    :key="i"
                    :value="item.value"
                    >{{item.name}}</a-radio-button
                  >
                </a-radio-group>
              </div>
            </a-form-item>
            <a-form-item label="项目月份">
              <div>
                <a-radio-group v-model:value="value2" button-style="solid">
                  <a-radio-button
                    :value="item.value"
                    class="single1"
                    v-for="(item,i) in State.month"
                    :key="i"
                    >{{item.name}}</a-radio-button
                  >
                </a-radio-group>
              </div>
            </a-form-item>
            <a-form-item label="专业类别">
              <a-radio-group v-model:value="State.resource">
                <a-radio value="1">Sponsor</a-radio>
                <a-radio value="2">Venue</a-radio>
              </a-radio-group>
            </a-form-item>
            <a-form-item label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;省份">
              <a-radio-group v-model:value="State.resource">
                <a-radio value="1">Sponsor</a-radio>
                <a-radio value="2">Venue</a-radio>
              </a-radio-group>
            </a-form-item>
            <a-form-item label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;城市">
              <a-radio-group v-model:value="State.resource">
                <a-radio value="1">Sponsor</a-radio>
                <a-radio value="2">Venue</a-radio>
              </a-radio-group>
            </a-form-item>
            <a-form-item label="数据脱敏">
              <a-input v-model:value="State.desc" type="textarea" />
            </a-form-item>
            <a-form-item label="上传文件">
              <a-input v-model:value="State.desc" type="textarea" />
            </a-form-item>

            <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
              <a-button type="primary" @click="onSubmit">Create</a-button>
              <a-button style="margin-left: 10px">Cancel</a-button>
            </a-form-item>
          </a-form>
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import { SearchOutlined, DownOutlined } from "@ant-design/icons-vue";
import { Moment } from "moment";
import { defineComponent, ref, reactive, toRaw, UnwrapRef } from "vue";
export default defineComponent({
  components: {
    SearchOutlined,
    DownOutlined,
  },
  setup() {
    const State = reactive({
      name: "",
      region: undefined,
      date1: undefined,
      delivery: false,
      type: [],
      resource: "",
      desc: "",
      year: [
        {
          value: 2021,
          name: 2021,
        },
        {
          value: 2020,
          name: 2020,
        },
        {
          value: 2019,
          name: 2019,
        },
        {
          value: 2018,
          name: 2018,
        },
        {
          value: 2017,
          name: 2017,
        },
        {
          value: 2016,
          name: 2016,
        },
        {
          value: 2015,
          name: 2015,
        },
        {
          value: 2014,
          name: 2014,
        },
        {
          value: 2013,
          name: 2013,
        },
        {
          value: 2012,
          name: 2012,
        },
        {
          value: 2011,
          name: 2011,
        },
        {
          value: 2010,
          name: 2010,
        },
      ],

      month:[
{
  value:1,
  name:1
},
{
  value:2,
  name:2
},
{
  value:3,
  name:3
},
{
  value:4,
  name:4
},
{
  value:5,
  name:5
},
{
  value:6,
  name:6
},
{
  value:7,
  name:7
},
{
  value:8,
  name:8
},
{
  value:9,
  name:9
},
{
  value:10,
  name:10
},
{
  value:11,
  name:11
},
{
  value:12,
  name:12
},
      ]
    });
    const value1 = ref("2021");
    const value2 = ref("1");
    const onSubmit = () => {
      console.log("submit!", toRaw(State));
    };

    return {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 14,
      },
      State,
      onSubmit,
      userName: ref(""),
      displayPicture: require("../../assets/cat.jpg"),
      value1,
      value2
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
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 89vh; */
}
.form {
  margin-top: 20px;
  width: 900px;
  background-color: white;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.05);
  padding: 20px;
}
.input-con {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
}
.form-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.inputsize {
  width: 150px;
  margin-left: 10px;
  border-radius: 5px;
}
.item-input {
  width: 300px;
  margin-left: 10px;
  border-radius: 5px;
}
/deep/.ant-form-item-label > label::after {
  content: "";
}
.single {
  margin-right:20px ;
  border: none;
  width: 40px;
}
.single1 {
  margin-right:20px ;
  border: none;
  width: 40px;
}
/* 按钮选中时的样式 */
/deep/
  .ant-radio-group-solid
  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
  color: #60afe5;
  background: #f6f9fa;
  border: 1px solid #dce4ea;
  border-radius: 5px;
  z-index: 100px;
}
/deep/ .ant-radio-button-wrapper:not(:first-child)::before{
  background-color: white;
  display: inline;

  position: static;
}
/* /deep/ .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before {
    background-color: #1890ff;
} */

/* 改变单选按钮的样式 */
/deep/ .ant-radio-button-wrapper{
  height: 24px;
  line-height: 22px;
  padding: 0px 4px;
}
/deep/ .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within {
  box-shadow: none;
}
</style>