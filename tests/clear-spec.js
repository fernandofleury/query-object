describe('clear() method', function() {

  // fake context
  var _ctx = {
    location: {}
  };

  // setting custom env for test cases
  beforeEach(function() {
    _ctx.location.search = '?foo=bar';

    queryObject._setContext(_ctx);
  });

  it('should clear the query string', function() {
    queryObject.clear();

    expect(queryObject.get()).toBeUndefined();
  });
});
