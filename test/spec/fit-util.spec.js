// var module = angular.mock.module;
// var inject = angular.mock.inject;

describe('fit-util', function() {
  var _fitUtil;

  // Set up the module
  beforeEach(module('fit-util'));

  beforeEach(function() {
    inject(function(fitUtil) {
      _fitUtil = fitUtil;
    });
  });


  it('Should return the average with different numbers', function() {
    var list = [1,2,3];
    var avaregeShouldBe = 2;

    expect(_fitUtil.average(list)).toBe(avaregeShouldBe);
    
  });

  it('Should return the average with same numbers', function() {
    var list = [2,2,2];
    var avaregeShouldBe = 2;

    expect(_fitUtil.average(list)).toBe(avaregeShouldBe);
    
  });

  it('Should return the average in different scenarios', function() {
    var list = [8,8,7];
    var avaregeNotShouldBe = 8;
    var avaregeShouldBe = 7.666666666666667;
    
    expect(_fitUtil.average(list)).not.toBe(avaregeNotShouldBe);
    expect(_fitUtil.average(list)).toBe(avaregeShouldBe);
    
  });

});