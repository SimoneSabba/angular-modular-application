'use strict';

function homeRoutes($stateProvider) {

    var home = {
        name: 'home',
        url: '/',
        template: require('./home.html'),
        controller: 'HomeCtrl'
    };

    $stateProvider.state(home);

}

homeRoutes.$inject = ['$stateProvider'];
module.exports = homeRoutes;