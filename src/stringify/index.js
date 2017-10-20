const stringify = (obj = {}) => {
  let result = ''

  for (let prop in obj) {
    result += encodeURIComponent(prop)
    if (obj.hasOwnProperty(prop) && obj[prop]) {
      result += '=' + encodeURIComponent(obj[prop])
    }
    result += '&'
  }

  return result.slice(0, -1)
}

module.exports = stringify
