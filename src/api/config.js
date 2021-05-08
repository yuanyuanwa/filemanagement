

export const REMOTE_SERVER = "http://127.0.0.1:5465"
// export const REMOTE_SERVER = "http://128.128.0.171:5466"

// dps 路径
// export const BASE_URL = REMOTE_SERVER +'/mda/madata/view/mxp'
export const BASE_URL = '/mda/madata/view/mxp'
// dps 目录
// export const DPS_DIR = 'xunjian/xun_shi_cheng_guo_guan_li/que_xian_shai_xun/'


// 远程接口地址
// export const RMI_SERVLET_URL = REMOTE_SERVER + '/mda/vision/RMIServlet'
export const RMI_SERVLET_URL = '/mda/vision/RMIServlet'

export const  chineseEncode =(params)=> {
    function isChinese(v) {
      var re = new RegExp("[\\u4E00-\\u9FFF]+", "g");
      if (re.test(v)) {
        return true;
      }
      return false;
    }

    var keys = Object.keys(params)
    //升级mda11后，dps不能接收中文参数，因此前端转码
    var encodeParams = {}
    keys.forEach(function (key) {
      console.log(params[key], isChinese(params[key]))
      encodeParams[key] = isChinese(params[key]) ? encodeURIComponent(params[key]) : params[key]
    })

    return   encodeParams 
  }
