import Mock from 'mockjs'

export const getVideosList = params => {
  console.log(params)
  return Mock.mock({
    error_code: 0,
    message: 'success',
    'data|5-20': [{
      'id|+1': 1,
      title: '@ctitle(5, 20)',
      cover_uri: 'https://dummyimage.com/400x300/000/ffffff?text=cover',
      video_uri: 'https://oss.rjfs.fun/video%2Fjobs%2Fvideo%2F2019-01-23%2F060d1548230337Si8Bp.mp4'
    }]
  })
}
