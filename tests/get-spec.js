describe('query-object get spec', function() {

  // fake context
  var _env = {
    location: {}
  };

  // setting custom env for test cases
  beforeEach(function() {
    _env.location.search = '';

    queryObject._setEnv(_env);
  });

  it('should be empty', function() {
    expect(queryObject.get()).toEqual({});
  });

  it('should return the query string as a key object only', function() {
    _env.location.search = '?foo';

    expect(queryObject.get()).toEqual({foo: undefined});
  });

  it('should return the query string as a key/value object', function() {
    _env.location.search = '?foo=bar';

    expect(queryObject.get()).toEqual({foo: 'bar'});
  });

  it('should return the query string as a key/value, key only object', function() {
    _env.location.search = '?foo=bar&baz';

    expect(queryObject.get()).toEqual({foo: 'bar', baz: undefined});
  });

  it('should return the query string converting the space for a hiphen', function() {
    _env.location.search = '?foo=bar baz';

    expect(queryObject.get()).toEqual({foo: 'bar_baz'});
  });
});