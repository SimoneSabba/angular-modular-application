'use strict';

function HomeCtrl($scope, $state, $http, FlickrService, Utilities) {

    $scope.loaded = false;
    $scope.error = false;
    $scope.getAuthorPage = FlickrService.getAuthorPage;
    $scope.formatDate = function(date) {
        return Utilities.formatDate(date)
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

HomeCtrl.$inject = ['$scope', '$state', '$http', 'FlickrService', 'Utilities'];
module.exports = HomeCtrl;