'use strict';
// Controller naming conventions should start with an uppercase letter
function HomeCtrl($scope, $state, $http, ServiceName) {

    $scope.loaded = false;
    $scope.getAuthorPage = ServiceName.getAuthorPage;

    ServiceName.getData().then(function(list) {
        $scope.list = list;
        $scope.loaded = true;
        console.log('list ',list);
    });

    $scope.goToPost = function(item) {
        ServiceName.setItem(item);
        $state.go('post');
    };
}

// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
HomeCtrl.$inject = ['$scope', '$state', '$http', 'ServiceName'];
module.exports = HomeCtrl;