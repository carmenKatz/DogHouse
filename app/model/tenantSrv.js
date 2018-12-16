app.factory("tenant", function($q, $http, menager,) {

    var tenants = {};
    var wasEverLoaded = {};

    function tenant(plainTenant) {
        this.id = plainTenant.id;
        this.name = plainTenant.name;
        this.zan = plainTenant.zan;
        this.asize = plainTenant.asize;
        this.picUrl = plainTenant.picUrl;
        this.des = plainTenant.des;
        this.menagerId = plainTenant.menagerId;
    }



    // "id": 1,
    // "name":"מיצי",
    // "zan": "cat",
    // "age": ".5",
    // "asize": "normal",
    // "picUrl": "http://starkovtattoo.spb.ru/images/100/DSC100105908.jpg"   ,
    // "des": "blablablabla",
    // "menagerId": 1



    function getActiveMenagerTenant() {
        var async = $q.defer();

        var menagerId = menager.getActiveMenager().id;

        // This is a hack since we don't really have a persistant server.
        // So I want to get all recipes only once.
        if (wasEverLoaded[menagerId]) {
            async.resolve(tenant[menagerId]);
        } else {
            tenants[menagerId] = [];
            var getTenantURL = "http://my-json-server.typicode.com/carmenKatz/DogHouse/tenants?menagerId=" + menagerId;
            
            $http.get(getTenantURL).then(function(response) {
                for (var i = 0; i < response.data.length; i++) {
                    var newTenant = new tenant(response.data[i]);
                    tenants[menagerId].push(newTenant);
                }
                wasEverLoaded[menagerId] = true;
                async.resolve(tenants[menagerId]);
            }, function(error) {
                async.reject(error);
            });
        }

        return async.promise;
    }
 

    return {
        getActiveMenagerTenant: getActiveMenagerTenant
    //     createRecipe: createRecipe
    }


    function getTenantByManeger(manegerId) {
        var async = $q.defer();


        // var menagerId = menager.getActiveMenager().id;

        // This is a hack since we don't really have a persistant server.
        // So I want to get all recipes only once.
        if (wasEverLoaded[menagerId]) {
            async.resolve(tenant[menagerId]);
        } else {
            tenants[menagerId] = [];
            var getTenantURL = "http://my-json-server.typicode.com/carmenKatz/DogHouse/tenants?menagerId=" + menagerId;
            
            $http.get(getTenantURL).then(function(response) {
                for (var i = 0; i < response.data.length; i++) {
                    var newTenant = new tenant(response.data[i]);
                    tenants[menagerId].push(newTenant);
                }
                wasEverLoaded[menagerId] = true;
                async.resolve(tenants[menagerId]);
            }, function(error) {
                async.reject(error);
            });
        }

        return async.promise;
    }


    

    return {
        getTenantByManeger: getTenantByManeger
    //     createRecipe: createRecipe
    }





})





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

