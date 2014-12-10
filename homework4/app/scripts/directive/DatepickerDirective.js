(function () {
  'use strict';

  var datepickerDirectiveFactory = function () {
    return {
      scope: false,
      restrict: 'A',
      link: function (scope, element) {
        element.datepicker({
          startDate: '-0d'
        });
      }
    };
  };

  angular.module('auction').directive('auctionDatepicker', datepickerDirectiveFactory);
}());
