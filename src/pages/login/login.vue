<template>
  <view class="page-login">
    <image
      class="logo"
      src="../../imgs/logo.jpg"
      mode="aspectFit"
      lazy-load="false"
      binderror=""
      bindload=""
    />
    <view class="line"></view>
    <view class="desc black">申请获取以下权限</view>
    <view class="desc">获得你的公开信息（昵称，头像等）</view>
    <button class="btn-login" type="primary" @tap="getUserInfo">
      授权登录
    </button>
  </view>
</template>

<script>
import openApi from '../../lib/openApi'
import Taro from '@tarojs/taro'

export default {
  name: 'page-login',
  data () {
    return {}
  },
  // computed: {},
  methods: {
    getUserInfo () {
      openApi.getUserInfo().then((res) => {
        console.log('login获取用户信息=', res)
      })
    }
  }
}
</script>

<style lang="scss">
.page-login {
  width: 670px;
  margin: 0 auto;
  padding-top: 150px;
  .logo {
    display: block;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 0 auto;
  }
  .line {
    width: 100%;
    height: 1px;
    background-color: #cccccc;
    margin: 70px auto;
  }
  .desc {
    margin-bottom: 28px;
    color: #a3a5a3;
    &.black {
      color: black;
    }
  }
  /*按钮*/
  .btn-login {
    // width: 80%;
  }
}
</style>
