angular.module('ngBoilerplate', [
    'templates-app',
    'templates-common',
    'ngBoilerplate.home',
    'ngBoilerplate.about',
    'ngBoilerplate.map',
    'ui.router',
    'uiGmapgoogle-maps'
])

    .config(function myAppConfig($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {
        $urlRouterProvider.otherwise('/home');

        uiGmapGoogleMapApiProvider.configure({
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });
    })

    .run(function run() {
    })

    .controller('AppCtrl', function AppCtrl($scope, $location, uiGmapGoogleMapApi) {
        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            if (angular.isDefined(toState.data.pageTitle)) {
                $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate';
            }
        });
        
        uiGmapGoogleMapApi.then(function(maps) {
        });
    })
;
