'use strict';

module.exports = angular.module('common.services', [])
    .service('FlickrService', require('./FlickrService.js'))
    .service('Utilities', require('./Utilities.js'));