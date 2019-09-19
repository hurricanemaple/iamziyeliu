<template>
  <div class="app-container">
    <timeline>
      <timeline-item v-for="(item, index) of timelineData" :key="index">
        <p>{{item.content}}</p>
        <p class="xsfs ctc">{{item.date}}</p>
      </timeline-item>
    </timeline>
    <div v-if="showLoading" style="text-align: center;margin-top: 40px;">
      <inline-loading></inline-loading>
    </div>
  </div>
</template>

<script>
import { Timeline, TimelineItem, InlineLoading } from 'vux'
import { getTimelineData } from '@/api/home'

export default {
  name: 'Home',
  components: { Timeline, TimelineItem, InlineLoading },
  data () {
    return {
      showLoading: true,
      timelineData: []
    }
  },
  created () {
    this.getTimelineData()
  },
  methods: {
    getTimelineData () {
      this.showLoading = true
      getTimelineData().then(res => {
        this.showLoading = false
        this.timelineData = res.data
      }).catch(res => {
        this.showLoading = false
      })
    }
  }
}
</script>
