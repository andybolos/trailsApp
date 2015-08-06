app.controller('weatherCtrl', function($scope, weatherService) {

    $scope.getWeather = function() {
        weatherService.getWeather($scope.city).then(function(response) {
            $scope.weatherData = response;
            console.log(response);
        });
    }

});
