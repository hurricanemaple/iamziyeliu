import Mock from 'mockjs'

export const getTimelineData = params => {
  console.log(params)
  return Mock.mock({
    error_code: 0,
    message: 'success',
    'data|5-20': [{
      'id|+1': 1,
      content: '@ctitle',
      date: '@date'
    }]
  })
}
