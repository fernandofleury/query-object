describe('get() method', function() {

  // fake context
  var _ctx = {
    location: {}
  };

  // setting custom env for test cases
  beforeEach(function() {
    _ctx.location.search = '';

    queryObject._setContext(_ctx);
  });

  it('should be undefined', function() {
    expect(queryObject.get()).toBeUndefined();
  });

  it('should a key object only', function() {
    _ctx.location.search = '?foo';

    expect(queryObject.get()).toEqual({
      foo: undefined
    });
  });

  it('should return a key/value object', function() {
    _ctx.location.search = '?foo=bar';

    expect(queryObject.get()).toEqual({
      foo: 'bar'
    });
  });

  it('should return a key/value, key only object', function() {
    _ctx.location.search = '?foo=bar&baz';

    expect(queryObject.get()).toEqual({
      foo: 'bar',
      baz: undefined
    });
  });

  it('should convert the unicode space for a space', function() {
    _ctx.location.search = '?foo=bar%20baz';

    expect(queryObject.get()).toEqual({
      foo: 'bar baz'
    });
  });

  it('should convert the plus sign for a space', function() {
    _ctx.location.search = '?foo=bar+baz';

    expect(queryObject.get()).toEqual({
      foo: 'bar baz'
    });
  });

  it('should return a list of properties based on an array', function() {
    _ctx.location.search = '?foo=foo&bar&baz=baz';

    expect(queryObject.get(['foo', 'bar'])).toEqual({
      foo: 'foo',
      bar: undefined
    });
  });

  it('should return a property based on a string', function() {
    _ctx.location.search = '?foo=foo&bar=bar&baz=baz';

    expect(queryObject.get('bar')).toEqual('bar');
  });

  it('should return an empty string', function() {
    _ctx.location.search = '?foo=foo';

    expect(queryObject.get('bar')).toBeUndefined();
  });
});