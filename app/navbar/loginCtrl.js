
 




app.controller("loginCtrl", function($scope, $location, menager) {


 $scope.email = "";
    $scope.psw = "";
   
    
    // $scope.email = "jane@jane.co.il";
    // $scope.psw = "1111";

    $scope.invalidLogin = false;

    $scope.login = function() {
        $scope.invalidLogin = false;

        menager.login($scope.email, $scope.psw).then(function() {
            // success login


            // $("#myModal").modal("hide");
            //  $("body").removeClass("modal-open");
            // $(".modal-backdrop").remove();


            
            $location.path("/gallery")
        }, function(error) {
            // failed login
            $scope.invalidLogin = true;
        })
    }
});