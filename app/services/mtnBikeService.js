app.service('mtnBikeService', function($http, $q) {

    this.getMtnBikeData = function(state) {
        var dfd = $q.defer();
        $http ({
            method: 'GET',
            url: 'https://trailapi-trailapi.p.mashape.com/?limit=50&q[activities_activity_type_name_eq]=mountain+biking&q[state_cont]=' + state,
            headers: {
                'X-Mashape-Key': 'XaZ3XuVRCemsh5XqyCanSzMq1cRGp1mLhryjsnH20mQoZHZx7x',
                'Accept': 'text/plain'
            }
        }).then(function(response){
            dfd.resolve(response.data.places)
        }), function(error) {
            console.log('Error', error);
        }
        return dfd.promise;
    }

})
