var app = angular.module("dogHouseApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
    }).when("/login", {
        templateUrl: "app/login/login.html",
         controller: "loginCtrl"
    }).when("/signup",{
        templateUrl: "app/signup/signup.html"

    }).when("/newdog",{

    }).when("/gallery",{
        templateUrl: "app/gallery/gallery.html"

    }).when("/list",{
        templateUrl: "app/list/list.html"
    })
})