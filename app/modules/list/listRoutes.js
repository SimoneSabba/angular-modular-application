'use strict';

function listRoutes($stateProvider) {

    var list = {
        name: 'home',
        url: '/',
        template: require('./list.html'),
        controller: 'ListCtrl'
    };

    $stateProvider.state(list);

}

listRoutes.$inject = ['$stateProvider'];
module.exports = listRoutes;