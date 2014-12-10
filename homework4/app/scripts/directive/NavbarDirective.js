(function () {
  'use strict';

  var navbarDirectiveFactory = function () {
    return {
      scope: true,
      restrict: 'E',
      templateUrl: 'views/partial/NavbarDirective.html',
      controller: ['$scope', '$location', '$route', function ($scope, $location, $route) {
        // To use `cmp` prefix for all data bindings inside the template.
        $scope.cmp = this;

        this.search = function () {
          // Navigate to the search page with provided set of query string params.
          $location.path('/search').search({ title: this.productTitle });

          // We don't want to preserve value of the search box in the navigation
          // bar between pages.
          this.productTitle = null;

          // When the user is on the Search page, the route won't be reloaded
          // because of the `realoadOnSearch: false` configuration in app.js.
          // But reloading - is the only way search box value is synchronized
          // with the search form's product title input field (query string
          // params are read inside the controller's constructor function).
          $route.reload();
        };
      }]
    };
  };

  angular.module('auction').directive('auctionNavbar', navbarDirectiveFactory);
}());
