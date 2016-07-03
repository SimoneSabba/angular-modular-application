'use strict';

// Services and Factories have their first letter capitalized like Controllers

module.exports = angular.module('common.services', [])
    .service('FlickrService', require('./FlickrService.js'))
    .service('Utilities', require('./Utilities.js'));