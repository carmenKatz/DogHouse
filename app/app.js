var app = angular.module("dogHouseApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
    }).when("/login", {
        templateUrl: "app/login/login.html"

    }).when("/signup",{
       

    }).when("/newdog",{

    }).when("/gallery",{
        templateUrl: "app/gallery/gallery.html"

    }).when("/navbar",{

    }).when("/list",{
        templateUrl: "app/list/list.html"
    })
})