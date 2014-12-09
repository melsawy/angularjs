require.config({
    baseUrl: '/sites/all/',
    paths: {
        angular : 'libraries/angular.min',
        app : 'modules/custom/angularjs/js/app',
        angularBootstrap : 'libraries/ui-bootstrap-tpls-0.12.0.min',
        angularUi: 'libraries/angular-ui-router',
        mainController: 'modules/custom/angularjs/controllers/mainController'
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'mainController' :['angular','app'],
        'angularBootstrap': {
            deps:['angular'],
            'exports':'angular.bootstrap'
        },
        'angularUi': {
            deps:['angular'],
            'exports':'angular.ui'
        }
    },
    priority: [
        "angular"
    ]

});

require( [
    'angular',
    'app',
    'mainController',
],function (angular, app, routes) {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['myapp']);
    });
});