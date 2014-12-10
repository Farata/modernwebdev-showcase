describe('HomeController test: ', function () {
    'use strict';
    var homeController;

    beforeEach(module('auction'));

    beforeEach(inject(function ($controller) {
        homeController = $controller('HomeController');
    }));

    it('initial amount of products is 0', function () {
        expect(homeController.products.length).toBe(0);
    });
});

