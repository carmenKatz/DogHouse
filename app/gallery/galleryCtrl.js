app.controller("galleryCtrl", function($scope, tenant, menager, $location) {

    // Checking if the user is currently logged in,
    // if not redirecting to the home page
    if (!menager.isLoggedIn()) {
        $location.path("/");
        return;
    }

    tenants.getActiveMenagerTenants().then(function (tenants) {
        $scope.tenants = tenants;
    }, function(error) {
        
    })
})
