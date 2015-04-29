angular.module('ngBoilerplate.map', [
    'ui.router',
    'uiGmapgoogle-maps'
])

    .config(function config($stateProvider) {
        $stateProvider.state('map', {
            url: '/map',
            views: {
                "main": {
                    controller: 'MapCtrl',
                    templateUrl: 'map/map.tpl.html'
                }
            },
            data: {pageTitle: 'Map'}
        });
    })

    .run(function run() {
    })

    .controller("MapCtrl", function ($scope) {
        // Counter to keep track of marker.id's
        var markerCount = 0;
        $scope.markersToPlot = [];
        
        $scope.map = { 
            center: { 
                latitude: 38.6531004, 
                longitude: -90.243462 
            }, 
            zoom: 10 
        };
        
        $scope.plot = function() {
            $scope.map = {
                markers: [{
                    id: markerCount,
                    latitude: $scope.latitude,
                    longitude: $scope.longitude 
                }],
                dynamicMarkers: []
            };
            // For testing purposes, will remove when I get multiple markers to plot correctly
            console.log("lat is " + $scope.latitude + ", lng is " + $scope.longitude);
        };

        $scope.clear = function(){ 
            // To reset the text fields also
            $scope.streetAddress = '';
            $scope.city = '';
            $scope.state = '';
            $scope.zip = '';
            $scope.latitude = '';
            $scope.longitude = '';
            // Still need to add code to clear the map. 
        };
    })
;
