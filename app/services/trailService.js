app.service('trailService', function($http, $q) {

    this.getHikeData = function(state) {
        var dfd = $q.defer();
            $http({
            method: 'GET',
            url: 'https://trailapi-trailapi.p.mashape.com/?limit=50&q[activities_activity_type_name_eq]=hiking&q[state_cont]=' + state
        }).then(function(response) {
            dfd.resolve(response.data.places)
        }), function(error) {
            console.log('Error', error);
        }
        return dfd.promise;
    };

    // this.getHikeData = function(state) {
    //     return $http.get('https://trailapi-trailapi.p.mashape.com/?q[activities_activity_type_name_eq]=hiking&q[state_cont]=' + state)
    //     .then(function(response) {
    //         console.log(response);
    //         return response.data.places;
    //     }), function(error) {
    //         console.log('Error', error);
    //     }
    // };


});
