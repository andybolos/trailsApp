app.service('weatherService', function($http, $q) {

    this.getWeather = function(city) {
        var dfd = $q.defer();
        $http({
            method: 'GET',
            url: 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&units=imperial&cnt=3'
        }).then(function(response) {
            dfd.resolve(response.data)
        }), function(error) {
            console.log('Error', error);
        }
        return dfd.promise;
    };
});
