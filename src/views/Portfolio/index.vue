<template>
  <div class="app-container">
    <flexbox :gutter="0" wrap="wrap">
      <flexbox-item :span="1/3" v-for="(item, index) of listData" :key="index" class="cbox vux-1px-r vux-tap-active">
        <div class="vux-1px-b cbox-inner" @click="handleClick(item.pdf_uri)">
          <div><img src="../../assets/imgs/pdf.png"></div>
          <span class="ellipsis">{{item.title}}</span>
        </div>
      </flexbox-item>
    </flexbox>
    <div v-if="showLoading" style="text-align: center;margin-top: 40px;">
      <inline-loading></inline-loading>
    </div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, InlineLoading } from 'vux'
import { getPortfolioList } from '@/api/portfolio'
import { imgBaseUrl } from '@/utils/config'

export default {
  name: 'Portfolio',
  components: { Flexbox, FlexboxItem, InlineLoading },
  data () {
    return {
      showLoading: true,
      listData: []
    }
  },
  created () {
    this.getPortfolioList()
  },
  methods: {
    handleClick (uri) {
      window.location.href = imgBaseUrl + uri
    },
    getPortfolioList () {
      this.showLoading = true
      getPortfolioList().then(res => {
        this.showLoading = false
        this.listData = res.data
      }).catch(res => {
        this.showLoading = false
      })
    }
  }
}
</script>

<style lang="less" scoped>
.cbox {
  text-align: center;
}
.cbox-inner {
  box-sizing: border-box;
  padding: 15px;
  width: 100%;
  height: 100%;
}
</style>
