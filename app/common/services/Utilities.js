'use strict';

var Utilities = function($filter, CONSTANTS) {

    this.getOrdinalSuffix = function(number) {
        var suffixes = ['th', 'st', 'nd', 'rd'],
            relevantDigits = (number < 30) ? number % 20 : number % 30,
            suffix = (relevantDigits <= 3) ? suffixes[relevantDigits] : suffixes[0];

        if (!_.isNumber(number)) {
            return;
        }

        return number + suffix;
    };
    this.formatDate = function(date, options) {
        var opt = _.isObject(options) ? options : {},
            format = opt.format || CONSTANTS.FORMAT_DATE_DEFAULT;

        if (_.isNull(date) || _.isUndefined(date)) {
            return;
        }

        return this.getOrdinalSuffix(new Date(date).getDate()) + ' ' + $filter('date')(date, format);
    }

};

Utilities.$inject = ['$filter', 'CONSTANTS'];
module.exports = Utilities;
