'use strict';

var angular = require('angular');

module.exports = angular.module('myApp',
    [
        require('./common/common.js').name,
        require('./modules').name
    ])
    .config(require('./appConfig'))
    .run(require('./common/common-init.js'));