'use strict';
// Controller naming conventions should start with an uppercase letter
function PostCtrl($scope, $state, FlickrService, Utilities) {

    $scope.getAuthorPage = FlickrService.getAuthorPage;
    $scope.item = FlickrService.getItem();

    if (_.isNull($scope.item)) {
        $state.go('home');
    } else {
        $scope.tags = _.isString($scope.item.tags) ? $scope.item.tags.split(' ') : [];
        $scope.date = Utilities.formatDate($scope.item.published);
        $scope.authorPageLink = FlickrService.getAuthorPage($scope.item.author_id);
    }

    $scope.goBack = function() {
        $state.go('home');
    };


}

PostCtrl.$inject = ['$scope', '$state', 'FlickrService', 'Utilities'];
module.exports = PostCtrl;