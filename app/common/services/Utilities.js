'use strict';

var Utilities = function($filter) {
    this.getOrdinalNumber = function(number) {
        return $filter('ordinal')(number);
    };
};

Utilities.$inject = ['$filter'];
module.exports = Utilities;
