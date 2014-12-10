(function () {
  'use strict';

  var SearchFormService = function () {
    // Instance attributes go here:
  };

  var DEFAULTS = {
    bids      : null,
    category  : 0,
    closeDay  : null,
    highPrice : 500,
    lowPrice  : 0,
    title     : ''
  };

  var cleanUp = function (obj) {
    // Go through the current instance of `SearchFormService` and filter out only
    // fields we want to include in request params object.
    return _.reduce(obj, function (params, value, key) {

      // Change property name for "private" keys.
      if (key.indexOf('_') === 0) {
        key = key.substring(1);
      }

      // The guard below prevents two cases when we don't want a value to be a
      // part of the request params object:
      //   1. input[type=text] fields with empty string values.
      //   2. input[type=text] fields with non-empty, but blank values.
      if (_.isString(value) && _.isEmpty(value.trim())) {
        return params;
      }

      // Sometimes input's value is `null` (e.g. when we left
      // input[type=number] fields empty), so we want to skip `null`s as well.
      if (!_.isNull(value) &&
          !_.isNaN(value) &&
          value !== DEFAULTS[key]) {
        params[key] = value;
      }
      return params;

    }, {}); // The last parameter - initial value of the request params object
  };

  // Instance methods go here:
  SearchFormService.prototype = {

    get lowPrice() { return this._lowPrice; },
    set lowPrice(price) {
      this._lowPrice = parseFloat(price);
    },

    get highPrice() { return this._highPrice; },
    set highPrice(price) {
      this._highPrice = parseFloat(price);
    },

    get category() { return this._category; },
    set category(value) {
      this._category = parseInt(value);
    },

    toRequestParams: function () {
      return cleanUp(this);
    },

    fromRequestParams: function (params) {
      var cleanedUpParams = cleanUp(params);
      _.assign(this, cleanedUpParams);
      return cleanedUpParams;
    }
  };

  /** List all dependencies required by the service. */
  SearchFormService.$inject = [];

  // Register the service within AngularJS DI container.
  angular.module('auction').service('SearchFormService', SearchFormService);
}());
