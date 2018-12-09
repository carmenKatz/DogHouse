app.controller("navbarCtrl", function($scope){
    $scope.isUserLoggedin = function(){
        return true;
    }

    $scope.logout = function() {
        user.logout();
        $location.path("/");
    }
});