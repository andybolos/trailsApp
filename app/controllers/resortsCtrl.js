app.controller('resortsCtrl', function($scope, resortService) {

    $scope.getResortData = function() {
        resortService.getResortData($scope.stateName).then(function(response) {
            $scope.resortsData = response;
        });
    }

});
