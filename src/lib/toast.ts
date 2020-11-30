import Taro from '@tarojs/taro'

function show (str = '') {
  return Taro.showToast({
    title: str,
    icon: 'none',
    duration: 1500,
    mask: false
  })
}

function showLoading (str = '请稍等') {
  Taro.showLoading({
    title: str,
    mask: true
  })
}

function hideLoading () {
  Taro.hideLoading()
}

function showModal (opts) {
  return Taro.showModal({
    title: '提示',
    content: '这是一个模态弹窗',
    success (res) {
      if (res.confirm) {
        console.log('用户点击确定')
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
  })
}

export default {
  show,
  showLoading,
  hideLoading,
  showModal
}
