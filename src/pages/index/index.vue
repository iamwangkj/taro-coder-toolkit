<template>
  <view class="page-index">
    <!-- 使用taro没有的标签，不解析出来 -->
    <view class="name">{{name}}</view>
    <button @tap="show">
      show1
    </button>
  </view>
</template>

<script>
import toast from '../../taroApi/toast'

export default {
  name: 'Index',
  components: {},
  data () {
    return {
    }
  },
  computed: {
    name () {
      const { name } = this.$store.state.userInfo
      return name
      // UPDATE_USER_INFO
    }
  },
  methods: {
    show () {
      toast.show('nihao')
      this.$store.commit('UPDATE_USER_INFO', { name: '123' })
      console.log('=', this.a)
    }
  }
}
</script>

<style lang="scss">
.page-index {
  .name {
    color: #d3d3d3;
  }
}
</style>
