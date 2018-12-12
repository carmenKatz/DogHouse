app.factory("menager", function($q, $http) {

    

    var activeMenager = null;
   

    function menager(plainMenager) {
        this.id = plainMenager.id;
        this.fname = plainMenager.fname;
        this.lname = plainMenager.lname;
        this.adr = plainMenager.adr;
        this.telefon = plainMenager.telefon;
        this.email = plainMenager.email;
        this.psw = plainMenager.psw;
    }

    // "id": 2,
    // "usrlnm": "Doe",
    // "usrfnm": "John",
    // "adr" : "Shaked 15 Nesher",
    // "telefone": "0779624360",  
       
      
    // "email": "john@john.co.il",
    // "psw": "1111"

    function login(email, psw) {
        var async = $q.defer();

        var loginURL = "http://my-json-server.typicode.com/carmenKatz/DogHouse/menagers?email=" +
            email + "&psw=" + psw;
            
        $http.get(loginURL).then(function(response) {
            if (response.data.length > 0) {
                // success login
                activeMenager = new menager(response.data[0]);
                async.resolve(activeMenager);
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
        return activeMenager ? true : false;
    }

    function logout() {
        activeMenager = null;
    }

    function getActiveMenager() {
        return activeMenager;
    }

    return {
        login: login,
        isLoggedIn: isLoggedIn,
        logout: logout,
        getActiveMenager: getActiveMenager
    }
})