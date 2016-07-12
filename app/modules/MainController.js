'use strict';

function MainCtrl($rootScope, $scope) {
    $scope.test = null;
}

MainCtrl.$inject = ['$rootScope', '$scope'];
module.exports = MainCtrl;