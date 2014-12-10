(function () {
  'use strict';

  var SearchController = function (
      $location,
      productService,
      searchFormService) {

    this.$location         = $location;
    this.productService    = productService;
    this.searchFormService = searchFormService;

    var params = searchFormService.fromRequestParams($location.search());
    if (!_.isEmpty(params)) {
      this.find();
    }
  };

  SearchController.prototype = {
    find: function () {
      var params = this.searchFormService.toRequestParams();
      this.$location.search(params);
      this.productService.find(params).then(function (data) {
        this.products = data;
      }.bind(this));
    }
  };

  SearchController.$inject = [
    '$location',
    'ProductService',
    'SearchFormService'
  ];
  angular.module('auction').controller('SearchController', SearchController);
}());
