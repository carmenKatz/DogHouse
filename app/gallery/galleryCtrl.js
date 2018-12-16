app.controller("galleryCtrl", function($scope, tenant, menager, $location) {

    // Checking if the user is currently logged in,
    // if not redirecting to the home page
    if (!menager.isLoggedIn()) {
        $location.path("/");
        return;
    }

    tenant.getActiveMenagerTenant().then(function (tenants) {
        $scope.tenants = tenants;
    }, function(error) {
        
    });


    // $scope.public = function(val){
    //     $scope.tenant.menageId = val;
    //     $scope.tenants = tenants;
    //     $location.path("/gallery");

    // }, function(error) {
        
    // })

})
