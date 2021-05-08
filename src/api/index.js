import calldps from './calldps'
// import store from '../store'
import {RMI_SERVLET_URL,REMOTE_SERVER} from './config'
import encrypt from './encrypt'
import axios from 'axios'

axios.defaults.withCredentials = true
export default {
  encode: (className, methodName, params) => {
    let paramStr = JSON.stringify(params)
    let encryptStr = encodeURIComponent(className) + "+" + encodeURIComponent(methodName) + "+" + encodeURIComponent(paramStr);
    let data = encrypt.encode(encryptStr);
    return data
  },
  decode: (param) => {
    return JSON.parse(encrypt.decode(param))
  },
  noop:()=>{
    axios.post('/mda/vision/noop.jsp')
  },
  login: function (params) {
    return axios({
      url: RMI_SERVLET_URL,
      method: 'post',
      data: this.encode('UserService', 'clickLogin', params),
    }).then(res => this.decode(res.data)).then(res => {
      return res
    })
  },
  logout: function () {
    return axios({
      url: RMI_SERVLET_URL,
      method: 'post',
      data: this.encode('UserService', 'logout', [])
    }).then(res => this.decode(res.data)).then(res=>{
      // if(res.result==true){
        // store.dispatch("updateLogin", false);
        // store.dispatch("updateUserInfo", {});
        // store.dispatch("addImag", []);
      // }
      return res
    })
  },
  getUserInfo: function () {
    return axios({
      url: RMI_SERVLET_URL,
      method: 'post',
      data: "className=UserService&methodName=getMyAccountInfo&params=[]"
    }).then(res => {
      // if (res.data.retCode == 0) {
      //   store.dispatch("updateLogin", true);
      //   store.dispatch("updateUserInfo", res.data.result);
      // }else{
      //   store.dispatch("updateLogin", false);
      //   store.dispatch("updateUserInfo", {});
      // }
      return res.data
    })
  },
  calldps(dpsname, params = {}){
    return calldps(dpsname, params)
  }
}
