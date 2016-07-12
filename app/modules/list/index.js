'use strict';

module.exports = angular.module('modules.list', [])
    .controller('ListCtrl', require('./ListController'))
    .config(require('./listRoutes'));