'use strict';

module.exports = angular.module('modules',
    [
        require('./list').name,
        require('./post').name
    ])
    .controller('MainCtrl', require('./MainController'));