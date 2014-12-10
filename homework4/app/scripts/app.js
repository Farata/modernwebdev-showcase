(function () {
  'use strict';

  angular.module('auction', ['ngRoute', 'restangular'])
    .config(['$routeProvider', function ($routeProvider) {
      var title = function (page) {
        return page + ' | Auction';
      };

      $routeProvider
        .when('/', {
          templateUrl: 'views/home.html',
          controller: 'HomeController',
          controllerAs: 'ctrl',
          title: title('Home')
        })
        .when('/search', {
          templateUrl: 'views/search.html',
          controller: 'SearchController',
          controllerAs: 'ctrl',
          reloadOnSearch: false,
          title: title('Search')
        })
        .when('/product/:productId', {
          templateUrl: 'views/product.html',
          controller: 'ProductController',
          controllerAs: 'ctrl',
          title: title('Product Details'),
          resolve: {
            product: ['$route', 'ProductService', function ($route, productService) {
              var productId = parseInt($route.current.params.productId);
              return productService.getProductById(productId);
            }]
          }
        })
        .otherwise({
           redirectTo: '/'
        });
    }])
    .config(['RestangularProvider', function (RestangularProvider) {
      RestangularProvider.setBaseUrl('data');
      RestangularProvider.setRequestSuffix('.json');
    }])
    .run(['$rootScope', function ($rootScope) {
      $rootScope.$on('$routeChangeSuccess', function (event, currentRoute) {
        $rootScope.pageTitle = currentRoute.title;
      });
    }]);
}());
