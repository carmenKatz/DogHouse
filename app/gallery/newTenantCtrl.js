app.controller("newTenantCtrl", function($scope, tenant, $location, menager) {
    
    // Checking if the user is currently logged in,
    // if not redirecting to the home page
    if (!menager.isLoggedIn()) {
        $location.path("/");
        return;
    }

    $scope.addTenant = function () {
        // tenant.addTenant($scope.name, $scope.description, 
        //     $scope.ingrediants, $scope.steps,  $scope.image.src).then(function () {
        //     $location.path("/recipes")
        // }, function (err) {
        //     console.log(err);
    //     })
     }
})