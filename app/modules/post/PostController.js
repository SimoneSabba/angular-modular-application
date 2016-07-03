'use strict';
// Controller naming conventions should start with an uppercase letter
function PostCtrl($scope, $state, ServiceName) {

    $scope.getAuthorPage = ServiceName.getAuthorPage;
    $scope.item = ServiceName.getItem();
    if (_.isNull($scope.item)) {
        $state.go('home');
    } else {
        $scope.tags = _.isString($scope.item.tags) ? $scope.item.tags.split(' ') : [];
    }
    $scope.goBack = function() {
        $state.go('home');
    };
}

// $inject is necessary for minification. See http://bit.ly/1lNICde for explanation.
PostCtrl.$inject = ['$scope', '$state', 'ServiceName'];
module.exports = PostCtrl;