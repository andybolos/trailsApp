app.service('mtnBikeService', function($http, $q) {

    this.getMtnBikeData = function(state) {
        var dfd = $q.defer();
        $http ({
            method: 'GET',
            url: 'https://trailapi-trailapi.p.mashape.com/?limit=50&q[activities_activity_type_name_eq]=mountain+biking&q[state_cont]=' + state
        }).then(function(response){
            dfd.resolve(response.data.places)
        }), function(error) {
            console.log('Error', error);
        }
        return dfd.promise;
    }

})
