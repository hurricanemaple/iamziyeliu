/**
 * @param {Number} result
 * @formatSeconds 秒转换为 00:00 格式
 */
export const formatSeconds = (result) => {
  result = parseInt(result)
  // const h = Math.floor(result / 3600) < 10 ? '0'+Math.floor(result / 3600) : Math.floor(result / 3600)
  const m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60))
  // const m = Math.floor((result / 60 % 60))
  const s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60))
  result = m + ':' + s
  return result
}
