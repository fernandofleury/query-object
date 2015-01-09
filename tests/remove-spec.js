describe('remove() method', function() {

  // fake context
  var _ctx = {
    location: {}
  };

  // setting custom env for test cases
  beforeEach(function() {
    queryObject._setContext(_ctx);
  });

  it('should remove a property based on a string as argument', function() {
    _ctx.location.search = '?foo=foo&bar=bar';

    expect(queryObject.remove('foo')).toBe('bar=bar');
  });

  it('should remove an array of properties based on an array as argument', function() {
    _ctx.location.search = '?foo=foo&bar=bar&baz=baz';

    expect(queryObject.remove(['bar', 'baz'])).toBe('foo=foo');
  });

  it('should return undefined if no argument is provided', function() {
    _ctx.location.search = '?foo=foo&bar=bar&baz=baz';

    expect(queryObject.remove()).toBeUndefined();
  });

  it('should return undefined if the provided argument isn\'t a string or an array', function() {
    _ctx.location.search = '?foo=foo&bar=bar&baz=baz';
    
    expect(queryObject.remove(1)).toBeUndefined();
  });
});