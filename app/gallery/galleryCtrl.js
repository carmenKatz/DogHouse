app.controller("tenantsGalleryCtrl", function($scope, tenant, mrg, $location) {

    // Checking if the user is currently logged in,
    // if not redirecting to the home page
    if (!mrg.isLoggedIn()) {
        $location.path("/");
        return;
    }

    // tenant.getActiveUserRecipes().then(function (recipes) {
    //     $scope.recipes = recipes;
    // }, function(error) {
        
    // })
})
