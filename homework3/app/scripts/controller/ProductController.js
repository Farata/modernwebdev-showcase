(function () {
  'use strict';

  var ProductController = function (product) {
    this.product = product;
  };

  ProductController.$inject = ['product'];
  angular.module('auction').controller('ProductController', ProductController);
}());
