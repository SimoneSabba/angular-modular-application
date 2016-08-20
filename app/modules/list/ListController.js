'use strict';

function ListCtrl($scope, $state, FlickrService) {

    $scope.loaded = false;
    $scope.error = false;
    $scope.selectedImages = [];

    var onSuccess = function(data) {
        $scope.list = data;
        $scope.loaded = true;
    };

    var onError = function(error) {
        $scope.error = true;
        console.log('error during retriew data');
    };

    FlickrService.getData().then(onSuccess, onError);

    $scope.selectImage = function(image) {
        if (FlickrService.isSelectedImage(image)) {
            FlickrService.unselectImage(image);
            image.selected = false;
        } else {
            FlickrService.selectImage(image);
            image.selected = true;
        }
    }

}

ListCtrl.$inject = ['$scope', '$state', 'FlickrService'];
module.exports = ListCtrl;