(function () {
  'use strict';

  var footerDirectiveFactory = function () {
    return {
      scope: false,
      restrict: 'E',
      templateUrl: 'views/partial/FooterDirective.html'
    };
  };

  angular.module('auction').directive('auctionFooter', footerDirectiveFactory);
}());
