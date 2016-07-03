'use strict';

module.exports = angular.module('modules.home', [])
    .controller('HomeCtrl', require('./HomeController'))
    .config(require('./homeRoutes'));