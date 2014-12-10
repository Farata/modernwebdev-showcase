describe('ProductService test:', function () {
    'use strict';
    var productService,
        Restangular,
        $httpBackend;
    beforeEach(function () {
        module('auction');
        inject(function ($injector) {
            $httpBackend = $injector.get('$httpBackend');
            productService = $injector.get('ProductService');
            Restangular = $injector.get('Restangular');
        });

        $httpBackend.whenGET('data/products.json').respond([
                {
                    'id': 1,
                    'title': 'Item 1',
                    'thumb': '01.jpg',
                    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore adipiscing elit. Ut enim.',
                    'timeleft': 2,
                    'watchers': 12,
                    'price': 123
                },
                {
                    'id': 2,
                    'title': 'Item 2',
                    'thumb': '02.jpg',
                    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore adipiscing elit. Ut enim.',
                    'timeleft': 2,
                    'watchers': 3,
                    'price': 43
                }
            ]
        );
    });


    it('mocked data should return 2 elements', function (done) {

        Restangular.all('products').getList().then(function (data) {
            expect(data.length).toBe(2);
            done();
        });

        $httpBackend.flush();
    });
});
