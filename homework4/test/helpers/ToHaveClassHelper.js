// https://github.com/vojtajina/ng-directive-testing/blob/start/test/helpers.js
beforeEach(function () {
    'use strict';

    jasmine.addMatchers({
        toHaveClass: function () {
            return {
                compare: function (actual, expected) {
                    var result = {};
                    result.pass = actual.hasClass(expected);
                    result.message = "Expected '" + angular.mock.dump(actual) + "' to have class '" + expected + "'.";
                    return result;
                }
            };
        }
    });

});
