'use strict';

var FlickrService = function($http, $q, CONSTANTS) {
    this.selectedImages = [];

    var data = {
            method: 'JSONP',
            url: CONSTANTS.FLICKR_API_URL,
            cache: true
        };

    this.getData = function() {
        var defer = $q.defer();
        $http(data).then(function(res) {
            defer.resolve(res.data);
        }, function(error) {
            defer.reject(error);
        });
        return defer.promise;
    };

    this.selectImage = function(image) {
        this.selectedImages.push(image);
    }

    this.unselectImage = function(image) {
        var index = this.selectedImages.indexOf(image);
        this.selectedImages.splice(index, 1);
    }

    this.isSelectedImage = function(image) {
        return this.selectedImages.indexOf(image) !== -1;
    }

    this.getSelectedImages = function() {
        return this.selectedImages;
    }

    this.SetSelectedImages = function(selectedImages) {
        this.selectedImages = selectedImages;
    }

};

FlickrService.$inject = ['$http', '$q', 'CONSTANTS'];
module.exports = FlickrService;
