'use strict';
// Controller naming conventions should start with an uppercase letter
function PostCtrl($scope, $state, ServiceName, Utilities) {

    $scope.getAuthorPage = ServiceName.getAuthorPage;
    $scope.item = ServiceName.getItem();

    if (_.isNull($scope.item)) {
        $state.go('home');
    } else {
        $scope.tags = _.isString($scope.item.tags) ? $scope.item.tags.split(' ') : [];
        $scope.date = Utilities.formatDate($scope.item.published);
        $scope.authorPageLink = ServiceName.getAuthorPage($scope.item.author_id);
    }

    $scope.goBack = function() {
        $state.go('home');
    };


}

PostCtrl.$inject = ['$scope', '$state', 'ServiceName', 'Utilities'];
module.exports = PostCtrl;