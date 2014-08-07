'use strict';

/**
 * @ngdoc overview
 * @name blurApp
 * @description
 * # blurApp
 *
 * Main module of the application.
 */
angular
  .module('blurApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
