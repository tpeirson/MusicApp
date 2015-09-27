///<reference path = "https://ajax.googleapis.com/ajax/libs/angularjs/1.4.6/angular.min.js">

var routes = angular.module('routes', ['ngRoute']);

routes.config(function ($routeProvider) { 
    
    
    $routeProvider.when("/addSong", {

    templateUrl: '../partials/addSong.html',
    controller: 'addSong'
    })
    .when("/",{
        templateUrl: "../partials/initial.html",
        controller: 'homeController'
    })

});//end config