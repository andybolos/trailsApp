var app = angular.module('rideApp', ['ngRoute']);

app.config(function($routeProvider, $httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');

    $routeProvider
    .when('/home', {
        controller: 'mainCtrl',
        templateUrl: 'app/templates/home.html'
    })
    .when('/hiking', {
        controller: 'hikingCtrl',
        templateUrl: 'app/templates/hiking.html'
    })
    .otherwise({
        redirectTo: '/home'
    })
});
