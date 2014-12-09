define(['angular'], function(angular) {
    angular.module('myapp').controller('listNodesController', ['$scope','$rootScope',function($scope,$rootScope){
        $scope.nodes = ["Node1", "Node2", "Node3", "Node4"];
    }]);
});