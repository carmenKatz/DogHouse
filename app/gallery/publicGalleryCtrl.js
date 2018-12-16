app.controller("publicGalleryCtrl", function($scope, tenant, menager, $routeParams, location) {


$scope.public = function(val){
        $scope.tenant.menagerId = val;
        $scope.tenants = tenants;
        $location.path("/gallery");

    }, function(error) {
        
    }




    
})