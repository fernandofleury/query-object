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

    it('should have a set method', function() {
      expect(queryObject.set).toBeDefined();
    });

    it('should have a add method', function() {
      expect(queryObject.add).toBeDefined();
    });

    it('should have a remove method', function() {
      expect(queryObject.remove).toBeDefined();
    });

    it('should have a has method', function() {
      expect(queryObject.has).toBeDefined();
    });
  });
});
