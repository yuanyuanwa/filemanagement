import axios from 'axios'
import qs from 'qs'
// import Vue from 'vue'

import { BASE_URL, DPS_DIR } from './config'

axios.defaults.withCredentials = true

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})

export default function calldps(dpsname, params = {}) {
  const urlParams = qs.stringify({
    op: 'dps',
    cmd: 'dps_execute_j',
    __charset__: "utf-8",
    dps:  dpsname,
    __parameters__: JSON.stringify({
      0: '',
      1: params,
    }),
  })
  return instance.post('', urlParams).then(res => res.data)
}

// Vue.prototype.$calldps=calldps


