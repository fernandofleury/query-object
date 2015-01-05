describe('query-object main spec', function() {

  describe('query-object methods verification', function() {

    it('should be defined', function() {
      expect(queryObject).toBeDefined();
    });

    it('should have a clear method', function() {
      expect(queryObject.clear).toBeDefined();
    });

    it('should have a get method', function() {
      expect(queryObject.get).toBeDefined();
    });
  });
});