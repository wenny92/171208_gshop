import axios from 'axios'

/**
 *ajax 请求函数模块
 * 返回值：是一个promise对象（异步返回的数据是：response.data）
 * @export
 * @param {*} url 请求地址
 * @param {*} [data={}] 请求参数 给默认值空对象
 * @param {string} [type='GET'] 请求方式 给默认值GET
 * @returns promise对象
 */
export default function ajax (url, data = {}, type = 'GET') {
  // 多加一层promise，来简化外部调用，直接得到data里边的数据
  return new Promise(function (resolve, reject) {
    // 执行异步ajax请求
    let promise
    if (type === 'GET') {
      // 准备 url query 参数数据
      let dataStr = '' // 数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送 get 请求
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }
    promise
      .then(function (response) {
        // 成功的回调函数
        // 成功了调用resolve（）
        resolve(response.data)
      })
      .catch(function (error) {
        // 失败了调用reject（）
        reject(error)
      })
  })
}
