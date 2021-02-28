import Axios from 'axios'

import { MessageBox } from 'element-ui';
import { Loading } from 'element-ui';

var instace = null

const request = Axios.create({
  baseURL: 'http://47.99.214.122:8000',
  timeout: 4000
})

request.interceptors.request.use(config => {
  instace = Loading.service({ fullscreen: false, lock: false, text: '玩命加载中' })
  return config
})

request.interceptors.response.use(config => {
  instace.close()
  if (config.data.err_d === 3) {
    MessageBox({
      message: '密码或用户名错误!!!'
    })
  }
  return config
})

export default request
