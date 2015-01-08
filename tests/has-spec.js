describe('has() method', function() {

  // fake context
  var _env = {
    location: {}
  };

  beforeEach(function() {
    queryObject._setEnv(_env);
  });

  it('should return TRUE for an existing property', function() {
    _env.location.search = '?foo=foo&bar';
    expect(queryObject.has('foo')).toBe(true);
  });

  it('should return FALSE for a non existing property', function() {
    _env.location.search = '?bar=bar';
    expect(queryObject.has('foo')).toBe(false);
  });

  it('should return undefined if no argument is provided', function() {
    expect(queryObject.has()).toBeUndefined();
  });

  it('should return undefined if the provided argument isn\'t a string', function() {
    expect(queryObject.has(0)).toBeUndefined();
  });
});