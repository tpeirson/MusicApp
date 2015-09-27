///<reference path = "https://ajax.googleapis.com/ajax/libs/angularjs/1.4.6/angular.min.js">

var controllers = angular.module('controllers', ['msService']);

controllers.controller('addSong', function ($scope, service) {

    $scope.track = service.track;

    $scope.genres = ["Pop", "R&B", "Rap", "Dance", "Other"];

    $scope.formSub = function()
    {
        
    }
        
});