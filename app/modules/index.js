'use strict';

module.exports = angular.module('modules',
    [
        require('./home').name,
        require('./post').name
    ])
    .controller('MainCtrl', require('./MainController'));