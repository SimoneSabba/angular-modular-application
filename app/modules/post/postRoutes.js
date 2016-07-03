'use strict';

function postRoutes($stateProvider) {

    var post = {
        name: 'post', // state name
        url: '/post', // url path that activates this state
        template: require('./post.html'), // generate the Directive "homeView" - when calling the directive in HTML, the name must not be camelCased
        controller: 'PostCtrl'
    };

    $stateProvider.state(post);

}

postRoutes.$inject = ['$stateProvider'];
module.exports = postRoutes;