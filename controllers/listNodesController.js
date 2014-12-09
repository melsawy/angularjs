define(['angular'], function(angular) {
    angular.module('myapp').controller('listNodesController', ['$scope','$rootScope',function($scope,$rootScope){
        $scope.title = 'Node title';
        $scope.desc = 'Node description';
    }]);
});