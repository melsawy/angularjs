define(['angular'], function(angular) {
    angular.module('myapp').controller('listUsersController', ['$scope','$rootScope',function($scope,$rootScope){
        $scope.users = ["User1", "User2", "User3", "User4"];
    }]);
});
