app.factory("mrg", function($q, $http) {

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
