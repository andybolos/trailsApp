app.controller('hikingCtrl', function($scope, $location, trailService) {

    $scope.getHikeData = function() {
        trailService.getHikeData($scope.stateName).then(function(response) {
            $scope.hikeData = response;
        });
    };


});
