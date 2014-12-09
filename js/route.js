define(['angular', 'app'], function(angular, app) {

    return app.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        /** Home Page **/
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: '/sites/all/modules/custom/angularjs/templates/home.html',
            controller: 'homeController'
        });
        /**** Invalid routes redirection ****/
        $urlRouterProvider.otherwise('/home');
    }]);

});