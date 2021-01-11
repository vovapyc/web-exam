(function () {
    'use strict';

    var carsListObj = new CarsListService();

    angular.module('ControllerAsApp', [])
        .controller('CarsListController', CarsListController)
        .factory('CarsListFactory', CarsListFactory);

    CarsListController.$inject = ['CarsListFactory'];

    function CarsListController(CarsListFactory) {
        var list = this;
        var carsList = CarsListFactory();

        list.items = carsList.getItems();
        list.removeItem = function (index) {
            carsList.removeItem(index);
        };
        list.hideItem = function (index) {
            carsList.hideItem(index);
        };
    }

    function CarsListService() {
        var service = this;

        var items = [
            {
                mark: 'BMW',
                quantity: 3
            },
            {
                mark: 'Tesla',
                quantity: 1
            },
            {
                mark: 'Reno',
                quantity: 4
            },
            {
                mark: 'Pego',
                quantity: 5
            },
            {
                mark: 'Lada',
                quantity: 7
            },
        ];

        service.getItems = function () {
            return items;
        };

        service.removeItem = function (index) {
            items.splice(index, 1);
        }

        service.hideItem = function (index) {
            items[index].hide = true;
        }
    }

    function CarsListFactory() {
        var factory = function () {
            return carsListObj;
        };
        return factory;
    }

})();