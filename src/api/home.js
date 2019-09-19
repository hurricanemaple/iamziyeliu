import axios from '@/utils/axios'

/**
 * 获取时间线数据
 */
export const getTimelineData = params => {
  return axios.request({
    url: 'home/timeline',
    method: 'get',
    params
  })
}
