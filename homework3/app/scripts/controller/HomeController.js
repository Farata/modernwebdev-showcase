(function () {
  'use strict';

  var HomeController = function (productService) {
    var _this = this;
    _this.products = [];

    productService.getProducts()
        .then(function (data) { _this.products = data; });
  };

  HomeController.$inject = ['ProductService'];
  angular.module('auction').controller('HomeController', HomeController);
}());
