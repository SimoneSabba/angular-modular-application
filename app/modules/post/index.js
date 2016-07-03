'use strict';
// Home View
module.exports = angular.module('modules.post', [])
    .controller('PostCtrl', require('./PostController'))
    .config(require('./postRoutes'));