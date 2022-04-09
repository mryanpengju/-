import {
  getToken
} from '../utils/util'
//实例化HTTP
const Http = require('./http.js')
const http = Http()
//拦截请求前
http.interceptors.request.use((config) => {
  config.headers["X-Tag"] = "zgw_request"
  config.timeout = 30000
  config.parseJson = true
  let data = getToken();
  config.headers.Token = data.Token;
  config.headers.Time = data.Time;
  config.headers.From = data.From;
  config.headers.RequestNo = data.RequestNo;
  return config
})
//响应请求后
http.interceptors.response.use(
  (response) => {
    return response.data
  },
  (err) => {
    wx.showToast({
      title: '请求失败',
      icon: "none"
    })
    console.log(err)
  }
)
//导出 Get
export const Get = (url, parame) => {
  return http.get(url, parame)
}
//导出 Post 
export const Post = (url, parame) => {
  return http.post(url, parame)
}