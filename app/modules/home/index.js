'use strict';
// Home View
module.exports = angular.module('modules.home', [])
    .controller('HomeCtrl', require('./HomeController'))
    .config(require('./homeRoutes'));