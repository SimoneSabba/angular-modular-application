/*jshint expr: true*/

'use strict';

describe('Utilities service', function() {

    var utilities;

    beforeEach(angular.mock.module('myApp'));

    beforeEach(function() {

        angular.mock.inject(function(Utilities) {
            utilities = Utilities;
        });

    });

    it('should contain the right functions', function() {
        expect(utilities.formatDate).to.be.function;
        expect(utilities.getOrdinalSuffix).to.be.function;
    });

    it('should return the ordinal suffix', function() {
        expect(utilities.getOrdinalSuffix(1)).to.be.equal('1st');
        expect(utilities.getOrdinalSuffix(2)).to.be.equal('2nd');
        expect(utilities.getOrdinalSuffix(3)).to.be.equal('3rd');
        expect(utilities.getOrdinalSuffix(11)).to.be.equal('11th');
        expect(utilities.getOrdinalSuffix(1101)).to.be.equal('1101th');
        expect(utilities.getOrdinalSuffix('text')).to.be.undefined;
    });

    it('should format the date', function() {
        expect(utilities.formatDate(null)).to.be.undefined;
        expect(utilities.formatDate(undefined)).to.be.undefined;
        expect(utilities.formatDate('Mon Jul 11 2016 22:06:21 GMT+0100 (IST)')).to.be.equal('11th Mon Jul 11 2016 22:06:21 GMT+0100 (IST)');
        expect(utilities.formatDate('2016-08-17T16:41:02Z')).to.be.equal('17th Aug 2016 at 05:41');
        expect(utilities.formatDate('1983-12-23T13:00:00Z', {format: 'MM yy'})).to.be.equal('23rd 12 83');
    });

});