import axios from '@/utils/axios'

/**
 * 获取广告设计作品数据
 */
export const getPortfolioList = params => {
  return axios.request({
    url: 'portfolio/list',
    method: 'get',
    params
  })
}
