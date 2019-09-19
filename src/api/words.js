import axios from '@/utils/axios'

/**
 * 获取文章列表
 */
export const getWordsList = params => {
  return axios.request({
    url: 'words/list',
    method: 'get',
    params
  })
}

/**
 * 获取文章内容
 */
export const getWordsData = id => {
  return axios.request({
    url: 'words/data/' + id,
    method: 'get'
  })
}
