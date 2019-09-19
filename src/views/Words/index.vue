<template>
  <div class="app-container">
    <div class="list">
      <div class="item vux-1px-b" v-for="(item, index) of list" :key="index" @click="checkWords(item)">
        <div class="cover" :style="item.cover_uri | bgImgFilter"></div>
        <div class="info">
          <div class="title lgfs">{{item.title}}</div>
          <div class="desc xsfs ctc">{{item.desc}}</div>
        </div>
      </div>
    </div>

    <div v-transfer-dom>
      <x-dialog v-model="showDialogStyle" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '50%', borderRadius: 0}">
        <div class="article" :style="{ height }">
          <h2 class="title" style="margin-bottom:20px;">{{articleData.title}}</h2>
          <div class="content" v-html="articleData.content"></div>
        </div>
        <p style="margin-top:20px;" @click="showDialogStyle = false">
          <x-icon type="ios-close-outline" style="fill:#000;"></x-icon>
        </p>
      </x-dialog>
    </div>

    <div v-if="showLoading" style="text-align: center;margin-top: 40px;">
      <inline-loading></inline-loading>
    </div>
  </div>
</template>

<script>
import { InlineLoading, XDialog, TransferDomDirective as TransferDom } from 'vux'
import { getWordsList } from '@/api/words'

export default {
  name: 'Words',
  directives: { TransferDom },
  components: { InlineLoading, XDialog },
  data () {
    return {
      height: 0,
      showLoading: true,
      showDialogStyle: false,
      list: [],
      articleData: {}
    }
  },
  created () {
    this.height = document.body.offsetHeight - 120 + 'px'
    this.getWordsList()
  },
  methods: {
    checkWords (item) {
      this.showDialogStyle = true
      this.articleData = item
    },
    getWordsList () {
      this.showLoading = true
      getWordsList().then(res => {
        this.showLoading = false
        this.list = res.data
      }).catch(res => {
        this.showLoading = false
      })
    }
  }
}
</script>

<style scoped>
  .item {
    display: flex;
    padding: 15px;
  }
  .cover {
    width: 60px;
    height: 60px;
    margin-right: 15px;
    background: no-repeat center center;
    -webkit-background-size: 100%;
    background-size: 100%;
  }
  .desc {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .article {
    padding:10px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
</style>
