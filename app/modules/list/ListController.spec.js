/*jshint expr: true*/

'use strict';

describe('ListController', function() {

    var
        ctrl,
        scope,
        _$httpBackend,
        _$http,
        url = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK';

    beforeEach(angular.mock.module('myApp'));

    beforeEach(function() {

        angular.mock.inject(function($controller, $rootScope, $httpBackend, $http) {
            scope = $rootScope.$new();
            ctrl = $controller('ListCtrl', {
                $scope: scope
            });
            _$httpBackend = $httpBackend;
            _$http = $http;
        });

    });

    it('should be defined', function() {
        expect(ctrl).to.not.be.undefined;
    });

    it('should load data when JSONP success', function() {
        _$httpBackend
            .whenJSONP(url)
            .respond(200, { description: 'desc', title: 'Recent Uploads tagged potato', item: [{author: 'author1', link: 'link1'}, {author: 'author2', link: 'link3'}] });

        expect(scope.loaded).to.be.false;
        _$http({
            method: 'JSONP',
            url: url
        });
        _$httpBackend.flush();
        expect(scope.loaded).to.be.true;
        expect(scope.error).to.be.false;
        expect(scope.list.description).to.equal('desc');
        expect(scope.list.title).to.equal('Recent Uploads tagged potato');
        expect(scope.list.item.length).to.equal(2);
        expect(scope.list.item[0].author).to.be.equal('author1');
        expect(scope.list.item[1].author).to.be.equal('author2');
    });

    it('should load error when JSONP fail', function() {
        _$httpBackend
            .whenJSONP(url)
            .respond(500);
        _$http({
            method: 'JSONP',
            url: url
        });
        expect(scope.error).to.be.false;
        _$httpBackend.flush();
        expect(scope.error).to.be.true;
    });

});