describe('add() method', function() {

  // fake context
  var _ctx = {
    location: {}
  };

  // setting custom env for test cases
  beforeEach(function() {
    queryObject._setContext(_ctx);
  });

  it('should add the object to the query string', function(){
    _ctx.location.search = '?foo=foo';
    expect(queryObject.add({bar: 'bar'})).toBe('foo=foo&bar=bar');
  });

  it('should return undefined when no object is provided', function(){
    expect(queryObject.add()).toBeUndefined();
  });

  it('should return undefined when the provided argument isn\'t an object', function(){
    expect(queryObject.add('foo')).toBeUndefined();
  });
});
