'use strict';

angular.module('app', ['ui.router', 'app.status', 'app.home', 'app.users', 'ui.bootstrap'])
    .config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise( '/')
    });
