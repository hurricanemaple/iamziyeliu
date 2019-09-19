import axios from '@/utils/axios'

/**
 * 获取视频列表
 */
export const getVideosList = params => {
  return axios.request({
    url: 'videos/list',
    method: 'get',
    params
  })
}
