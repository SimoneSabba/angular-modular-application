'use strict';

function ListCtrl($scope, $state, FlickrService, localStorageService) {

    var init = function() {
        $scope.loaded = false;
        $scope.error = false;
        $scope.selectedImages = [];
        FlickrService.getData().then(onSuccess, onError);    
    };

    var onSuccess = function(data) {
        $scope.list = data;
        initFromLocalStorage();
        $scope.loaded = true;
    };

    var onError = function(error) {
        $scope.error = true;
        console.log('error during retriew data');
    };

    var selectImage = function(image) {
        FlickrService.selectImage(image);
        image.selected = true;
        localStorageService.set(image.link, image);
    };

    var unselectImage = function(image) {
        FlickrService.unselectImage(image);
        localStorageService.remove(image.link);
        image.selected = false;
    };

    var initFromLocalStorage = function() {
        if (localStorageService.isSupported) {
            var 
                keys = localStorageService.keys(),
                length = localStorageService.length(),
                i,
                item,
                indexObj;

            for (var k in keys) {
                item = localStorageService.get(keys[k]);
                indexObj = _.findIndex($scope.list.items, 'link', item.link);
                if (indexObj !== -1) {
                    selectImage($scope.list.items[indexObj]);
                }
            }
        }
    };    

    $scope.onClickImage = function(image) {
        if (FlickrService.isSelectedImage(image)) {
            unselectImage(image);
        } else {
            selectImage(image);
        }
    };
    

    init();


}

ListCtrl.$inject = ['$scope', '$state', 'FlickrService', 'localStorageService'];
module.exports = ListCtrl;