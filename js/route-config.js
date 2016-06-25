/**
 * Created by liyueying on 2016-06-25.
 */
define([],function(){
    return {
        "defaultUrl" : "/login",
        "states"  : {
            "login" : {
                url : "/login",
                templateUrl : "views/login.html",
                dependencies: [
                    "controllers/LoginController"
                ]
            },
            "home" : {
                abstract: true,
                url : "/login",
                templateUrl : "views/login.html",
                dependencies: [
                    "controllers/HomeController"
                ]
            }
        }
    }
});