describe('Footer test:', function () {
    'use strict';
    var $rootScope,
        $scope,
        $compile,
        el;

    beforeEach(function () {
        module('auction');
        module('views/partial/FooterDirective.html');

        inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            $compile = $injector.get('$compile');
            el = $compile(angular.element('<auction-footer></auction-footer>'))($scope);
        });

        $rootScope.$digest();

    });

    it('should have footer class', function () {
        expect(el.children()).toHaveClass('text-center');
    });


});
