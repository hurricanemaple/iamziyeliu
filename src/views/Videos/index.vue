<template>
  <div class="app-container">
    <div class="list">
      <div class="item vux-1px-b" v-for="(item, index) of listData" :key="index" @click="showVideo(item.video_uri)">
        <div class="cover" :style="item.cover_uri | bgImgFilter"></div>
        <div class="title">{{item.title}}</div>
      </div>
    </div>

    <div v-transfer-dom>
      <x-dialog v-model="showDialogStyle" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}">
        <video ref="video" style="width: 100%;" :src="videoUri | uriFilter" controls></video>
        <p style="color:#fff;text-align:center;margin-top:20px;" @click="showDialogStyle = false">
          <x-icon type="ios-close-outline" style="fill:#fff;"></x-icon>
        </p>
      </x-dialog>
    </div>
  </div>
</template>

<script>
import { getVideosList } from '@/api/videos'
import { XDialog, TransferDomDirective as TransferDom } from 'vux'

export default {
  name: 'Videos',
  directives: { TransferDom },
  components: { XDialog },
  data () {
    return {
      showDialogStyle: false,
      listData: [],
      videoUri: ''
    }
  },
  watch: {
    showDialogStyle (value) {
      if (!value) {
        this.$refs['video'].pause()
      } else {
        this.$nextTick(() => {
          this.$refs['video'].play()
        })
      }
    }
  },
  created () {
    this.getVideosList()
  },
  methods: {
    showVideo (uri) {
      this.showDialogStyle = true
      this.videoUri = uri
    },
    getVideosList () {
      getVideosList().then(res => {
        this.listData = res.data
      })
    }
  }
}
</script>

<style scoped lang="less">
  .app-container {
    padding: 10px;
  }
  .item {
    padding-bottom: 10px;
    margin-bottom: 10px;
  }
  .cover {
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 75%;
    background: no-repeat center center;
    background-size: 100%;
  }
  .title {
    margin: 10px 0 ;
  }
</style>
