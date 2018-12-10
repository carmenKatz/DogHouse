var app = angular.module("dogHouseApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "app/home/home.html"
  
    }).when("/signup",{
        templateUrl: "app/signup/signup.html"

   
    }).when("/gallery",{
        templateUrl: "app/gallery/gallery.html",
        controller: "galleryCtrl"
    }).when("/list",{
        templateUrl: "app/list/list.html"
    })
})