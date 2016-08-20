'use strict';

module.exports = angular.module('modules',
    [
        require('./list').name
    ])
    .controller('MainCtrl', require('./MainController'));