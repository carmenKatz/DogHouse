
 




app.controller("loginCtrl", function($scope, $location, menager) {


     $scope.email = "";
    $scope.psw = "";
    // $scope.menagerId="";
    
    // $scope.email = "jane@jane.co.il";
    // $scope.psw = "1111";

    $scope.invalidLogin = false;

    $scope.login = function() {
        $scope.invalidLogin = false;

        menager.login($scope.email, $scope.psw).then(function() {
            // success login
          
           
            $location.path("/gallery")

        }, function(error) {
            // failed login
            $scope.invalidLogin = true;
        })
    }




    // $scope.public = function(val) {
    //     $scope.invalidLogin = true;
    //     $menagerId = val;
        
    //     visitor.public($scope.menagerId).then(function() {

    //         $location.path("/gallery")

    //     },
                         
    //     function(error) {
    //         // failed login
    //         console.log = menagerId;
    //     })
    // }


});