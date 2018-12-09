app.controller("navbarCtrl", function($scope){
    $scope.isUserLoggedin = function(){
        return false;
    }

    $scope.logout = function() {
        user.logout();
        $location.path("/");
    }
});