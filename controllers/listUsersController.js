define(['angular', 'services'], function(angular, services) {
    angular.module('myapp').controller('listUsersController', ['$scope','$rootScope', 'User_Service',function($scope,$rootScope, User_Service){
        $scope.users = ["User1", "User2", "User3", "User4"];
        User_Service.users().success(function (data) {
            $rootScope.data = data;
        });

    }]);
});
