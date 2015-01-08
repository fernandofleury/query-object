describe('set() method', function() {

  // fake context
  var _ctx = {
    location: {}
  };

  // setting custom env for test cases
  beforeEach(function() {
    queryObject._setContext(_ctx);
    queryObject.useHistory = false;
  });

  it('should return undefined when no arguments are provided', function(){
    expect(queryObject.set()).toBeUndefined();
  });

  it('should return undefined when argument isn\'t an object', function(){
    expect(queryObject.set('foo')).toBeUndefined();
  });

  it('should return the object as a query string format', function(){
    expect(queryObject.set({bar: 'bar'})).toBe('bar=bar');
  });

  it('should return the object as a query string format with a single property whenever it has a falsy value', function(){
    expect(queryObject.set({bar: undefined})).toBe('bar');
  });

  it('should return the object as a query string format with & between each param', function(){
    expect(queryObject.set({foo: 'foo', bar: 'bar'})).toBe('foo=foo&bar=bar');
  });

  it('should use pushState via default config', function() {
    queryObject._setContext(window);
    queryObject.useHistory = true;
    queryObject.historyMethod = 'pushState';
    queryObject.set({foo: 'foo'});

    expect(window.location.search).toBe('?foo=foo');
  });

  it('should use replaceState via default config', function() {
    queryObject._setContext(window);
    queryObject.useHistory = true;
    queryObject.historyMethod = 'replaceState';
    queryObject.set({foo: 'foo'});

    expect(window.location.search).toBe('?foo=foo');
  });

  it('should use pushState via method argument', function() {
    queryObject._setContext(window);
    queryObject.useHistory = true;
    queryObject.historyMethod = 'pushState';
  });
});
