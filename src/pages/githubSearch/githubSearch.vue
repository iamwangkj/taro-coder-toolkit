<template>
  <view class="github-search">
    <AtSearchBar :value="keyword" :onActionClick="searchOnGithub"></AtSearchBar>
    <!-- 搜索结果 -->
    <AtFloatLayout :isOpened="showSearchRes">
      <view class="search-list">
        <view
          class="list-item"
          v-for="(item, index) in searchRes"
          :key="index"
          ref="listItem"
          @tap="addKeyword(item, index)"
          >{{ item.full_name }}</view
        >
      </view>
    </AtFloatLayout>
  </view>
</template>

<script>
import api from '../../api/index'
import router from '../../taroApi/router'
import toast from '../../taroApi/toast'

export default {
  name: 'GithubSearch',
  components: {},
  data () {
    return {
      keyword: 'js',
      searchRes: [],
      showSearchRes: false,
      keywordList: []
    }
  },

  methods: {
    searchOnGithub () {
      const str = this.keyword
      api.github.search(str).then((res) => {
        console.log('搜索结果=', res.items)
        this.searchRes = res.items
        this.showSearchRes = true
      })
    },

    addKeyword (item, index) {
      const fullName = item.full_name
      const has = this.keywordList.some((item) => {
        return item.name === fullName
      })
      if (!has) {
        const oldList = this.keywordList
        oldList.unshift({
          name: fullName,
          checked: true
        })
        this.keywordList = oldList
      }
      this.showSearchRes = false
      this.keyword = ''
    },

    delKeyword (delItem) {
      const res = this.keywordList.filter((item) => {
        return item.name !== delItem.name
      })
      this.keywordList = res
    },

    toCompare () {
      const compareList = this.keywordList.map((item) => {
        return item.name
      })
      console.log('compareList=', compareList)
      if (compareList.length > 0) {
        router.to('/pages/githubCompare/githubCompare', { compareList })
      } else {
        toast.show('请先搜索，添加对比项')
      }
    }
  }
}
</script>

<style>
.search-list {
  font-size: 24px;
}
</style>
