<template>
  <div style="height:100%;">

    <drawer
      width="200px;"
      show-mode="overlay"
      placement="left"
      :show.sync="drawerVisibility"
      :drawer-style="{'background-color':'#35495e', width: '200px'}"
    >
      <x-header
        style="width:100%;position:absolute;left:0;top:0;z-index:100;"
        :right-options="{showMore: false}"
        @on-click-more="showMenus = true"
      >
        <span>{{headerTitle}}</span>
        <span v-if="showMenuIcon" slot="overwrite-left" @click="drawerVisibility = true">
          <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
        </span>
      </x-header>
      <div slot="drawer">
        <group title="刘子叶" style="margin-top:20px;">
          <cell title="主页" link="/home" @click.native="drawerVisibility = false"></cell>
          <cell title="广告设计作品" link="/portfolio" @click.native="drawerVisibility = false"></cell>
          <cell title="我的文章" link="/words" @click.native="drawerVisibility = false"></cell>
          <cell title="我的视频" link="/videos" @click.native="drawerVisibility = false"></cell>
          <cell title="我的简历" link="/about" @click.native="drawerVisibility = false"></cell>
        </group>
      </div>
      <view-box body-padding-top="46px" body-padding-bottom="0">
        <keep-alive :include="cachedList">
        <router-view></router-view>
        </keep-alive>
      </view-box>
    </drawer>

    <div v-transfer-dom>
      <actionsheet :menus="menus" v-model="showMenus" @on-click-menu="onClickMenu"></actionsheet>
    </div>

  </div>
</template>

<script>
import { XHeader, Drawer, Actionsheet, TransferDom, Group, Cell, ViewBox } from 'vux'

export default {
  name: 'Layout',
  directives: { TransferDom },
  components: { XHeader, Drawer, Actionsheet, Group, Cell, ViewBox },
  data () {
    return {
      cachedList: ['Home', 'Portfolio', 'About'],
      menus: {
        zh: '中文',
        en: 'EngLish'
      },
      drawerVisibility: false,
      showMenuIcon: true,
      showMenus: false
    }
  },
  computed: {
    headerTitle () {
      switch (this.$route.name) {
        case 'Home':
          return '主页'
        case 'Portfolio':
          return '广告设计作品'
        case 'Words':
          return '我的文章'
        case 'Videos':
          return '我的视频'
        case 'About':
          return '我的简历'
        case 'Content':
          return '文章详情'
        default:
          return ''
      }
    }
  },
  watch: {
    '$route.name' (value) {
      if (value === 'Content') {
        this.showMenuIcon = false
      } else {
        this.showMenuIcon = true
      }
    }
  },
  created () {
    if (this.$route.name === 'Content') {
      this.showMenuIcon = false
    }
  },
  methods: {
    onClickMenu (key) {
      console.log(key)
    }
  }
}
</script>
