(function () {
  'use strict';

  var ProductController = function (
      $location,
      searchFormService,
      product) {
    this.$location = $location;
    this.searchFormService = searchFormService;
    this.product = product;
  };

  ProductController.prototype = {
    find: function () {
      this.$location
        .path('/search')
        .search(this.searchFormService.toRequestParams());
    }
  };

  ProductController.$inject = [
    '$location',
    'SearchFormService',
    'product'
  ];
  angular.module('auction').controller('ProductController', ProductController);
}());
