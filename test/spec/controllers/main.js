'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('liveApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of articles to the scope', function () {
    expect(scope.articles.length).toBe(3);
  });
});
