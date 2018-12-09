app.factory("mrg", function($q, $http) {

    $scope.ready(function () {
        $("#myBtn").click(function () {
          $("#myModal").modal();
        });
      });
    

    var activeMrg = null;
   

    function mrg(userMrg) {
        this.id = userMrg.id;
        this.fname = userMrg.usrfnm;
        this.lname = userMrg.usrlnm;
        this.adr = userMrg.adr;
        this.telefon = userMrg.telefon;
        this.email = userMrg.email;
        this.pwd = userMrg.pwd;
    }

    // "id": 2,
    // "usrlnm": "Doe",
    // "usrfnm": "John",
    // "adr" : "Shaked 15 Nesher",
    // "telefone": "0779624360",  
       
      
    // "email": "john@john.co.il",
    // "psw": "1111"

    function login(email, pwd) {
        var async = $q.defer();

        var loginURL = "http://my-json-server.typicode.com/carmenKatz/DogHouse/users?email=" +
            email + "&pwd=" + pwd;
        $http.get(loginURL).then(function(response) {
            if (response.data.length > 0) {
                // success login
                activeMrg = new Mrg(response.data[0]);
                async.resolve(activeMrg);
            } else {
                // invalid email or password
                async.reject("invalid email or password")
            }
        }, function(error) {
            async.reject(error);
        });

        return async.promise;
    }

    function isLoggedIn() {
        return activeMrg ? true : false;
    }

    function logout() {
        activeMrg = null;
    }

    function getActiveUser() {
        return activeMrg;
    }

    return {
        login: login,
        isLoggedIn: isLoggedIn,
        logout: logout,
        getActiveMrg: getActiveMrg
    }
})