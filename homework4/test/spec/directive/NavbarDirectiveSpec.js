describe('NavBar test:', function () {
    'use strict';

    beforeEach(module('auction'));
    // load template from templateCache
    beforeEach(module('views/partial/NavbarDirective.html'));

    describe('NavbarDirective', function () {
        var navbar;
        beforeEach(inject(function ($compile, $rootScope) {
            var $scope = $rootScope.$new();
            navbar = angular.element('<auction-navbar></auction-navbar>');
            navbar = $compile(navbar)($scope);
            //
            $scope.$digest();
        }));

        it('NavbarDirective has class navbar', function () {
            // expect(navbar.children()).toHaveClass('navbar');
        });
    });
});
