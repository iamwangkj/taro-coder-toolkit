import Taro from '@tarojs/taro'
import toast from './toast'

const BASE_URL = ''

function request (opt) {
  opt.url = /http/ig.test(opt.url) ? opt.url : `${BASE_URL}/${opt.url}`
  return new Promise((resolve, reject) => {
    toast.showLoading()
    Taro.request(Object.assign({
      method: 'GET',
      url: '',
      data: null,
      header: {
        'Content-Type': 'application/json'
      },
      // timeout: 5000,
      success (res) {
        resolve(res.data)
      },
      fail (err) {
        toast.show(err)
        reject(err)
      },
      complete () {
        toast.hideLoading()
      }
    }, opt))
  })
}

export default request
