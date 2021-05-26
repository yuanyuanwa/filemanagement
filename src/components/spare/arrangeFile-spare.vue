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
                    v-for="(item, i) in State.year"
                    :key="i"
                    :value="item.value"
                    >{{ item.name }}</a-radio-button
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
                    v-for="(item, i) in State.month"
                    :key="i"
                    >{{ item.name }}</a-radio-button
                  >
                </a-radio-group>
              </div>
            </a-form-item>
            <a-form-item label="专业类别">
              <div
                style="display: flex; align-items: center"
                v-if="State.categoryhidden"
              >
                <div class="category-con">
                  <a-radio-group v-model:value="value3" button-style="solid">
                    <a-radio-button
                      :value="item.value"
                      class="single2"
                      v-for="(item, i) in State.category"
                      :key="i"
                      >{{ item.name }}</a-radio-button
                    >
                  </a-radio-group>
                </div>
                <div @click="handleclose" style="cursor: pointer">
                  更多<i class="icon iconfont icon-arrow_down"></i>
                </div>
              </div>
              <div style="display: flex" v-else>
                <div class="category-con2">
                  <a-radio-group v-model:value="value3" button-style="solid">
                    <a-radio-button
                      :value="item.value"
                      class="single2"
                      v-for="(item, i) in State.category"
                      :key="i"
                      >{{ item.name }}</a-radio-button
                    >
                  </a-radio-group>
                </div>
                <div @click="handleclose" style="cursor: pointer">
                  收起<i class="icon iconfont icon-down"></i>
                </div>
              </div>
            </a-form-item>
            <a-form-item label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;省份">
              <div
                style="display: flex; align-items: center"
                v-if="State.provincehidden"
              >
                <div class="category-con">
                  <a-radio-group v-model:value="value4" button-style="solid">
                    <a-radio-button
                      :value="item.value"
                      class="single2"
                      v-for="(item, i) in State.province"
                      :key="i"
                      >{{ item.name }}</a-radio-button
                    >
                  </a-radio-group>
                </div>
                <div @click="handleclose2" style="cursor: pointer">
                  更多<i class="icon iconfont icon-arrow_down"></i>
                </div>
              </div>
              <div style="display: flex" v-else>
                <div class="category-con2">
                  <a-radio-group v-model:value="value4" button-style="solid">
                    <a-radio-button
                      :value="item.value"
                      class="single2"
                      v-for="(item, i) in State.city"
                      :key="i"
                      >{{ item.name }}</a-radio-button
                    >
                  </a-radio-group>
                </div>
                <div @click="handleclose2" style="cursor: pointer">
                  收起<i class="icon iconfont icon-down"></i>
                </div>
              </div>
            </a-form-item>
            <a-form-item label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;城市">
              <div
                style="display: flex; align-items: center"
                v-if="State.cityhidden"
              >
                <div class="category-con">
                  <a-radio-group v-model:value="value5" button-style="solid">
                    <a-radio-button
                      :value="item.value"
                      class="single2"
                      v-for="(item, i) in State.city"
                      :key="i"
                      >{{ item.name }}</a-radio-button
                    >
                  </a-radio-group>
                </div>
                <div @click="handleclose3" style="cursor: pointer">
                  更多<i class="icon iconfont icon-arrow_down"></i>
                </div>
              </div>
              <div style="display: flex" v-else>
                <div class="category-con3">
                  <a-radio-group v-model:value="value5" button-style="solid">
                    <a-radio-button
                      :value="item.value"
                      class="single2"
                      v-for="(item, i) in State.city"
                      :key="i"
                      >{{ item.name }}</a-radio-button
                    >
                  </a-radio-group>
                </div>
                <div @click="handleclose3" style="cursor: pointer">
                  收起<i class="icon iconfont icon-down"></i>
                </div>
              </div>
            </a-form-item>
            <a-form-item label="数据脱敏">
              <div style="display: flex">
                <div class="box lineleft">
                  <div>序号</div>
                  <div>新增</div>
                </div>
                <div class="box">
                  <div>原始数据</div>
                  <div>
                    <a-input
                      v-model:value="State.desc"
                      type="textarea"
                      placeholder="请输入原始数据"
                    />
                  </div>
                </div>
                <div class="box">
                  <div>&nbsp;</div>
                  <div><i class="icon iconfont icon-up"></i></div>
                </div>
                <div class="box">
                  <div>目标数据</div>
                  <div>
                    <a-input
                      v-model:value="State.desc"
                      type="textarea"
                      placeholder="请输入目标数据"
                    />
                  </div>
                </div>
                <div class="box lineright">
                  <div>新增</div>
                  <div>
                    <a-button type="primary" @click="onSubmit">保存</a-button>
                  </div>
                </div>
              </div>
            </a-form-item>
            <a-form-item label="上传文件">
              <div style="display: flex">
                <!-- <div >
                  <a-upload
                    v-model:file-list="fileList"
                    name="file"
                    :multiple="true"
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    :headers="headers"
                    @change="handleChange"
                  >
                    <div class="up-box1">
                      <div>
                        <img
                          src="../../assets/doc.png"
                          alt="图片"
                          style="
                            width: 45px;
                            height: 45px;
                            text-align: center;
                            margin-bottom:10px
                          "
                        />
                      </div>
                      <div class="uptitle">上传项目</div>
                      <div style="color:#dce4ea">格式：zip，rar，mzj</div>
                      <div style="color:#dce4ea">大小：小于10M</div>
                    </div>
                  </a-upload>
                </div> -->
                <div>
                  <a-upload
                   accept=".png,.jpeg,.jpg"
                    v-model:file-list="fileList"
                    name="file"
                    :multiple="true"
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    :headers="headers"
                    @change="handleChange"
                  >
                    <div class="up-box1">
                      <div>
                        <img
                          src="../../assets/pic.png"
                          alt="图片"
                          style="
                            width: 45px;
                            height: 45px;
                            text-align: center;
                            margin-bottom: 10px;
                          "
                        />
                      </div>
                      <div class="uptitle">上传封面</div>
                      <div style="color: #cfcfcf">格式：jpg，png，gif</div>
                      <div style="color: #cfcfcf">最佳尺寸：800*600px</div>
                    </div>
                  </a-upload>
                </div>
                <div>
                  <div class="up-box2">
                    <div>
                      <div class="img-box">
                        <img
                          src="../../assets/pic.png"
                          alt="图片"
                          style="width: 45px; height: 45px"
                        />
                        <img
                          src="../../assets/pic.png"
                          alt="图片"
                          style="width: 45px; height: 45px"
                        />
                        <img
                          src="../../assets/pic.png"
                          alt="图片"
                          style="width: 45px; height: 45px"
                        />
                        <img
                          src="../../assets/pic.png"
                          alt="图片"
                          style="width: 45px; height: 45px"
                        />
                        <img
                          src="../../assets/pic.png"
                          alt="图片"
                          style="width: 45px; height: 45px"
                        />
                        <img
                          src="../../assets/pic.png"
                          alt="图片"
                          style="width: 45px; height: 45px; margin-bottom: 10px"
                        />
                      </div>
                      <div style="color: #cfcfcf; cursor: pointer">
                        换一批
                        <i
                          class="icon iconfont icon-huanyihuan"
                          style="cursor: pointer"
                        ></i
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a-form-item>

            <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
              <a-button type="primary" @click="onSubmit">整理</a-button>
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 24, offset: 0 }">
              <a-button style="margin-left: 10px">造价树</a-button>
              <a-button style="margin-left: 10px">清单数据</a-button>
              <a-button style="margin-left: 10px">造价树</a-button>
              <a-button style="margin-left: 10px">清单数据</a-button>
              <a-button style="margin-left: 10px">造价树</a-button>
              <a-button style="margin-left: 10px">清单数据</a-button>
              <a-button style="margin-left: 10px">造价树</a-button>
              <a-button style="margin-left: 10px">清单数据</a-button>
            </a-form-item>
          </a-form>
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import {
  SearchOutlined,
  DownOutlined,
  UpOutlined,
  SwapRightOutlined,
} from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { Moment } from "moment";
import { defineComponent, ref, reactive, toRaw, UnwrapRef } from "vue";
export default defineComponent({
  components: {
    SearchOutlined,
    DownOutlined,
    UpOutlined,
    SwapRightOutlined,
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
      categoryhidden: true,
      provincehidden: true,
      cityhidden: true,
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

      month: [
        {
          value: 1,
          name: 1,
        },
        {
          value: 2,
          name: 2,
        },
        {
          value: 3,
          name: 3,
        },
        {
          value: 4,
          name: 4,
        },
        {
          value: 5,
          name: 5,
        },
        {
          value: 6,
          name: 6,
        },
        {
          value: 7,
          name: 7,
        },
        {
          value: 8,
          name: 8,
        },
        {
          value: 9,
          name: 9,
        },
        {
          value: 10,
          name: 10,
        },
        {
          value: 11,
          name: 11,
        },
        {
          value: 12,
          name: 12,
        },
      ],
      category: [
        {
          value: 1,
          name: "房建工程",
        },
        {
          value: 2,
          name: "市政工程",
        },
        {
          value: 3,
          name: "园林绿化工程",
        },
        {
          value: 4,
          name: "轨道交通工程",
        },
        {
          value: 5,
          name: "水利工程",
        },
        {
          value: 6,
          name: "工业建筑",
        },
        {
          value: 7,
          name: "公路工程",
        },
        {
          value: 8,
          name: "电力工程",
        },
        {
          value: 9,
          name: "水利工程",
        },
        {
          value: 10,
          name: "轨道交通工程",
        },
        {
          value: 11,
          name: "公路工程",
        },
        {
          value: 12,
          name: "电力工程",
        },
        {
          value: 13,
          name: "水利工程",
        },
        {
          value: 14,
          name: "工业建筑",
        },
        {
          value: 15,
          name: "轨道交通工程",
        },
        {
          value: 16,
          name: "电力工程",
        },
        {
          value: 17,
          name: "水利工程",
        },
        {
          value: 18,
          name: "工业建筑",
        },
        {
          value: 19,
          name: "公路工程",
        },
        {
          value: 20,
          name: "轨道交通工程",
        },
      ],
      province: [
        { value: 1, name: "广东" },
        { value: 2, name: "北京" },
        { value: 3, name: "天津" },
        { value: 4, name: "河北北" },
        { value: 5, name: "山西" },
        { value: 6, name: "内蒙古" },
        { value: 7, name: "广东" },
        { value: 8, name: "北京" },
        { value: 9, name: "天津" },
        { value: 10, name: "河北" },
        { value: 11, name: "山西" },
        { value: 12, name: "内蒙古" },
        { value: 13, name: "广东" },
        { value: 14, name: "北京" },
        { value: 15, name: "天津" },
        { value: 16, name: "河北北" },
        { value: 17, name: "山西" },
        { value: 18, name: "内蒙" },
        { value: 19, name: "广东" },
        { value: 20, name: "北京" },
        { value: 21, name: "天津" },
        { value: 22, name: "河北" },
        { value: 23, name: "山西" },
        { value: 24, name: "内蒙古" },
        { value: 25, name: "广东" },
        { value: 26, name: "北京" },
        { value: 27, name: "天津" },
        { value: 28, name: "河北" },
        { value: 29, name: "山西" },
        { value: 30, name: "内蒙古" },
      ],
      city: [
        { value: 1, name: "广州" },
        { value: 2, name: "深圳" },
        { value: 3, name: "珠海" },
        { value: 4, name: "汕头" },
        { value: 5, name: "佛山" },
        { value: 6, name: "韶关" },
        { value: 7, name: "湛江" },
        { value: 8, name: "肇庆" },
        { value: 9, name: "江门" },
        { value: 10, name: "茂名" },
        { value: 11, name: "惠州" },
        { value: 12, name: "梅州" },
        { value: 13, name: "江门" },
        { value: 14, name: "深圳" },
        { value: 15, name: "天津" },
        { value: 16, name: "河北北" },
        { value: 17, name: "山西" },
        { value: 18, name: "内蒙" },
        { value: 19, name: "汕头" },
        { value: 20, name: "北京" },
        { value: 21, name: "天津" },
        { value: 22, name: "河北" },
        { value: 23, name: "山西" },
        { value: 24, name: "汕头" },
        { value: 25, name: "广东" },
        { value: 26, name: "北京" },
        { value: 27, name: "汕头" },
        { value: 28, name: "河北" },
        { value: 29, name: "山西" },
        { value: 30, name: "内蒙古" },
      ],
    });
    const value1 = ref(2021);
    const value2 = ref(5);
    const value3 = ref(4);
    const value4 = ref(6);
    const value5 = ref(7);
    const handleclose = () => {
      State.categoryhidden = !State.categoryhidden;
      console.log(State.categoryhidden);
      console.log(111);
    };
    const handleclose2 = () => {
      State.provincehidden = !State.provincehidden;
    };
    const handleclose3 = () => {
      State.cityhidden = !State.cityhidden;
    };
    const onSubmit = () => {
      console.log("submit!", toRaw(State));
    };
    // const beforeUpload=(file) => {
    //   const isJpgOrPng = file.type === 'image/jpeg/jpg/png' || file.type === 'image/png/jpg/png';
    //   // if (!isJpgOrPng) {
    //   //   message.error('你只能上传图片!');
    //   // }
    //   const isLt2M = file.size / 1024 / 1024 < 2;
    //   if (!isLt2M) {
    //     message.error('Image must smaller than 2MB!');
    //   }
    //   return isJpgOrPng && isLt2M;
    // };
    //上传处理的每个阶段
    const handleChange = (info) => {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    };


    const fileList = ref([]);
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
      value2,
      value3,
      value4,
      value5,
      handleclose,
      fileList,
      headers: {
        authorization: "authorization-text",
      },
      handleChange,
      handleclose2,
      handleclose3,
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
  font-size: 14px;
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
  margin-left: 11px;
  border-radius: 5px;
  background-color: #f6f9fa;
}
.item-input {
  width: 300px;
  margin-left: 11px;
  border-radius: 5px;
  background-color: #f6f9fa;
}
/deep/.ant-form-item-label > label::after {
  content: "";
}
.single {
  margin-right: 20px;
  border: 1px solid transparent;
  width: 40px;
}
.single1 {
  margin-right: 20px;
  border: 1px solid transparent;
  width: 40px;
}
.single2 {
  margin-right: 18px;
  border: 1px solid transparent;
  margin-bottom: 20px;
  display: inline-block;
  /* padding: 0px 10px !important; */
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
/deep/ .ant-radio-button-wrapper:not(:first-child)::before {
  background-color: white;
  display: inline;

  position: static;
}
/* /deep/ .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before {
    background-color: #1890ff;
} */

/* 改变单选按钮的样式 */
/deep/ .ant-radio-button-wrapper {
  height: 24px;
  line-height: 22px;
  padding: 0px 4px;
}
/deep/
  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within {
  box-shadow: none;
}
.category-con {
  width: 728px;
  height: 25px;
  overflow: hidden;
  text-align: left;
}
.category-con2 {
  width: 728px;
  overflow: hidden;
  border-bottom: 1px solid #eff2f4;
  /* background-color: pink; */
  margin-top: 7px;
  text-align: left;
}
.category-con3 {
  width: 728px;
  overflow: hidden;
  /* border-bottom: 1px solid #eff2f4; */
  /* background-color: pink; */
  margin-top: 7px;
  text-align: left;
}
.box div {
  padding: 5px 27px 5px 15px;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
}
.lineleft div {
  border-left: 1px solid #f0f0f0;
}
.lineright div {
  border-right: 1px solid #f0f0f0;
}
.uptitle {
  font-size: 20px;
  padding-bottom: 26px;
  color: #999999;
}
.up-box1 {
  width: 342px;
  height: 200px;
  background-color: #f6f9fa;
  border: 2px dashed #dce4ea;
  padding: 17px;
  cursor: pointer;
  margin-right: 40px;
}
.up-box2 {
  width: 342px;
  height: 200px;;
  padding: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-box {
  display: flex;
  width: 135px;
  height: 90px;
  flex-wrap: wrap;
  margin-bottom: 28px;
}
</style>