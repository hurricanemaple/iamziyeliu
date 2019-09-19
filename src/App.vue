<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
@import '~vux/src/styles/close.less';

html, body, #app {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  font-size: 14px;
  color: #303133;
}
.content {
  text-align: left;
}
.content img {
  max-width: 100%;
  height: auto;
}
.ellipsis {
  display: inline-block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.xxlfs {
  font-size: 20px;
}
.xlfs {
  font-size: 18px;
}
.lgfs {
  font-size: 16px;
}
.mfs {
  font-size: 14px;
}
.sfs {
  font-size: 13px;
}
.xsfs {
  font-size: 12px;
}
.atc {
  color: #303133;
}
.btc {
  color: #606266;
}
.ctc {
  color: #909399;
}
.dtc {
  color: #C0C4CC;
}
</style>
