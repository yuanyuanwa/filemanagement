<template>
    <div class="home" style="height:100vh">
      <div class="left-con">
        <div class="title">{{ msg }}</div>
        <img :src="file" alt=""  class="img"/>
      </div>
      <div>
        <div class="from-con">
          <div class='title-con'>
          <span>账号密码登录</span>
        <a>手机验证码快速登录></a>
          </div> 
        <a-form
          name="custom-validation"
          ref="formRef"
          :model="formState"
          :rules="rules"
          v-bind="layout"
          @finish="handleFinish"
          @finishFailed="handleFinishFailed"
        >
        <a-form-item has-feedback  name="name">
            <a-input
              v-model:value="formState.name"
              type="text"
              autocomplete="off"
              placeholder="请输入用户名/手机号"
              style="border-top:none;
              border-left:none;
              border-right:none;
              outline: none;
              width:295px;
              padding-bottom:10px;
              "
            />
          </a-form-item>
          <a-form-item  has-feedback  name="pass">
            <a-input
              v-model:value="formState.pass"
              type="password"
              autocomplete="off"
              placeholder="请输入密码"
              style="border-top:none;
              border-left:none;
              border-right:none;
              outline: none;
              width:295px;
              padding-bottom:10px;"
            />
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit" class="login-btn">登陆</a-button>
          </a-form-item>
          <div class="forget-pass">
            <a href="">忘记密码?</a>
          </div>
        </a-form>
        </div>       
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { reactive, toRefs, ref } from "vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
  setup() {
    const state = reactive({
      msg: "文档管理系统",
      file: require("../assets/u1.png"),
    });
    const formRef = ref();
    const formState = reactive({
      pass: "",
      name: "",
    });
    let validatePass = async (rule, value) => {
      if (value === "") {
        return Promise.reject("请输入密码");
      } else {
        if (formState.name !== "") {
          formRef.value.validateField("checkPass");
        }
        return Promise.resolve();
      }
    };
    let validatePass2 = async (rule, value) => {
      if (value === "") {
        return Promise.reject("用户名/手机号不能为空");
      } 
      // else if (value !== formState.pass) {
      //   return Promise.reject("Two inputs don't match!");
      // }
       else {
        return Promise.resolve();
      }
    };

    const rules = {
      pass: [{ validator: validatePass, trigger: "change" }],
      name: [{ validator: validatePass2, trigger: "change" }],
    };
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    };
    const handleFinish = (values) => {
      console.log(values, formState);
      console.log(1);
      axios({
        url: 'https://baidu.com',
        method: "get",
      })
        .then((response) => {
          console.log(response);
          // //response.data.message不为空就是true
          // if (Number(response.data.code) === 200 && response.data.message) {
          //   this.category = response.data.message;
          //   console.log(1, this.category);
          //   this.getCategorySubByCategoryID(this.category[0].ID);
          // } else {
          //   Toast("服务器错误，数据获取失败");
          // }
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const handleFinishFailed = (errors) => {
      console.log(errors);
      console.log(2);
    };
    const resetForm = () => {
      formRef.value.resetFields();
      console.log(3);
    };

    return {
      ...toRefs(state),
      formState,
      formRef,
      rules,
      layout,
      handleFinishFailed,
      handleFinish,
      resetForm,
    };
  },
};
</script>
<style scoped>
.left-con{
  margin-right: 150px; 
}

.home{
  display: flex;
  justify-content: center;
  align-items: center;
  height:'100vh'
}
.title {
  font-family: "微软雅黑 Bold", "微软雅黑 Regular", "微软雅黑";
  font-weight: 700;
  font-size: 28px;
  color: #464c5b;
  margin-right: 270px;
}

.from-con{
  height: 310px;
  width: 340px;
  /* background-color: palegreen; */
}
.title-con{
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
}
.title-con span{
  font-size: 18px;
}

/deep/ .ant-input:focus {
	border-color: none;
  box-shadow:none;
}
.login-btn{
  width: 290px;
  height: 48px;
  border-radius: 20px;
  font-weight: 700;
    font-style: normal;
    font-size: 16px;
 
}
.forget-pass a{
 color: #8E8E8E;
}
.forget-pass {
 display: flex;
}

</style>
