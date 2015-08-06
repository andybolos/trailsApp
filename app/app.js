var app = angular.module('rideApp', ['ngRoute']);

app.config(function($routeProvider) {
    // $httpProvider.interceptors.push('httpRequestInterceptor');, $httpProvider

    $routeProvider
    .when('/home', {
        controller: 'mainCtrl',
        templateUrl: 'app/templates/home.html'
    })
    .when('/hiking', {
        controller: 'hikingCtrl',
        templateUrl: 'app/templates/hiking.html'
    })
    .when('/resorts', {
        controller: 'resortsCtrl',
        templateUrl: 'app/templates/resorts.html'
    })
    .when('/mtnbiketrails', {
        controller: 'mtnBikeCtrl',
        templateUrl: 'app/templates/mtnBikeTmpl.html'
    })
    .otherwise({
        redirectTo: '/home'
    })
});
