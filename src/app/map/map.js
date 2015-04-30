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
        var i = 0;
        
        $scope.map = { 
            center: { 
                latitude: 38.6531004, 
                longitude: -90.243462 
            }, 
            zoom: 10, 
            bounds: {} 
        };
        $scope.options = {
            scrollwheel: false
        };
        $scope.markersToPlot = []; 
       
        var geoCode = function (address, city, state, zip) {
            var theAddress = address;
            var theCity = city; 
            var theState = state;
            var theZip = zip;
        };

        var buildMarkerArray = function (theLat, theLng) {
            $scope.markersToPlot.push({
                id: i++,
                latitude: theLat,
                longitude: theLng
            });
            console.log("Added (id: " + i + " lat: " + $scope.latitude + " lng: " + $scope.longitude);
        };

 
        $scope.plot = function() {
            var theLat = $scope.latitude;
            var theLng = $scope.longitude;
            var theAddress = $scope.address;
            var theCity = $scope.city; 
            var theState = $scope.state;
            var theZip = $scope.zip;
 
            if (theLat != null && theLng != null) {
                buildMarkerArray(theLat, theLng);
            } else if (theAddress != null && theCity != null && theState != null && theZip != null) {
                buildMarkerArray(geoCode(theAddress, theCity, theState, theZip));
            } else { 
                alert("Please enter either: \n(1)an address including Street, City, State, and Zip or \n(2) Latitude and Longitude cordinates");
            }
        };

        $scope.clear = function(){ 
            $scope.markersToPlot = [];
            // To reset the text fields also
            $scope.streetAddress = '';
            $scope.city = '';
            $scope.state = '';
            $scope.zip = '';
            $scope.latitude = '';
            $scope.longitude = '';
            console.log("Map Cleared");
        };
    })
;
