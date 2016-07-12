'use strict';

var FlickrService = function($http, $q, CONSTANTS) {
    this.item = null;
    var data = {
            method: 'JSONP',
            url: CONSTANTS.FLICKR_API_URL + '&jsoncallback=JSON_CALLBACK',
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

    this.setItem = function(item) {
        this.item = item;
    };

    this.getItem = function() {
        return this.item;
    };

    this.getAuthorPage = function(authorId) {
        return authorId ? CONSTANTS.FLICKR_BASE_URL + authorId : null;
    };
};

FlickrService.$inject = ['$http', '$q', 'CONSTANTS'];
module.exports = FlickrService;
