'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', function($scope) {
        $scope.truthy = function(bool){
            return bool;
        }

        $scope.getFullName = function(){
            return $scope.firstname + ' ' + $scope.lastname;
        }
  }])
  .controller('MyCtrl2', [function() {

  }]);