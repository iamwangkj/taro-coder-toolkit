import Taro from '@tarojs/taro'
import router from './router'
import toast from './toast'

function getUserInfo () {
  return Taro.getUserInfo({
    lang: 'zh_CN'
  }).then((res) => {
    console.log('获取用户信息ok=', res)
  }).catch((err) => {
    if (err.err_code === -12006) {
      console.error('授权获取用户信息fail', err)
      authorize('scope.userInfo').then((authRes) => {
        console.log('authRes=', authRes)
        // if (!authRes.authSetting['scope.userInfo']) {}
      })
    }
  })
}

function authorize (scope = '') {
  return Taro.authorize({
    scope
  }).catch((err) => {
    console.log('授权fail=', err)
    // modal去引导点击是无效的，需要自己写用户点击去触发
    // router.to('/pages/index/index')
  })
}

function openSetting () {
  return Taro.openSetting()
}

export default {
  getUserInfo,
  openSetting
}
