'use strict';

angular.module('app.home', ['ui.router'])
    .config(function($stateProvider){
        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'app/app.home/app.home.html',
            controller: 'HomeCtrl'
            //controllerAs: 'uc'
        })
    })
    .controller('HomeCtrl', function(){

    });