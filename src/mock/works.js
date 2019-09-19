import Mock from 'mockjs'

export const getWordsList = params => {
  console.log(params)
  return Mock.mock({
    error_code: 0,
    message: 'success',
    'data|10-20': [{
      'id|+1': 1,
      src: 'https://dummyimage.com/60x60/000/ffffff?text=cover',
      title: '@ctitle',
      desc: '@cparagraph',
      url: '/words/' + '@id'
    }]
  })
}

export const getWordsData = params => {
  console.log(params)
  return Mock.mock({
    error_code: 0,
    message: 'success',
    data: {
      title: '@ctitle',
      'content|2-4': '<p>@cparagraph()</p><p>@cparagraph()</p><img src="https://dummyimage.com/400x300/000/ffffff?text=image" />'
    }
  })
}
