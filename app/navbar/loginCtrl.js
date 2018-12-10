
 




app.controller("loginCtrl", function($scope, $location, menager) {



   
    
    $scope.email = "jane@jane.co.il";
    $scope.pwd = "1111";

    $scope.invalidLogin = false;

    $scope.login = function() {
        $scope.invalidLogin = false;

        menager.login($scope.email, $scope.pwd).then(function() {
            // success login


            $("#myModal").modal("hide");
            $("body").removeClass("modal-open");
            $(".modal-backdrop").remove();


            
            $location.path("/gallery")
        }, function(error) {
            // failed login
            $scope.invalidLogin = true;
        })
    }
});