const parse = require('./index')

describe('parse', () => {
  describe('empty string', () => {
    describe('with leading question mark (?)', () => {
      it('should remove the ? and return an empty object', () => {
        const data = '?'
        const expected = {}
        expect(parse(data)).toEqual(expected)
      })
    })

    it('should return an empty object', () => {
      const expected = {}
      expect(parse()).toEqual(expected)
    })
  })

  describe('filled string', () => {
    it('should return an object containing the proper keys', () => {
      const data = '?foo=foo&bar=bar'
      const expected = { foo: 'foo', bar: 'bar' }
      expect(parse(data)).toEqual(expected)
    })

    describe('string with empty key', () => {
      it('should return null for the empty key', () => {
        const data = '?foo=foo&bar'
        const expected = { foo: 'foo', bar: null }
        expect(parse(data)).toEqual(expected)
      })
    })
  })
})
