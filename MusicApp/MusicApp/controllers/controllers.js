///<reference path = "https://ajax.googleapis.com/ajax/libs/angularjs/1.4.6/angular.min.js">

var controllers = angular.module('controllers', ['msService']);

controllers.controller('addSong', function ($scope, service,$window) {

    $scope.track = service.track;

    $scope.copyTrack = angular.copy($scope.track);

    $scope.genres = ["Pop", "R&B", "Rap", "Dance", "Other"];

    $scope.formSub = function()
    {
        $scope.track = angular.copy($scope.copyTrack);
        $window.history.back();
    }

    $scope.cancelForm = function () {

        $window.history.back();

    }
        
});


controllers.controller('homeController', function ($scope, $location) {

    $scope.addSong = function () {

        $location.path('/addSong');
    };

})