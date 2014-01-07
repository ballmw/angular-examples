'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function () {
    beforeEach(module('myApp.controllers'));

    describe('MyCtrl1', function () {
        var ctrl;
        var $scope;

        beforeEach(inject(function ($rootScope) {
            $scope = $rootScope.$new();
        }));

        beforeEach(inject(function ($controller) {
            ctrl = $controller('MyCtrl1', {$scope: $scope});
        }));

        it('should return true', function () {
            expect($scope.truthy(true)).toBe(true);
        });

        it('should return the full name', function () {
            $scope.firstname = 'Michael';
            $scope.lastname = 'Ball';
            expect($scope.getFullName()).toBe('Michael Ball');
        });

        it('should return the full name', function () {
            $scope.firstname = 'Michael';
            $scope.lastname = 'Ball';
            expect($scope.getFullName()).toBe('Michael Ball');
        });
    })
});
