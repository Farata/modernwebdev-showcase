(function () {
  'use strict';

  var searchFormDirectiveFactory = function () {
    return {
      scope: false,
      restrict: 'E',
      templateUrl: 'views/partial/SearchFormDirective.html'
    };
  };

  angular.module('auction').directive('auctionSearchForm', searchFormDirectiveFactory);
}());
