'use strict';

function HomeCtrl($scope, $state, $http, FlickrService, Utilities) {

    $scope.loaded = false;
    $scope.getAuthorPage = FlickrService.getAuthorPage;
    $scope.formatDate = function(date) {
        return Utilities.formatDate(date)
    };

    FlickrService.getData().then(function(list) {
        $scope.list = list;
        $scope.loaded = true;
        console.log('list ',list);
    });

    $scope.goToPost = function(item) {
        FlickrService.setItem(item);
        $state.go('post');
    };
}

HomeCtrl.$inject = ['$scope', '$state', '$http', 'FlickrService', 'Utilities'];
module.exports = HomeCtrl;