/*jshint expr: true*/

'use strict';

describe('FlickrService ', function() {

    var 
        flickrService,
        fakeImageObj = {image: 'link'};

    beforeEach(angular.mock.module('myApp'));

    beforeEach(function() {

        angular.mock.inject(function(FlickrService) {
            flickrService = FlickrService;
        });

    });

    it('should store a selected image', function() {
        expect(flickrService.getSelectedImages().length).to.equal(0);
        flickrService.selectImage(fakeImageObj);
        expect(flickrService.getSelectedImages().length).to.equal(1);
        expect(flickrService.isSelectedImage(fakeImageObj)).to.be.true;

    });

    it('should unselecte an image', function() {
        flickrService.selectImage(fakeImageObj);
        expect(flickrService.getSelectedImages().length).to.equal(1);
        expect(flickrService.isSelectedImage(fakeImageObj)).to.be.true;
        flickrService.unselectImage(fakeImageObj);
        expect(flickrService.getSelectedImages().length).to.equal(0);
        expect(flickrService.isSelectedImage(fakeImageObj)).to.be.false;

    });

});