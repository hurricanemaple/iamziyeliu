import Mock from 'mockjs'

export const getPortfolioList = params => {
  console.log(params)
  return Mock.mock({
    error_code: 0,
    message: 'success',
    'data|5-20': [{
      title: '@ctitle',
      pdf_uri: 'https://oss.rjfs.fun/image/2019-07-11/1562827026004.pdf'
    }]
  })
}
