import request from '../taroApi/request'

function search (keyword = '') {
  return request({
    url: `https://api.github.com/search/repositories?q=${keyword}`
  })
}

function getDetail (fullName = '') {
  return request({
    url: `https://api.github.com/repos/${fullName}`
  })
}

export default {
  search,
  getDetail
}
