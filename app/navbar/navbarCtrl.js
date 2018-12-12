app.controller("navbarCtrl", function($scope, menager, $location){
    $scope.isMenagerLoggedin = function(){
        return menager.isLoggedIn();
        // return true;
    }

    $scope.logout = function() {
        menager.logout();
        $location.path("/");
    }
});