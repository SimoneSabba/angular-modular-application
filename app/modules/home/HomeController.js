'use strict';
// Controller naming conventions should start with an uppercase letter
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

// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
HomeCtrl.$inject = ['$scope', '$state', '$http', 'FlickrService', 'Utilities'];
module.exports = HomeCtrl;