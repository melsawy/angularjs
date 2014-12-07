require.config({
    baseUrl: '/sites/all/',
    paths: {
        angular : 'libraries/angular.min',
        app : 'modules/custom/angularjs/js/app',
        angularBootstrap : 'libraries/ui-bootstrap-tpls-0.12.0.min',
        mainController: 'modules/custom/angularjs/controllers/mainController',
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'mainController' :['angular','app'],
        'angularBootstrap': {
            deps:['angular'],
            'exports':'angular.bootstrap'
        },
    },

});

require( [
    'angular',
    'app',
    'mainController',
],function(){}
);