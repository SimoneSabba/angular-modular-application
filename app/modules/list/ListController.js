'use strict';

function ListCtrl($scope, $state, FlickrService, Utilities) {

    $scope.loaded = false;
    $scope.error = false;
    $scope.getAuthorPage = FlickrService.getAuthorPage;
    $scope.formatDate = function(date) {
        return Utilities.formatDate(date);
    };

    var onSuccess = function(data) {
        $scope.list = data;
        $scope.loaded = true;
    };

    var onError = function(error) {
        $scope.error = true;
        console.log('error during retriew data');
    };

    FlickrService.getData().then(onSuccess, onError);

    $scope.goToPost = function(item) {
        FlickrService.setItem(item);
        $state.go('post');
    };
}

ListCtrl.$inject = ['$scope', '$state', 'FlickrService', 'Utilities'];
module.exports = ListCtrl;