app.controller('mtnBikeCtrl', function($scope, mtnBikeService) {

    $scope.getMtnBikeData = function() {
        mtnBikeService.getMtnBikeData($scope.stateName).then(function(response) {
            $scope.mountainBikeData = response;
        })
    };

});
