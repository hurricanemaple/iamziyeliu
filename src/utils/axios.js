import axios from 'axios'
import { baseUrl } from './config'

axios.defaults.baseURL = baseUrl

// 添加请求拦截器
axios.interceptors.request.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

export default axios
