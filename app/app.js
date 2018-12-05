var app = angular.module("dogHouseApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
    }).when("/login", {
        templateUrl: "app/login/login.html"

    }).when("/signup",{
       

    }).when("/newdog",{

    }).when("/galerry",{

    }).when("/navbar",{

    });
})