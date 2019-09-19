import { imgBaseUrl } from '@/utils/config'

export function uriFilter (uri) {
  if (uri) {
    return /http/.test(uri) ? uri : imgBaseUrl + uri
  } else {
    return ''
  }
}

export function bgImgFilter (uri) {
  if (uri) {
    return /http/.test(uri) ? `background-image: url(${uri})` : `background-image: url(${imgBaseUrl + uri})`
  } else {
    return ''
  }
}

export function secondsFilter (result) {
  // result = parseInt(result)
  // const h = Math.floor(result / 3600) < 10 ? '0'+Math.floor(result / 3600) : Math.floor(result / 3600)
  // const m = Math.floor((result / 60 % 60)) < 10 ? '0'+Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60))
  // const m = Math.floor((result / 60 % 60))
  // const s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60))
  // result = m > 0 ? `${m}'${s}''` : `${s}''`
  return result
}

export function totalFilter (num) {
  num = parseInt(num)
  var roundNum
  if (num > 10000) {
    roundNum = (Math.floor(num / 1000) / 10).toFixed(1) + 'w'
  } else {
    roundNum = num
  }
  if (roundNum) {
    return roundNum
  } else {
    return 0
  }
}
