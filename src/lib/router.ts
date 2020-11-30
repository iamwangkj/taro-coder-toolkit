import Taro from '@tarojs/taro'

function getParam (data = {}) {
  return Object.keys(data).length === 0 ? '' : `?${Object.keys(data).map(key => `${key}=${JSON.stringify(data[key])}`).join('&')}`
}

function to (url = '', data?:object) {
  Taro.navigateTo({
    url: `${url}${getParam(data)}`
  })
}

export default {
  to
}
