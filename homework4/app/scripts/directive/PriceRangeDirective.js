(function () {
  'use strict';

  var priceRangeDirectiveFactory = function () {
    return {
      scope: {
        minPrice : '@',
        maxPrice : '@',
        lowPrice : '=',
        highPrice: '='
      },
      restrict: 'E',
      templateUrl: 'views/partial/PriceRangeDirective.html',
      link: function (scope, element) {
        var slider = angular.element(element).find('input[type=text]'),
            min = scope.minPrice || 0,
            max = scope.maxPrice || 500;

        scope.lowPrice  = scope.lowPrice  || min;
        scope.highPrice = scope.highPrice || max;

        // Initialize slider
        slider.slider({
          min: min,
          max: max,
          value: [
            scope.lowPrice,
            scope.highPrice
          ]
        });

        // Slider -> numeric fields
        slider.on('slideStop', function (event) {
          scope.$apply(function () {
            if (scope.lowPrice  !== event.value[0]) { scope.lowPrice  = event.value[0]; }
            if (scope.highPrice !== event.value[1]) { scope.highPrice = event.value[1]; }
          });
        });

        // Numeric fields -> slider
        var currentVal = function () { return slider.slider('getValue'); };
        var setSlider = function (low, high) { slider.slider('setValue', [low, high]); };

        scope.$watch('lowPrice',  function (newVal) { setSlider(newVal || min, currentVal()[1]); });
        scope.$watch('highPrice', function (newVal) { setSlider(currentVal()[0], newVal || max); });
      }
    };
  };

  angular.module('auction').directive('auctionPriceRange', priceRangeDirectiveFactory);
}());
