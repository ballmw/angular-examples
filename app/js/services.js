'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
    .value('version', '0.1')
    //Singleton
    .service('myService', function(){
       return {
           called: 0,
           serviceDetails: function(){
               called ++;
               return "called" + called;
           }
       }
    })
    //New Object
    .factory('myFactory', function(){
        return {
            called: 0,
            factoryDetails: function(){
                called ++;
                return "called" + called;
            }
        }
    });
;
