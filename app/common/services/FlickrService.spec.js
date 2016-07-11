/*jshint expr: true*/

'use strict';

describe('FlickrService ', function() {

    var flickrService;

    beforeEach(angular.mock.module('myApp'));

    beforeEach(function() {

        angular.mock.inject(function(FlickrService) {
            flickrService = FlickrService;
        });

    });

    it('should contain get and set method', function() {
        expect(flickrService.get).to.be.function;
        expect(flickrService.set).to.be.function;
    });

    it('should return the author page url', function() {
        expect(flickrService.getAuthorPage('author_id')).to.be.equal('https://www.flickr.com/author_id');
        expect(flickrService.getAuthorPage()).to.be.null;
    });

});