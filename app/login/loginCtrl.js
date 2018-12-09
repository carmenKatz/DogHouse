
 




app.controller("loginCtrl", function($scope, $location, user) {



   
    
    $scope.email = "jane@jane.co.il";
    $scope.pwd = "1111";

    $scope.invalidLogin = false;

    $scope.login = function() {
        $scope.invalidLogin = false;

        user.login($scope.email, $scope.pwd).then(function() {
            // success login
            $location.path("/gallery")
        }, function(error) {
            // failed login
            $scope.invalidLogin = true;
        })
    }
});