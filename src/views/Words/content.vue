<template>
  <div class="app-container">
    <h2 class="title">{{articleData.title}}</h2>
    <div class="content" v-html="articleData.content"></div>
  </div>
</template>

<script>
import { getWordsData } from '@/api/words'

export default {
  name: 'Content',
  data () {
    return {
      articleData: {}
    }
  },
  created () {
    this.getWordsData()
  },
  methods: {
    getWordsData () {
      getWordsData(this.$route.params.id).then(res => {
        this.articleData = res.data.data
      })
    }
  }
}
</script>

<style scoped lang="less">
  .app-container {
    padding: 10px;
  }
  .title {
    margin-bottom: 20px;
  }
</style>
