app.factory("shelter", function($q, $http, menager) {

    var shelters = {};
    var wasEverLoaded = {};

    function shelter(plainShelter) {
        
        this.name = plainShelter.shname;
       
        this.adr = plainShelter.adr;
        this.telefone = plainShelter.telefone;
        this.direction = plainShelter.direction;
        this.menagerId = plainTenant.menagerId;
    }



    // "shname": "צער בעלי חיים",
    // "adr" : "Hahistradut 120 Haifa",
    // "telefone": "0504635977",
    // "direction": "אוטובוסים : 15, 1, 136",
    //  "menagerId": 2
            



    function showShelter() {
        var async = $q.defer();

        // var menagerId = menager.getActiveMenager().id;

        // This is a hack since we don't really have a persistant server.
        // So I want to get all recipes only once.
        // if (wasEverLoaded[menagerId]) {
        //     async.resolve(shelter[menagerId]);
        // } else 
        {
            shelter[menagerId] = [];
            var getShelterURL = "http://my-json-server.typicode.com/carmenKatz/DogHouse/shelters?menagerId=" + menagerId;
            
            $http.get(getShelterURL).then(function(response) {
                for (var i = 0; i < response.data.length; i++) {
                    var newShelter = new shelter(response.data[i]);
                    shelters[menagerId].push(newShelter);
                }
                wasEverLoaded[menagerId] = true;
                async.resolve(shelter[menagerId]);
            }, function(error) {
                async.reject(error);
            });
        }

        return async.promise;
    }


    // function addTenant(name, description, ingredients, steps, imgUrl) {
    //     var async = $q.defer();

    //     var userId = user.getActiveUser().id;

    //     var newRecipe = new Recipe({id:-1, name: name, description: description,
    //         ingredients: ingredients, steps: steps, imgUrl: imgUrl, 
    //         userId: userId});

    //     // if working with real server:
    //     //$http.post("http://my-json-server.typicode.com/nirch/recipe-book-v3/recipes", newRecipe).then.....

    //     recipes[userId].push(newRecipe);
    //     async.resolve(newRecipe);

    //     return async.promise;
    // }


    return shelter []

        
        // getActiveMenagerTenant: getActiveMenagerTenant
    //     createRecipe: createRecipe
    
})
