const parse = (str = '') => {
  str = str.replace(/^\?/, '')
  let result = {}

  if (!str) {
    return result
  }

  const arr = str.split('&')
  const length = arr.length

  for (let i = 0; i < length; i++) {
    let [ key, value ] = arr[i].replace(/%20|\+/g, ' ').split('=')

    result[decodeURIComponent(key)] = value ? decodeURIComponent(value) : null
  }

  return result
}

module.exports = parse
