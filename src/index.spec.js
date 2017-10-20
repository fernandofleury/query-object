const queryObject = require('./index')

describe('queryObject', () => {
  describe('parse', () => {
    it('should be defined', () => {
      expect(queryObject.parse).toBeDefined()
    })
  })

  describe('stringify', () => {
    it('should be defined', () => {
      expect(queryObject.stringify).toBeDefined()
    })
  })
})
