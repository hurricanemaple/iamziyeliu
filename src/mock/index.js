import Mock from 'mockjs'
// import { getTimelineData } from './home'
import { getPortfolioList } from './portfolio'
import { getWordsList, getWordsData } from './works'
import { getVideosList } from './videos'

// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
  timeout: '350-600'
})

// Ajax请求拦截
// Mock.mock(/home\/timeline/, getTimelineData)
Mock.mock(/portfolio\/list/, getPortfolioList)
Mock.mock(/words\/list/, getWordsList)
Mock.mock(/words\/data/, getWordsData)
Mock.mock(/videos\/list/, getVideosList)

export default Mock
