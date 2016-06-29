/**
 * Created by liyueying on 2016-06-25.
 */
define([], function() {
    return {
        "defaultUrl": "/home",
        "states": {
            "login": {
                url: "/login",
                templateUrl: "views/login.html",
                dependencies: [
                    "controllers/LoginController"
                ]
            },
            "home": {
                //abstract: true,
                url: "/home",
                templateUrl: "views/home.html",
                dependencies: [
                    "controllers/HomeController"
                ]
            }
        }
    }
});