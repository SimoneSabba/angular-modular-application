'use strict';

function ListCtrl($scope, $state, FlickrService) {

    $scope.loaded = false;
    $scope.error = false;

    var onSuccess = function(data) {
        $scope.list = data;
        $scope.loaded = true;
    };

    var onError = function(error) {
        $scope.error = true;
        console.log('error during retriew data');
    };

    FlickrService.getData().then(onSuccess, onError);

}

ListCtrl.$inject = ['$scope', '$state', 'FlickrService'];
module.exports = ListCtrl;