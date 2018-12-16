app.controller("publicGalleryCtrl", function($scope, tenant, menager, $rooteParams, location) {


$scope.public = function(val){
        $scope.tenant.menageId = val;
        $scope.tenants = tenants;
        $location.path("/gallery");

    }, function(error) {
        
    }




    
})