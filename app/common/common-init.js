'use strict';

function commonInit($rootScope, $state) {
    $rootScope.$state = $state;
    $rootScope.$on('$viewContentLoaded', function() {
        if (document.readyState === 'complete') {
            window.scrollTo(0, 0);
        }
    });
}

commonInit.$inject = ['$rootScope', '$state'];
module.exports = commonInit;