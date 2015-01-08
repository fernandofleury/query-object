describe('has() method', function() {

  // fake context
  var _ctx = {
    location: {}
  };

  beforeEach(function() {
    queryObject._setContext(_ctx);
  });

  it('should return TRUE for an existing property', function() {
    _ctx.location.search = '?foo=foo&bar';
    expect(queryObject.has('foo')).toBe(true);
  });

  it('should return FALSE for a non existing property', function() {
    _ctx.location.search = '?bar=bar';
    expect(queryObject.has('foo')).toBe(false);
  });

  it('should return undefined if no argument is provided', function() {
    expect(queryObject.has()).toBeUndefined();
  });

  it('should return undefined if the provided argument isn\'t a string', function() {
    expect(queryObject.has(0)).toBeUndefined();
  });
});