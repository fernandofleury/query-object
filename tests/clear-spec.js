describe('query-object clear spec', function() {

  // fake context
  var _env = {
    location: {}
  };

  beforeEach(function() {
    _env.location.search = 'foo=bar';
    queryObject._setEnv(_env);
  });

  it('should clear the query string', function() {
    queryObject.clear();
    expect(queryObject.get()).toBe('');
  });
});