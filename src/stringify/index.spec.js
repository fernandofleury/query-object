const stringify = require('./index')

describe('stringify', () => {
  describe('empty object', () => {
    it('should return an empty string', () => {
      const expected = ''
      expect(stringify()).toEqual(expected)
    })
  })

  describe('object with keys', () => {
    it('should return a string with the keys', () => {
      const data = { foo: 'foo', bar: 'bar' }
      const expected = 'foo=foo&bar=bar'
      expect(stringify(data)).toEqual(expected)
    })

    describe('empty key', () => {
      it('should add only the key to the string', () => {
        const data = { foo: 'foo', bar: null }
        const expected = 'foo=foo&bar'
        expect(stringify(data)).toEqual(expected)
      })
    })
  })
})
